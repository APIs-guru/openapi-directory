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
export var DisapprovalReasonEnum;
(function (DisapprovalReasonEnum) {
    DisapprovalReasonEnum["LengthOfImageAnimation"] = "LENGTH_OF_IMAGE_ANIMATION";
    DisapprovalReasonEnum["BrokenUrl"] = "BROKEN_URL";
    DisapprovalReasonEnum["MediaNotFunctional"] = "MEDIA_NOT_FUNCTIONAL";
    DisapprovalReasonEnum["InvalidFourthPartyCall"] = "INVALID_FOURTH_PARTY_CALL";
    DisapprovalReasonEnum["IncorrectRemarketingDeclaration"] = "INCORRECT_REMARKETING_DECLARATION";
    DisapprovalReasonEnum["LandingPageError"] = "LANDING_PAGE_ERROR";
    DisapprovalReasonEnum["AdSizeDoesNotMatchAdSlot"] = "AD_SIZE_DOES_NOT_MATCH_AD_SLOT";
    DisapprovalReasonEnum["NoBorder"] = "NO_BORDER";
    DisapprovalReasonEnum["FourthPartyBrowserCookies"] = "FOURTH_PARTY_BROWSER_COOKIES";
    DisapprovalReasonEnum["LsoObjects"] = "LSO_OBJECTS";
    DisapprovalReasonEnum["BlankCreative"] = "BLANK_CREATIVE";
    DisapprovalReasonEnum["DestinationUrlsUndeclared"] = "DESTINATION_URLS_UNDECLARED";
    DisapprovalReasonEnum["ProblemWithClickMacro"] = "PROBLEM_WITH_CLICK_MACRO";
    DisapprovalReasonEnum["IncorrectAdTechnologyDeclaration"] = "INCORRECT_AD_TECHNOLOGY_DECLARATION";
    DisapprovalReasonEnum["IncorrectDestinationUrlDeclaration"] = "INCORRECT_DESTINATION_URL_DECLARATION";
    DisapprovalReasonEnum["ExpandableIncorrectDirection"] = "EXPANDABLE_INCORRECT_DIRECTION";
    DisapprovalReasonEnum["ExpandableDirectionNotSupported"] = "EXPANDABLE_DIRECTION_NOT_SUPPORTED";
    DisapprovalReasonEnum["ExpandableInvalidVendor"] = "EXPANDABLE_INVALID_VENDOR";
    DisapprovalReasonEnum["ExpandableFunctionality"] = "EXPANDABLE_FUNCTIONALITY";
    DisapprovalReasonEnum["VideoInvalidVendor"] = "VIDEO_INVALID_VENDOR";
    DisapprovalReasonEnum["VideoUnsupportedLength"] = "VIDEO_UNSUPPORTED_LENGTH";
    DisapprovalReasonEnum["VideoUnsupportedFormat"] = "VIDEO_UNSUPPORTED_FORMAT";
    DisapprovalReasonEnum["VideoFunctionality"] = "VIDEO_FUNCTIONALITY";
    DisapprovalReasonEnum["LandingPageDisabled"] = "LANDING_PAGE_DISABLED";
    DisapprovalReasonEnum["MalwareSuspected"] = "MALWARE_SUSPECTED";
    DisapprovalReasonEnum["AdultImageOrVideo"] = "ADULT_IMAGE_OR_VIDEO";
    DisapprovalReasonEnum["InaccurateAdText"] = "INACCURATE_AD_TEXT";
    DisapprovalReasonEnum["CounterfeitDesignerGoods"] = "COUNTERFEIT_DESIGNER_GOODS";
    DisapprovalReasonEnum["PopUp"] = "POP_UP";
    DisapprovalReasonEnum["InvalidRtbProtocolUsage"] = "INVALID_RTB_PROTOCOL_USAGE";
    DisapprovalReasonEnum["RawIpAddressInSnippet"] = "RAW_IP_ADDRESS_IN_SNIPPET";
    DisapprovalReasonEnum["UnacceptableContentSoftware"] = "UNACCEPTABLE_CONTENT_SOFTWARE";
    DisapprovalReasonEnum["UnauthorizedCookieOnGoogleDomain"] = "UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN";
    DisapprovalReasonEnum["UndeclaredFlashObjects"] = "UNDECLARED_FLASH_OBJECTS";
    DisapprovalReasonEnum["InvalidSslDeclaration"] = "INVALID_SSL_DECLARATION";
    DisapprovalReasonEnum["DirectDownloadInAd"] = "DIRECT_DOWNLOAD_IN_AD";
    DisapprovalReasonEnum["MaximumDownloadSizeExceeded"] = "MAXIMUM_DOWNLOAD_SIZE_EXCEEDED";
    DisapprovalReasonEnum["DestinationUrlSiteNotCrawlable"] = "DESTINATION_URL_SITE_NOT_CRAWLABLE";
    DisapprovalReasonEnum["BadUrlLegalDisapproval"] = "BAD_URL_LEGAL_DISAPPROVAL";
    DisapprovalReasonEnum["PharmaGamblingAlcoholNotAllowed"] = "PHARMA_GAMBLING_ALCOHOL_NOT_ALLOWED";
    DisapprovalReasonEnum["DynamicDnsAtDestinationUrl"] = "DYNAMIC_DNS_AT_DESTINATION_URL";
    DisapprovalReasonEnum["PoorImageOrVideoQuality"] = "POOR_IMAGE_OR_VIDEO_QUALITY";
    DisapprovalReasonEnum["UnacceptableImageContent"] = "UNACCEPTABLE_IMAGE_CONTENT";
    DisapprovalReasonEnum["IncorrectImageLayout"] = "INCORRECT_IMAGE_LAYOUT";
    DisapprovalReasonEnum["IrrelevantImageOrVideo"] = "IRRELEVANT_IMAGE_OR_VIDEO";
    DisapprovalReasonEnum["DestinationSiteDoesNotAllowGoingBack"] = "DESTINATION_SITE_DOES_NOT_ALLOW_GOING_BACK";
    DisapprovalReasonEnum["MisleadingClaimsInAd"] = "MISLEADING_CLAIMS_IN_AD";
    DisapprovalReasonEnum["RestrictedProducts"] = "RESTRICTED_PRODUCTS";
    DisapprovalReasonEnum["UnacceptableContent"] = "UNACCEPTABLE_CONTENT";
    DisapprovalReasonEnum["AutomatedAdClicking"] = "AUTOMATED_AD_CLICKING";
    DisapprovalReasonEnum["InvalidUrlProtocol"] = "INVALID_URL_PROTOCOL";
    DisapprovalReasonEnum["UndeclaredRestrictedContent"] = "UNDECLARED_RESTRICTED_CONTENT";
    DisapprovalReasonEnum["InvalidRemarketingListUsage"] = "INVALID_REMARKETING_LIST_USAGE";
    DisapprovalReasonEnum["DestinationSiteNotCrawlableRobotsTxt"] = "DESTINATION_SITE_NOT_CRAWLABLE_ROBOTS_TXT";
    DisapprovalReasonEnum["ClickToDownloadNotAnApp"] = "CLICK_TO_DOWNLOAD_NOT_AN_APP";
    DisapprovalReasonEnum["InaccurateReviewExtension"] = "INACCURATE_REVIEW_EXTENSION";
    DisapprovalReasonEnum["SexuallyExplicitContent"] = "SEXUALLY_EXPLICIT_CONTENT";
    DisapprovalReasonEnum["GainingAnUnfairAdvantage"] = "GAINING_AN_UNFAIR_ADVANTAGE";
    DisapprovalReasonEnum["GamingTheGoogleNetwork"] = "GAMING_THE_GOOGLE_NETWORK";
    DisapprovalReasonEnum["DangerousProductsKnives"] = "DANGEROUS_PRODUCTS_KNIVES";
    DisapprovalReasonEnum["DangerousProductsExplosives"] = "DANGEROUS_PRODUCTS_EXPLOSIVES";
    DisapprovalReasonEnum["DangerousProductsGuns"] = "DANGEROUS_PRODUCTS_GUNS";
    DisapprovalReasonEnum["DangerousProductsDrugs"] = "DANGEROUS_PRODUCTS_DRUGS";
    DisapprovalReasonEnum["DangerousProductsTobacco"] = "DANGEROUS_PRODUCTS_TOBACCO";
    DisapprovalReasonEnum["DangerousProductsWeapons"] = "DANGEROUS_PRODUCTS_WEAPONS";
    DisapprovalReasonEnum["UnclearOrIrrelevantAd"] = "UNCLEAR_OR_IRRELEVANT_AD";
    DisapprovalReasonEnum["ProfessionalStandards"] = "PROFESSIONAL_STANDARDS";
    DisapprovalReasonEnum["DysfunctionalPromotion"] = "DYSFUNCTIONAL_PROMOTION";
    DisapprovalReasonEnum["InvalidInterestBasedAd"] = "INVALID_INTEREST_BASED_AD";
    DisapprovalReasonEnum["MisuseOfPersonalInformation"] = "MISUSE_OF_PERSONAL_INFORMATION";
    DisapprovalReasonEnum["OmissionOfRelevantInformation"] = "OMISSION_OF_RELEVANT_INFORMATION";
    DisapprovalReasonEnum["UnavailablePromotions"] = "UNAVAILABLE_PROMOTIONS";
    DisapprovalReasonEnum["MisleadingPromotions"] = "MISLEADING_PROMOTIONS";
    DisapprovalReasonEnum["InappropriateContent"] = "INAPPROPRIATE_CONTENT";
    DisapprovalReasonEnum["SensitiveEvents"] = "SENSITIVE_EVENTS";
    DisapprovalReasonEnum["ShockingContent"] = "SHOCKING_CONTENT";
    DisapprovalReasonEnum["EnablingDishonestBehavior"] = "ENABLING_DISHONEST_BEHAVIOR";
    DisapprovalReasonEnum["TechnicalRequirements"] = "TECHNICAL_REQUIREMENTS";
    DisapprovalReasonEnum["RestrictedPoliticalContent"] = "RESTRICTED_POLITICAL_CONTENT";
    DisapprovalReasonEnum["UnsupportedContent"] = "UNSUPPORTED_CONTENT";
    DisapprovalReasonEnum["InvalidBiddingMethod"] = "INVALID_BIDDING_METHOD";
    DisapprovalReasonEnum["VideoTooLong"] = "VIDEO_TOO_LONG";
    DisapprovalReasonEnum["ViolatesJapanesePharmacyLaw"] = "VIOLATES_JAPANESE_PHARMACY_LAW";
    DisapprovalReasonEnum["UnaccreditedPetPharmacy"] = "UNACCREDITED_PET_PHARMACY";
    DisapprovalReasonEnum["Abortion"] = "ABORTION";
    DisapprovalReasonEnum["Contraceptives"] = "CONTRACEPTIVES";
    DisapprovalReasonEnum["NeedCertificatesToAdvertiseInChina"] = "NEED_CERTIFICATES_TO_ADVERTISE_IN_CHINA";
    DisapprovalReasonEnum["KcdspRegistration"] = "KCDSP_REGISTRATION";
    DisapprovalReasonEnum["NotFamilySafe"] = "NOT_FAMILY_SAFE";
    DisapprovalReasonEnum["ClinicalTrialRecruitment"] = "CLINICAL_TRIAL_RECRUITMENT";
    DisapprovalReasonEnum["MaximumNumberOfHttpCallsExceeded"] = "MAXIMUM_NUMBER_OF_HTTP_CALLS_EXCEEDED";
    DisapprovalReasonEnum["MaximumNumberOfCookiesExceeded"] = "MAXIMUM_NUMBER_OF_COOKIES_EXCEEDED";
    DisapprovalReasonEnum["PersonalLoans"] = "PERSONAL_LOANS";
    DisapprovalReasonEnum["UnsupportedFlashContent"] = "UNSUPPORTED_FLASH_CONTENT";
    DisapprovalReasonEnum["MisuseByOmidScript"] = "MISUSE_BY_OMID_SCRIPT";
    DisapprovalReasonEnum["NonWhitelistedOmidVendor"] = "NON_WHITELISTED_OMID_VENDOR";
    DisapprovalReasonEnum["DestinationExperience"] = "DESTINATION_EXPERIENCE";
    DisapprovalReasonEnum["UnsupportedLanguage"] = "UNSUPPORTED_LANGUAGE";
    DisapprovalReasonEnum["NonSslCompliant"] = "NON_SSL_COMPLIANT";
    DisapprovalReasonEnum["TemporaryPause"] = "TEMPORARY_PAUSE";
    DisapprovalReasonEnum["BailBonds"] = "BAIL_BONDS";
    DisapprovalReasonEnum["ExperimentalMedicalTreatment"] = "EXPERIMENTAL_MEDICAL_TREATMENT";
})(DisapprovalReasonEnum || (DisapprovalReasonEnum = {}));
// Disapproval
/**
 * Output only. The reason and details for a disapproval.
**/
var Disapproval = /** @class */ (function (_super) {
    __extends(Disapproval, _super);
    function Disapproval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], Disapproval.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], Disapproval.prototype, "reason", void 0);
    return Disapproval;
}(SpeakeasyBase));
export { Disapproval };
