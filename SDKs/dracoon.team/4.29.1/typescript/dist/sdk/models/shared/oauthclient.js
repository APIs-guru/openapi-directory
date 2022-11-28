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
export var OAuthClientClientTypeEnum;
(function (OAuthClientClientTypeEnum) {
    OAuthClientClientTypeEnum["Confidential"] = "confidential";
    OAuthClientClientTypeEnum["Public"] = "public";
})(OAuthClientClientTypeEnum || (OAuthClientClientTypeEnum = {}));
export var OAuthClientGrantTypesEnum;
(function (OAuthClientGrantTypesEnum) {
    OAuthClientGrantTypesEnum["AuthorizationCode"] = "authorization_code";
    OAuthClientGrantTypesEnum["ClientCredentials"] = "client_credentials";
    OAuthClientGrantTypesEnum["Implicit"] = "implicit";
    OAuthClientGrantTypesEnum["Password"] = "password";
    OAuthClientGrantTypesEnum["RefreshToken"] = "refresh_token";
})(OAuthClientGrantTypesEnum || (OAuthClientGrantTypesEnum = {}));
// OAuthClient
/**
 * OAuth client information
**/
var OAuthClient = /** @class */ (function (_super) {
    __extends(OAuthClient, _super);
    function OAuthClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessTokenValidity" }),
        __metadata("design:type", Number)
    ], OAuthClient.prototype, "accessTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalValidity" }),
        __metadata("design:type", Number)
    ], OAuthClient.prototype, "approvalValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientType" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "clientType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grantTypes" }),
        __metadata("design:type", Array)
    ], OAuthClient.prototype, "grantTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEnabled" }),
        __metadata("design:type", Boolean)
    ], OAuthClient.prototype, "isEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isExternal" }),
        __metadata("design:type", Boolean)
    ], OAuthClient.prototype, "isExternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isStandard" }),
        __metadata("design:type", Boolean)
    ], OAuthClient.prototype, "isStandard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUris" }),
        __metadata("design:type", Array)
    ], OAuthClient.prototype, "redirectUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshTokenValidity" }),
        __metadata("design:type", Number)
    ], OAuthClient.prototype, "refreshTokenValidity", void 0);
    return OAuthClient;
}(SpeakeasyBase));
export { OAuthClient };
