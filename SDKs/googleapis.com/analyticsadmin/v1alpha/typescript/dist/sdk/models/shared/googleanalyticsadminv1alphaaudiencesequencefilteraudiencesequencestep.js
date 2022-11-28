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
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";
export var GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum;
(function (GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum) {
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum["AudienceFilterScopeUnspecified"] = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum["AudienceFilterScopeWithinSameEvent"] = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT";
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum["AudienceFilterScopeWithinSameSession"] = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION";
    GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum["AudienceFilterScopeAcrossAllSessions"] = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS";
})(GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum || (GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum = {}));
// GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep
/**
 * A condition that must occur in the specified step order for this user to match the sequence.
**/
var GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep, _super);
    function GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraintDuration" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.prototype, "constraintDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterExpression" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceFilterExpression)
    ], GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.prototype, "filterExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=immediatelyFollows" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.prototype, "immediatelyFollows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.prototype, "scope", void 0);
    return GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep };
