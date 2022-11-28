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
export var GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum;
(function (GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum) {
    GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum["GoogleSignalsConsentUnspecified"] = "GOOGLE_SIGNALS_CONSENT_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum["GoogleSignalsConsentConsented"] = "GOOGLE_SIGNALS_CONSENT_CONSENTED";
    GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum["GoogleSignalsConsentNotConsented"] = "GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED";
})(GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum || (GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsentEnum = {}));
export var GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum;
(function (GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum) {
    GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum["GoogleSignalsStateUnspecified"] = "GOOGLE_SIGNALS_STATE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum["GoogleSignalsEnabled"] = "GOOGLE_SIGNALS_ENABLED";
    GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum["GoogleSignalsDisabled"] = "GOOGLE_SIGNALS_DISABLED";
})(GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum || (GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsStateEnum = {}));
// GoogleAnalyticsAdminV1alphaGoogleSignalsSettings
/**
 * Settings values for Google Signals. This is a singleton resource.
**/
var GoogleAnalyticsAdminV1alphaGoogleSignalsSettings = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaGoogleSignalsSettings, _super);
    function GoogleAnalyticsAdminV1alphaGoogleSignalsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consent" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaGoogleSignalsSettings.prototype, "consent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaGoogleSignalsSettings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaGoogleSignalsSettings.prototype, "state", void 0);
    return GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaGoogleSignalsSettings };
