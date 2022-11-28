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
import { ConnectorDoc } from "./connectordoc";
import { ConnectorSetting } from "./connectorsetting";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { ConnectorEvent } from "./connectorevent";
import { LinkedConnectorResource } from "./linkedconnectorresource";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
export var ConnectorAuthTypeEnum;
(function (ConnectorAuthTypeEnum) {
    ConnectorAuthTypeEnum["Oauth2"] = "oauth2";
    ConnectorAuthTypeEnum["ApiKey"] = "apiKey";
    ConnectorAuthTypeEnum["Basic"] = "basic";
    ConnectorAuthTypeEnum["Custom"] = "custom";
    ConnectorAuthTypeEnum["None"] = "none";
})(ConnectorAuthTypeEnum || (ConnectorAuthTypeEnum = {}));
export var ConnectorOauthCredentialsSourceEnum;
(function (ConnectorOauthCredentialsSourceEnum) {
    ConnectorOauthCredentialsSourceEnum["Integration"] = "integration";
    ConnectorOauthCredentialsSourceEnum["Connection"] = "connection";
})(ConnectorOauthCredentialsSourceEnum || (ConnectorOauthCredentialsSourceEnum = {}));
export var ConnectorOauthGrantTypeEnum;
(function (ConnectorOauthGrantTypeEnum) {
    ConnectorOauthGrantTypeEnum["AuthorizationCode"] = "authorization_code";
    ConnectorOauthGrantTypeEnum["ClientCredentials"] = "client_credentials";
    ConnectorOauthGrantTypeEnum["Password"] = "password";
})(ConnectorOauthGrantTypeEnum || (ConnectorOauthGrantTypeEnum = {}));
var ConnectorOauthScopes = /** @class */ (function (_super) {
    __extends(ConnectorOauthScopes, _super);
    function ConnectorOauthScopes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_apis" }),
        __metadata("design:type", Array)
    ], ConnectorOauthScopes.prototype, "defaultApis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConnectorOauthScopes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConnectorOauthScopes.prototype, "label", void 0);
    return ConnectorOauthScopes;
}(SpeakeasyBase));
export { ConnectorOauthScopes };
var ConnectorTlsSupport = /** @class */ (function (_super) {
    __extends(ConnectorTlsSupport, _super);
    function ConnectorTlsSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConnectorTlsSupport.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ConnectorTlsSupport.prototype, "type", void 0);
    return ConnectorTlsSupport;
}(SpeakeasyBase));
export { ConnectorTlsSupport };
// ConnectorUnifiedApisOauthScopes
/**
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
**/
var ConnectorUnifiedApisOauthScopes = /** @class */ (function (_super) {
    __extends(ConnectorUnifiedApisOauthScopes, _super);
    function ConnectorUnifiedApisOauthScopes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConnectorUnifiedApisOauthScopes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConnectorUnifiedApisOauthScopes.prototype, "label", void 0);
    return ConnectorUnifiedApisOauthScopes;
}(SpeakeasyBase));
export { ConnectorUnifiedApisOauthScopes };
var ConnectorUnifiedApis = /** @class */ (function (_super) {
    __extends(ConnectorUnifiedApis, _super);
    function ConnectorUnifiedApis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_unsupported_resources" }),
        __metadata("design:type", Array)
    ], ConnectorUnifiedApis.prototype, "downstreamUnsupportedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConnectorUnifiedApis.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectorUnifiedApis.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_scopes", elemType: ConnectorUnifiedApisOauthScopes }),
        __metadata("design:type", Array)
    ], ConnectorUnifiedApis.prototype, "oauthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_events", elemType: ConnectorEvent }),
        __metadata("design:type", Array)
    ], ConnectorUnifiedApis.prototype, "supportedEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_resources", elemType: LinkedConnectorResource }),
        __metadata("design:type", Array)
    ], ConnectorUnifiedApis.prototype, "supportedResources", void 0);
    return ConnectorUnifiedApis;
}(SpeakeasyBase));
export { ConnectorUnifiedApis };
var Connector = /** @class */ (function (_super) {
    __extends(Connector, _super);
    function Connector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_only" }),
        __metadata("design:type", Boolean)
    ], Connector.prototype, "authOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_type" }),
        __metadata("design:type", String)
    ], Connector.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blind_mapped" }),
        __metadata("design:type", Boolean)
    ], Connector.prototype, "blindMapped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurable_resources" }),
        __metadata("design:type", Array)
    ], Connector.prototype, "configurableResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_scopes" }),
        __metadata("design:type", Boolean)
    ], Connector.prototype, "customScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Connector.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=docs", elemType: ConnectorDoc }),
        __metadata("design:type", Array)
    ], Connector.prototype, "docs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free_trial_available" }),
        __metadata("design:type", Boolean)
    ], Connector.prototype, "freeTrialAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_sandbox_credentials" }),
        __metadata("design:type", Boolean)
    ], Connector.prototype, "hasSandboxCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon_url" }),
        __metadata("design:type", String)
    ], Connector.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Connector.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_url" }),
        __metadata("design:type", String)
    ], Connector.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Connector.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_credentials_source" }),
        __metadata("design:type", String)
    ], Connector.prototype, "oauthCredentialsSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_grant_type" }),
        __metadata("design:type", String)
    ], Connector.prototype, "oauthGrantType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_scopes", elemType: ConnectorOauthScopes }),
        __metadata("design:type", Array)
    ], Connector.prototype, "oauthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_id" }),
        __metadata("design:type", String)
    ], Connector.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings", elemType: ConnectorSetting }),
        __metadata("design:type", Array)
    ], Connector.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signup_url" }),
        __metadata("design:type", String)
    ], Connector.prototype, "signupUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Connector.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_events", elemType: ConnectorEvent }),
        __metadata("design:type", Array)
    ], Connector.prototype, "supportedEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_resources", elemType: LinkedConnectorResource }),
        __metadata("design:type", Array)
    ], Connector.prototype, "supportedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls_support" }),
        __metadata("design:type", ConnectorTlsSupport)
    ], Connector.prototype, "tlsSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unified_apis", elemType: ConnectorUnifiedApis }),
        __metadata("design:type", Array)
    ], Connector.prototype, "unifiedApis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_support" }),
        __metadata("design:type", Map)
    ], Connector.prototype, "webhookSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website_url" }),
        __metadata("design:type", String)
    ], Connector.prototype, "websiteUrl", void 0);
    return Connector;
}(SpeakeasyBase));
export { Connector };
