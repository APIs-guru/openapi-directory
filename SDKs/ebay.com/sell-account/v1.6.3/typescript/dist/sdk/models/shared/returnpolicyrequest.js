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
// ReturnPolicyRequest
/**
 * This root container defines a seller's return policy for a specific marketplace and category type. Used when creating or updating a return policy, returnPolicyRequest encapsulates a seller's terms for how buyers can return items. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Use the Metadata API method to determine which categories in the marketplace(s) require you to provide a return policy. Also note that some marketplaces require you to provide a specific return policy for vehicle listings. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
var ReturnPolicyRequest = /** @class */ (function (_super) {
    __extends(ReturnPolicyRequest, _super);
    function ReturnPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType }),
        __metadata("design:type", Array)
    ], ReturnPolicyRequest.prototype, "categoryTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedHolidayReturnsOffered" }),
        __metadata("design:type", Boolean)
    ], ReturnPolicyRequest.prototype, "extendedHolidayReturnsOffered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internationalOverride" }),
        __metadata("design:type", InternationalReturnOverrideType)
    ], ReturnPolicyRequest.prototype, "internationalOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refundMethod" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "refundMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restockingFeePercentage" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "restockingFeePercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnInstructions" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "returnInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnMethod" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "returnMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPeriod" }),
        __metadata("design:type", TimeDuration)
    ], ReturnPolicyRequest.prototype, "returnPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnShippingCostPayer" }),
        __metadata("design:type", String)
    ], ReturnPolicyRequest.prototype, "returnShippingCostPayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnsAccepted" }),
        __metadata("design:type", Boolean)
    ], ReturnPolicyRequest.prototype, "returnsAccepted", void 0);
    return ReturnPolicyRequest;
}(SpeakeasyBase));
export { ReturnPolicyRequest };
