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
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep } from "./googleanalyticsadminv1alphaaudiencesequencefilteraudiencesequencestep";
export var GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum;
(function (GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum) {
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum["AudienceFilterScopeUnspecified"] = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum["AudienceFilterScopeWithinSameEvent"] = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT";
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum["AudienceFilterScopeWithinSameSession"] = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION";
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum["AudienceFilterScopeAcrossAllSessions"] = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS";
})(GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum || (GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = {}));
// GoogleAnalyticsAdminV1alphaAudienceSequenceFilter
/**
 * Defines filters that must occur in a specific order for the user to be a member of the Audience.
**/
var GoogleAnalyticsAdminV1alphaAudienceSequenceFilter = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAudienceSequenceFilter, _super);
    function GoogleAnalyticsAdminV1alphaAudienceSequenceFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceSequenceFilter.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequenceMaximumDuration" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceSequenceFilter.prototype, "sequenceMaximumDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequenceSteps", elemType: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaAudienceSequenceFilter.prototype, "sequenceSteps", void 0);
    return GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAudienceSequenceFilter };
