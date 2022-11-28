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
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";
import { Error } from "./error";
// SetReturnPolicyResponse
/**
 * Complex type that that gets populated with a response containing a return policy.
**/
var SetReturnPolicyResponse = /** @class */ (function (_super) {
    __extends(SetReturnPolicyResponse, _super);
    function SetReturnPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType }),
        __metadata("design:type", Array)
    ], SetReturnPolicyResponse.prototype, "categoryTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedHolidayReturnsOffered" }),
        __metadata("design:type", Boolean)
    ], SetReturnPolicyResponse.prototype, "extendedHolidayReturnsOffered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internationalOverride" }),
        __metadata("design:type", InternationalReturnOverrideType)
    ], SetReturnPolicyResponse.prototype, "internationalOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refundMethod" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "refundMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restockingFeePercentage" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "restockingFeePercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnInstructions" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "returnInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnMethod" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "returnMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPeriod" }),
        __metadata("design:type", TimeDuration)
    ], SetReturnPolicyResponse.prototype, "returnPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPolicyId" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "returnPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnShippingCostPayer" }),
        __metadata("design:type", String)
    ], SetReturnPolicyResponse.prototype, "returnShippingCostPayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnsAccepted" }),
        __metadata("design:type", Boolean)
    ], SetReturnPolicyResponse.prototype, "returnsAccepted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error }),
        __metadata("design:type", Array)
    ], SetReturnPolicyResponse.prototype, "warnings", void 0);
    return SetReturnPolicyResponse;
}(SpeakeasyBase));
export { SetReturnPolicyResponse };
