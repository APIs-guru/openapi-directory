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
import { GoogleAnalyticsAdminV1alphaAudienceEventTrigger } from "./googleanalyticsadminv1alphaaudienceeventtrigger";
import { GoogleAnalyticsAdminV1alphaAudienceFilterClause } from "./googleanalyticsadminv1alphaaudiencefilterclause";
export var GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;
(function (GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum) {
    GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum["AudienceExclusionDurationModeUnspecified"] = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum["ExcludeTemporarily"] = "EXCLUDE_TEMPORARILY";
    GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum["ExcludePermanently"] = "EXCLUDE_PERMANENTLY";
})(GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum || (GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum = {}));
// GoogleAnalyticsAdminV1alphaAudienceInput
/**
 * A resource message representing a GA4 Audience.
**/
var GoogleAnalyticsAdminV1alphaAudienceInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAudienceInput, _super);
    function GoogleAnalyticsAdminV1alphaAudienceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTrigger" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceEventTrigger)
    ], GoogleAnalyticsAdminV1alphaAudienceInput.prototype, "eventTrigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusionDurationMode" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceInput.prototype, "exclusionDurationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterClauses", elemType: GoogleAnalyticsAdminV1alphaAudienceFilterClause }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaAudienceInput.prototype, "filterClauses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipDurationDays" }),
        __metadata("design:type", Number)
    ], GoogleAnalyticsAdminV1alphaAudienceInput.prototype, "membershipDurationDays", void 0);
    return GoogleAnalyticsAdminV1alphaAudienceInput;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAudienceInput };
// GoogleAnalyticsAdminV1alphaAudience
/**
 * A resource message representing a GA4 Audience.
**/
var GoogleAnalyticsAdminV1alphaAudience = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAudience, _super);
    function GoogleAnalyticsAdminV1alphaAudience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "adsPersonalizationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTrigger" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceEventTrigger)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "eventTrigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusionDurationMode" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "exclusionDurationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterClauses", elemType: GoogleAnalyticsAdminV1alphaAudienceFilterClause }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "filterClauses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipDurationDays" }),
        __metadata("design:type", Number)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "membershipDurationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudience.prototype, "name", void 0);
    return GoogleAnalyticsAdminV1alphaAudience;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAudience };
