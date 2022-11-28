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
import { AdTechnologyProviders } from "./adtechnologyproviders";
import { Correction } from "./correction";
import { HtmlContent } from "./htmlcontent";
import { NativeContent } from "./nativecontent";
import { ServingRestriction } from "./servingrestriction";
import { VideoContent } from "./videocontent";
export var CreativeAttributesEnum;
(function (CreativeAttributesEnum) {
    CreativeAttributesEnum["AttributeUnspecified"] = "ATTRIBUTE_UNSPECIFIED";
    CreativeAttributesEnum["ImageRichMedia"] = "IMAGE_RICH_MEDIA";
    CreativeAttributesEnum["AdobeFlashFlv"] = "ADOBE_FLASH_FLV";
    CreativeAttributesEnum["IsTagged"] = "IS_TAGGED";
    CreativeAttributesEnum["IsCookieTargeted"] = "IS_COOKIE_TARGETED";
    CreativeAttributesEnum["IsUserInterestTargeted"] = "IS_USER_INTEREST_TARGETED";
    CreativeAttributesEnum["ExpandingDirectionNone"] = "EXPANDING_DIRECTION_NONE";
    CreativeAttributesEnum["ExpandingDirectionUp"] = "EXPANDING_DIRECTION_UP";
    CreativeAttributesEnum["ExpandingDirectionDown"] = "EXPANDING_DIRECTION_DOWN";
    CreativeAttributesEnum["ExpandingDirectionLeft"] = "EXPANDING_DIRECTION_LEFT";
    CreativeAttributesEnum["ExpandingDirectionRight"] = "EXPANDING_DIRECTION_RIGHT";
    CreativeAttributesEnum["ExpandingDirectionUpLeft"] = "EXPANDING_DIRECTION_UP_LEFT";
    CreativeAttributesEnum["ExpandingDirectionUpRight"] = "EXPANDING_DIRECTION_UP_RIGHT";
    CreativeAttributesEnum["ExpandingDirectionDownLeft"] = "EXPANDING_DIRECTION_DOWN_LEFT";
    CreativeAttributesEnum["ExpandingDirectionDownRight"] = "EXPANDING_DIRECTION_DOWN_RIGHT";
    CreativeAttributesEnum["CreativeTypeHtml"] = "CREATIVE_TYPE_HTML";
    CreativeAttributesEnum["CreativeTypeVastVideo"] = "CREATIVE_TYPE_VAST_VIDEO";
    CreativeAttributesEnum["ExpandingDirectionUpOrDown"] = "EXPANDING_DIRECTION_UP_OR_DOWN";
    CreativeAttributesEnum["ExpandingDirectionLeftOrRight"] = "EXPANDING_DIRECTION_LEFT_OR_RIGHT";
    CreativeAttributesEnum["ExpandingDirectionAnyDiagonal"] = "EXPANDING_DIRECTION_ANY_DIAGONAL";
    CreativeAttributesEnum["ExpandingActionRolloverToExpand"] = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND";
    CreativeAttributesEnum["InstreamVastVideoTypeVpaidFlash"] = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH";
    CreativeAttributesEnum["RichMediaCapabilityTypeMraid"] = "RICH_MEDIA_CAPABILITY_TYPE_MRAID";
    CreativeAttributesEnum["RichMediaCapabilityTypeFlash"] = "RICH_MEDIA_CAPABILITY_TYPE_FLASH";
    CreativeAttributesEnum["RichMediaCapabilityTypeHtml5"] = "RICH_MEDIA_CAPABILITY_TYPE_HTML5";
    CreativeAttributesEnum["SkippableInstreamVideo"] = "SKIPPABLE_INSTREAM_VIDEO";
    CreativeAttributesEnum["RichMediaCapabilityTypeSsl"] = "RICH_MEDIA_CAPABILITY_TYPE_SSL";
    CreativeAttributesEnum["RichMediaCapabilityTypeNonSsl"] = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL";
    CreativeAttributesEnum["RichMediaCapabilityTypeInterstitial"] = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL";
    CreativeAttributesEnum["NonSkippableInstreamVideo"] = "NON_SKIPPABLE_INSTREAM_VIDEO";
    CreativeAttributesEnum["NativeEligibilityEligible"] = "NATIVE_ELIGIBILITY_ELIGIBLE";
    CreativeAttributesEnum["NonVpaid"] = "NON_VPAID";
    CreativeAttributesEnum["NativeEligibilityNotEligible"] = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE";
    CreativeAttributesEnum["AnyInterstitial"] = "ANY_INTERSTITIAL";
    CreativeAttributesEnum["NonInterstitial"] = "NON_INTERSTITIAL";
    CreativeAttributesEnum["InBannerVideo"] = "IN_BANNER_VIDEO";
    CreativeAttributesEnum["RenderingSizelessAdx"] = "RENDERING_SIZELESS_ADX";
    CreativeAttributesEnum["Omsdk10"] = "OMSDK_1_0";
})(CreativeAttributesEnum || (CreativeAttributesEnum = {}));
export var CreativeDealsStatusEnum;
(function (CreativeDealsStatusEnum) {
    CreativeDealsStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    CreativeDealsStatusEnum["NotChecked"] = "NOT_CHECKED";
    CreativeDealsStatusEnum["ConditionallyApproved"] = "CONDITIONALLY_APPROVED";
    CreativeDealsStatusEnum["Approved"] = "APPROVED";
    CreativeDealsStatusEnum["Disapproved"] = "DISAPPROVED";
    CreativeDealsStatusEnum["PendingReview"] = "PENDING_REVIEW";
    CreativeDealsStatusEnum["StatusTypeUnspecified"] = "STATUS_TYPE_UNSPECIFIED";
})(CreativeDealsStatusEnum || (CreativeDealsStatusEnum = {}));
export var CreativeOpenAuctionStatusEnum;
(function (CreativeOpenAuctionStatusEnum) {
    CreativeOpenAuctionStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    CreativeOpenAuctionStatusEnum["NotChecked"] = "NOT_CHECKED";
    CreativeOpenAuctionStatusEnum["ConditionallyApproved"] = "CONDITIONALLY_APPROVED";
    CreativeOpenAuctionStatusEnum["Approved"] = "APPROVED";
    CreativeOpenAuctionStatusEnum["Disapproved"] = "DISAPPROVED";
    CreativeOpenAuctionStatusEnum["PendingReview"] = "PENDING_REVIEW";
    CreativeOpenAuctionStatusEnum["StatusTypeUnspecified"] = "STATUS_TYPE_UNSPECIFIED";
})(CreativeOpenAuctionStatusEnum || (CreativeOpenAuctionStatusEnum = {}));
export var CreativeRestrictedCategoriesEnum;
(function (CreativeRestrictedCategoriesEnum) {
    CreativeRestrictedCategoriesEnum["NoRestrictedCategories"] = "NO_RESTRICTED_CATEGORIES";
    CreativeRestrictedCategoriesEnum["Alcohol"] = "ALCOHOL";
})(CreativeRestrictedCategoriesEnum || (CreativeRestrictedCategoriesEnum = {}));
// Creative
/**
 * A creative and its classification data.
**/
var Creative = /** @class */ (function (_super) {
    __extends(Creative, _super);
    function Creative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adChoicesDestinationUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "adChoicesDestinationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adTechnologyProviders" }),
        __metadata("design:type", AdTechnologyProviders)
    ], Creative.prototype, "adTechnologyProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserName" }),
        __metadata("design:type", String)
    ], Creative.prototype, "advertiserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiUpdateTime" }),
        __metadata("design:type", String)
    ], Creative.prototype, "apiUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrls" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "clickThroughUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corrections", elemType: Correction }),
        __metadata("design:type", Array)
    ], Creative.prototype, "corrections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "creativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealsStatus" }),
        __metadata("design:type", String)
    ], Creative.prototype, "dealsStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredClickThroughUrls" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "declaredClickThroughUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedAdvertiserIds" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "detectedAdvertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedDomains" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "detectedDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedLanguages" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "detectedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedProductCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "detectedProductCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedSensitiveCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "detectedSensitiveCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", HtmlContent)
    ], Creative.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionTrackingUrls" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "impressionTrackingUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=native" }),
        __metadata("design:type", NativeContent)
    ], Creative.prototype, "native", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openAuctionStatus" }),
        __metadata("design:type", String)
    ], Creative.prototype, "openAuctionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "restrictedCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingRestrictions", elemType: ServingRestriction }),
        __metadata("design:type", Array)
    ], Creative.prototype, "servingRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendorIds" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "vendorIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video" }),
        __metadata("design:type", VideoContent)
    ], Creative.prototype, "video", void 0);
    return Creative;
}(SpeakeasyBase));
export { Creative };
