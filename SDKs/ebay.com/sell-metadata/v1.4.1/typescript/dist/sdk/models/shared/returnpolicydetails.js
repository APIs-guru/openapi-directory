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
import { TimeDuration } from "./timeduration";
// ReturnPolicyDetails
/**
 * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
**/
var ReturnPolicyDetails = /** @class */ (function (_super) {
    __extends(ReturnPolicyDetails, _super);
    function ReturnPolicyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyDescriptionEnabled" }),
        __metadata("design:type", Boolean)
    ], ReturnPolicyDetails.prototype, "policyDescriptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refundMethods" }),
        __metadata("design:type", Array)
    ], ReturnPolicyDetails.prototype, "refundMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnMethods" }),
        __metadata("design:type", Array)
    ], ReturnPolicyDetails.prototype, "returnMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPeriods", elemType: TimeDuration }),
        __metadata("design:type", Array)
    ], ReturnPolicyDetails.prototype, "returnPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnShippingCostPayers" }),
        __metadata("design:type", Array)
    ], ReturnPolicyDetails.prototype, "returnShippingCostPayers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnsAcceptanceEnabled" }),
        __metadata("design:type", Boolean)
    ], ReturnPolicyDetails.prototype, "returnsAcceptanceEnabled", void 0);
    return ReturnPolicyDetails;
}(SpeakeasyBase));
export { ReturnPolicyDetails };
