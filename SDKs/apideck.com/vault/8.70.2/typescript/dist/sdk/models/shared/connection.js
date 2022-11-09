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
import * as shared from "../shared";
import { AuthTypeEnum } from "./authtypeenum";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";
export var ConnectionConfigurationDefaultsTargetEnum;
(function (ConnectionConfigurationDefaultsTargetEnum) {
    ConnectionConfigurationDefaultsTargetEnum["CustomFields"] = "custom_fields";
    ConnectionConfigurationDefaultsTargetEnum["Resource"] = "resource";
})(ConnectionConfigurationDefaultsTargetEnum || (ConnectionConfigurationDefaultsTargetEnum = {}));
var ConnectionConfigurationDefaults = /** @class */ (function (_super) {
    __extends(ConnectionConfigurationDefaults, _super);
    function ConnectionConfigurationDefaults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConnectionConfigurationDefaults.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ConnectionConfigurationDefaults.prototype, "options", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], ConnectionConfigurationDefaults.prototype, "target", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], ConnectionConfigurationDefaults.prototype, "value", void 0);
    return ConnectionConfigurationDefaults;
}(SpeakeasyBase));
export { ConnectionConfigurationDefaults };
var ConnectionConfiguration = /** @class */ (function (_super) {
    __extends(ConnectionConfiguration, _super);
    function ConnectionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=defaults", elemType: shared.ConnectionConfigurationDefaults }),
        __metadata("design:type", Array)
    ], ConnectionConfiguration.prototype, "defaults", void 0);
    __decorate([
        Metadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], ConnectionConfiguration.prototype, "resource", void 0);
    return ConnectionConfiguration;
}(SpeakeasyBase));
export { ConnectionConfiguration };
export var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum["Live"] = "live";
    ConnectionStatusEnum["Upcoming"] = "upcoming";
    ConnectionStatusEnum["Requested"] = "requested";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=auth_type" }),
        __metadata("design:type", String)
    ], Connection.prototype, "authType", void 0);
    __decorate([
        Metadata({ data: "json, name=authorize_url" }),
        __metadata("design:type", String)
    ], Connection.prototype, "authorizeUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=configurable_resources" }),
        __metadata("design:type", Array)
    ], Connection.prototype, "configurableResources", void 0);
    __decorate([
        Metadata({ data: "json, name=configuration", elemType: shared.ConnectionConfiguration }),
        __metadata("design:type", Array)
    ], Connection.prototype, "configuration", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], Connection.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Connection.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "json, name=form_fields", elemType: shared.FormField }),
        __metadata("design:type", Array)
    ], Connection.prototype, "formFields", void 0);
    __decorate([
        Metadata({ data: "json, name=has_guide" }),
        __metadata("design:type", Boolean)
    ], Connection.prototype, "hasGuide", void 0);
    __decorate([
        Metadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], Connection.prototype, "icon", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Connection.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], Connection.prototype, "logo", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Connection.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Connection.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=oauth_grant_type" }),
        __metadata("design:type", String)
    ], Connection.prototype, "oauthGrantType", void 0);
    __decorate([
        Metadata({ data: "json, name=resource_schema_support" }),
        __metadata("design:type", Array)
    ], Connection.prototype, "resourceSchemaSupport", void 0);
    __decorate([
        Metadata({ data: "json, name=resource_settings_support" }),
        __metadata("design:type", Array)
    ], Connection.prototype, "resourceSettingsSupport", void 0);
    __decorate([
        Metadata({ data: "json, name=revoke_url" }),
        __metadata("design:type", String)
    ], Connection.prototype, "revokeUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=service_id" }),
        __metadata("design:type", String)
    ], Connection.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "json, name=settings" }),
        __metadata("design:type", Map)
    ], Connection.prototype, "settings", void 0);
    __decorate([
        Metadata({ data: "json, name=settings_required_for_authorization" }),
        __metadata("design:type", Array)
    ], Connection.prototype, "settingsRequiredForAuthorization", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Connection.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Connection.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tag_line" }),
        __metadata("design:type", String)
    ], Connection.prototype, "tagLine", void 0);
    __decorate([
        Metadata({ data: "json, name=unified_api" }),
        __metadata("design:type", String)
    ], Connection.prototype, "unifiedApi", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], Connection.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], Connection.prototype, "website", void 0);
    return Connection;
}(SpeakeasyBase));
export { Connection };
