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
import { FilteredBidDetailRow } from "./filteredbiddetailrow";
export var ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum;
(function (ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum) {
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["DetailTypeUnspecified"] = "DETAIL_TYPE_UNSPECIFIED";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["CreativeAttribute"] = "CREATIVE_ATTRIBUTE";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["Vendor"] = "VENDOR";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["SensitiveCategory"] = "SENSITIVE_CATEGORY";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["ProductCategory"] = "PRODUCT_CATEGORY";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["DisapprovalReason"] = "DISAPPROVAL_REASON";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["PolicyTopic"] = "POLICY_TOPIC";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["AtpVendor"] = "ATP_VENDOR";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["VendorDomain"] = "VENDOR_DOMAIN";
    ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum["GvlId"] = "GVL_ID";
})(ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum || (ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = {}));
// ListCreativeStatusBreakdownByDetailResponse
/**
 * Response message for listing all details associated with a given filtered bid reason.
**/
var ListCreativeStatusBreakdownByDetailResponse = /** @class */ (function (_super) {
    __extends(ListCreativeStatusBreakdownByDetailResponse, _super);
    function ListCreativeStatusBreakdownByDetailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailType" }),
        __metadata("design:type", String)
    ], ListCreativeStatusBreakdownByDetailResponse.prototype, "detailType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteredBidDetailRows", elemType: FilteredBidDetailRow }),
        __metadata("design:type", Array)
    ], ListCreativeStatusBreakdownByDetailResponse.prototype, "filteredBidDetailRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], ListCreativeStatusBreakdownByDetailResponse.prototype, "nextPageToken", void 0);
    return ListCreativeStatusBreakdownByDetailResponse;
}(SpeakeasyBase));
export { ListCreativeStatusBreakdownByDetailResponse };
