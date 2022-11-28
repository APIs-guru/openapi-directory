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
export var GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum;
(function (GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum) {
    GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum["LogConditionUnspecified"] = "LOG_CONDITION_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum["AudienceJoined"] = "AUDIENCE_JOINED";
    GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum["AudienceMembershipRenewed"] = "AUDIENCE_MEMBERSHIP_RENEWED";
})(GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum || (GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum = {}));
// GoogleAnalyticsAdminV1alphaAudienceEventTrigger
/**
 * Specifies an event to log when a user joins the Audience.
**/
var GoogleAnalyticsAdminV1alphaAudienceEventTrigger = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAudienceEventTrigger, _super);
    function GoogleAnalyticsAdminV1alphaAudienceEventTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceEventTrigger.prototype, "eventName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logCondition" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceEventTrigger.prototype, "logCondition", void 0);
    return GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAudienceEventTrigger };
