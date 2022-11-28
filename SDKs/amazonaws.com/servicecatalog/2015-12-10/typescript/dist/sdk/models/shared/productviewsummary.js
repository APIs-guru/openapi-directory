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
import { ProductTypeEnum } from "./producttypeenum";
// ProductViewSummary
/**
 * Summary information about a product view.
**/
var ProductViewSummary = /** @class */ (function (_super) {
    __extends(ProductViewSummary, _super);
    function ProductViewSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Distributor" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "distributor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasDefaultPath" }),
        __metadata("design:type", Boolean)
    ], ProductViewSummary.prototype, "hasDefaultPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Owner" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShortDescription" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportDescription" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "supportDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportEmail" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "supportEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportUrl" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "supportUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ProductViewSummary.prototype, "type", void 0);
    return ProductViewSummary;
}(SpeakeasyBase));
export { ProductViewSummary };
