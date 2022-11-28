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
var IntegrationSettings = /** @class */ (function (_super) {
    __extends(IntegrationSettings, _super);
    function IntegrationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albacross_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "albacrossId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automate_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "automateEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blendr_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "blendrEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combidesk_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "combideskEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crisp_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "crispId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drift_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "driftId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_analytics_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "googleAnalyticsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_tag_manager_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "googleTagManagerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heap_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "heapId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hubspot_portal_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "hubspotPortalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integromat_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "integromatEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intercom_app_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "intercomAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iubenda_cookie_policy_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "iubendaCookiePolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iubenda_site_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "iubendaSiteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=journy_io_domain" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "journyIoDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=journy_io_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "journyIoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=livechat_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "livechatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metomic_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "metomicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=microsoft_flow_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "microsoftFlowEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=microsoft_flow_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "microsoftFlowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onetrust_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "onetrustId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=piesync_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "piesyncEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segment_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "segmentEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segment_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "segmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tray_io_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "trayIoEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zapier_beta_link" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "zapierBetaLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zapier_enabled" }),
        __metadata("design:type", Boolean)
    ], IntegrationSettings.prototype, "zapierEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zapier_id" }),
        __metadata("design:type", String)
    ], IntegrationSettings.prototype, "zapierId", void 0);
    return IntegrationSettings;
}(SpeakeasyBase));
export { IntegrationSettings };
