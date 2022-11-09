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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerMetadata } from "./consumermetadata";
var SessionSettings = /** @class */ (function (_super) {
    __extends(SessionSettings, _super);
    function SessionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=auto_redirect" }),
        __metadata("design:type", Boolean)
    ], SessionSettings.prototype, "autoRedirect", void 0);
    __decorate([
        Metadata({ data: "json, name=hide_resource_settings" }),
        __metadata("design:type", Boolean)
    ], SessionSettings.prototype, "hideResourceSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=isolation_mode" }),
        __metadata("design:type", Boolean)
    ], SessionSettings.prototype, "isolationMode", void 0);
    __decorate([
        Metadata({ data: "json, name=sandbox_mode" }),
        __metadata("design:type", Boolean)
    ], SessionSettings.prototype, "sandboxMode", void 0);
    __decorate([
        Metadata({ data: "json, name=session_length" }),
        __metadata("design:type", String)
    ], SessionSettings.prototype, "sessionLength", void 0);
    __decorate([
        Metadata({ data: "json, name=show_logs" }),
        __metadata("design:type", Boolean)
    ], SessionSettings.prototype, "showLogs", void 0);
    __decorate([
        Metadata({ data: "json, name=show_sidebar" }),
        __metadata("design:type", Boolean)
    ], SessionSettings.prototype, "showSidebar", void 0);
    __decorate([
        Metadata({ data: "json, name=show_suggestions" }),
        __metadata("design:type", Boolean)
    ], SessionSettings.prototype, "showSuggestions", void 0);
    __decorate([
        Metadata({ data: "json, name=unified_apis" }),
        __metadata("design:type", Array)
    ], SessionSettings.prototype, "unifiedApis", void 0);
    return SessionSettings;
}(SpeakeasyBase));
export { SessionSettings };
var SessionTheme = /** @class */ (function (_super) {
    __extends(SessionTheme, _super);
    function SessionTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=favicon" }),
        __metadata("design:type", String)
    ], SessionTheme.prototype, "favicon", void 0);
    __decorate([
        Metadata({ data: "json, name=primary_color" }),
        __metadata("design:type", String)
    ], SessionTheme.prototype, "primaryColor", void 0);
    __decorate([
        Metadata({ data: "json, name=privacy_url" }),
        __metadata("design:type", String)
    ], SessionTheme.prototype, "privacyUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sidepanel_background_color" }),
        __metadata("design:type", String)
    ], SessionTheme.prototype, "sidepanelBackgroundColor", void 0);
    __decorate([
        Metadata({ data: "json, name=sidepanel_text_color" }),
        __metadata("design:type", String)
    ], SessionTheme.prototype, "sidepanelTextColor", void 0);
    __decorate([
        Metadata({ data: "json, name=terms_url" }),
        __metadata("design:type", String)
    ], SessionTheme.prototype, "termsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=vault_name" }),
        __metadata("design:type", String)
    ], SessionTheme.prototype, "vaultName", void 0);
    return SessionTheme;
}(SpeakeasyBase));
export { SessionTheme };
var Session = /** @class */ (function (_super) {
    __extends(Session, _super);
    function Session() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=consumer_metadata" }),
        __metadata("design:type", ConsumerMetadata)
    ], Session.prototype, "consumerMetadata", void 0);
    __decorate([
        Metadata({ data: "json, name=custom_consumer_settings" }),
        __metadata("design:type", Map)
    ], Session.prototype, "customConsumerSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=redirect_uri" }),
        __metadata("design:type", String)
    ], Session.prototype, "redirectUri", void 0);
    __decorate([
        Metadata({ data: "json, name=settings" }),
        __metadata("design:type", SessionSettings)
    ], Session.prototype, "settings", void 0);
    __decorate([
        Metadata({ data: "json, name=theme" }),
        __metadata("design:type", SessionTheme)
    ], Session.prototype, "theme", void 0);
    return Session;
}(SpeakeasyBase));
export { Session };
