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
export var CreativeRequirementsCreativeFormatEnum;
(function (CreativeRequirementsCreativeFormatEnum) {
    CreativeRequirementsCreativeFormatEnum["CreativeFormatUnspecified"] = "CREATIVE_FORMAT_UNSPECIFIED";
    CreativeRequirementsCreativeFormatEnum["Display"] = "DISPLAY";
    CreativeRequirementsCreativeFormatEnum["Video"] = "VIDEO";
})(CreativeRequirementsCreativeFormatEnum || (CreativeRequirementsCreativeFormatEnum = {}));
export var CreativeRequirementsCreativePreApprovalPolicyEnum;
(function (CreativeRequirementsCreativePreApprovalPolicyEnum) {
    CreativeRequirementsCreativePreApprovalPolicyEnum["CreativePreApprovalPolicyUnspecified"] = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED";
    CreativeRequirementsCreativePreApprovalPolicyEnum["SellerPreApprovalRequired"] = "SELLER_PRE_APPROVAL_REQUIRED";
    CreativeRequirementsCreativePreApprovalPolicyEnum["SellerPreApprovalNotRequired"] = "SELLER_PRE_APPROVAL_NOT_REQUIRED";
})(CreativeRequirementsCreativePreApprovalPolicyEnum || (CreativeRequirementsCreativePreApprovalPolicyEnum = {}));
export var CreativeRequirementsCreativeSafeFrameCompatibilityEnum;
(function (CreativeRequirementsCreativeSafeFrameCompatibilityEnum) {
    CreativeRequirementsCreativeSafeFrameCompatibilityEnum["CreativeSafeFrameCompatibilityUnspecified"] = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED";
    CreativeRequirementsCreativeSafeFrameCompatibilityEnum["Compatible"] = "COMPATIBLE";
    CreativeRequirementsCreativeSafeFrameCompatibilityEnum["Incompatible"] = "INCOMPATIBLE";
})(CreativeRequirementsCreativeSafeFrameCompatibilityEnum || (CreativeRequirementsCreativeSafeFrameCompatibilityEnum = {}));
export var CreativeRequirementsProgrammaticCreativeSourceEnum;
(function (CreativeRequirementsProgrammaticCreativeSourceEnum) {
    CreativeRequirementsProgrammaticCreativeSourceEnum["ProgrammaticCreativeSourceUnspecified"] = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED";
    CreativeRequirementsProgrammaticCreativeSourceEnum["Advertiser"] = "ADVERTISER";
    CreativeRequirementsProgrammaticCreativeSourceEnum["Publisher"] = "PUBLISHER";
})(CreativeRequirementsProgrammaticCreativeSourceEnum || (CreativeRequirementsProgrammaticCreativeSourceEnum = {}));
export var CreativeRequirementsSkippableAdTypeEnum;
(function (CreativeRequirementsSkippableAdTypeEnum) {
    CreativeRequirementsSkippableAdTypeEnum["SkippableAdTypeUnspecified"] = "SKIPPABLE_AD_TYPE_UNSPECIFIED";
    CreativeRequirementsSkippableAdTypeEnum["Skippable"] = "SKIPPABLE";
    CreativeRequirementsSkippableAdTypeEnum["InstreamSelect"] = "INSTREAM_SELECT";
    CreativeRequirementsSkippableAdTypeEnum["NotSkippable"] = "NOT_SKIPPABLE";
    CreativeRequirementsSkippableAdTypeEnum["Any"] = "ANY";
})(CreativeRequirementsSkippableAdTypeEnum || (CreativeRequirementsSkippableAdTypeEnum = {}));
// CreativeRequirements
/**
 * Message captures data about the creatives in the deal.
**/
var CreativeRequirements = /** @class */ (function (_super) {
    __extends(CreativeRequirements, _super);
    function CreativeRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeFormat" }),
        __metadata("design:type", String)
    ], CreativeRequirements.prototype, "creativeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativePreApprovalPolicy" }),
        __metadata("design:type", String)
    ], CreativeRequirements.prototype, "creativePreApprovalPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeSafeFrameCompatibility" }),
        __metadata("design:type", String)
    ], CreativeRequirements.prototype, "creativeSafeFrameCompatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAdDurationMs" }),
        __metadata("design:type", String)
    ], CreativeRequirements.prototype, "maxAdDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=programmaticCreativeSource" }),
        __metadata("design:type", String)
    ], CreativeRequirements.prototype, "programmaticCreativeSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippableAdType" }),
        __metadata("design:type", String)
    ], CreativeRequirements.prototype, "skippableAdType", void 0);
    return CreativeRequirements;
}(SpeakeasyBase));
export { CreativeRequirements };
