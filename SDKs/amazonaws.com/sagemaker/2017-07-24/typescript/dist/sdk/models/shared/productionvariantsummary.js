var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeployedImage } from "./deployedimage";
// ProductionVariantSummary
/**
 * Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values.
**/
var ProductionVariantSummary = /** @class */ (function (_super) {
    __extends(ProductionVariantSummary, _super);
    function ProductionVariantSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentInstanceCount" }),
        __metadata("design:type", Number)
    ], ProductionVariantSummary.prototype, "currentInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentWeight" }),
        __metadata("design:type", Number)
    ], ProductionVariantSummary.prototype, "currentWeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeployedImages", elemType: DeployedImage }),
        __metadata("design:type", Array)
    ], ProductionVariantSummary.prototype, "deployedImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DesiredInstanceCount" }),
        __metadata("design:type", Number)
    ], ProductionVariantSummary.prototype, "desiredInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DesiredWeight" }),
        __metadata("design:type", Number)
    ], ProductionVariantSummary.prototype, "desiredWeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VariantName" }),
        __metadata("design:type", String)
    ], ProductionVariantSummary.prototype, "variantName", void 0);
    return ProductionVariantSummary;
}(SpeakeasyBase));
export { ProductionVariantSummary };
