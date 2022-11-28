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
export var CreateOpenIdIdpConfigRequestFlowEnum;
(function (CreateOpenIdIdpConfigRequestFlowEnum) {
    CreateOpenIdIdpConfigRequestFlowEnum["AuthorizationCode"] = "authorization_code";
    CreateOpenIdIdpConfigRequestFlowEnum["Hybrid"] = "hybrid";
})(CreateOpenIdIdpConfigRequestFlowEnum || (CreateOpenIdIdpConfigRequestFlowEnum = {}));
export var CreateOpenIdIdpConfigRequestUserInfoSourceEnum;
(function (CreateOpenIdIdpConfigRequestUserInfoSourceEnum) {
    CreateOpenIdIdpConfigRequestUserInfoSourceEnum["UserInfoEndpoint"] = "user_info_endpoint";
    CreateOpenIdIdpConfigRequestUserInfoSourceEnum["IdToken"] = "id_token";
})(CreateOpenIdIdpConfigRequestUserInfoSourceEnum || (CreateOpenIdIdpConfigRequestUserInfoSourceEnum = {}));
// CreateOpenIdIdpConfigRequest
/**
 * Request model for creating an OpenID Connect IDP configuration
**/
var CreateOpenIdIdpConfigRequest = /** @class */ (function (_super) {
    __extends(CreateOpenIdIdpConfigRequest, _super);
    function CreateOpenIdIdpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationEndPointUrl" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "authorizationEndPointUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallbackMappingClaim" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "fallbackMappingClaim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flow" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "flow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwksEndPointUrl" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "jwksEndPointUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mappingClaim" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "mappingClaim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pkceChallengeMethod" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "pkceChallengeMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pkceEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateOpenIdIdpConfigRequest.prototype, "pkceEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUris" }),
        __metadata("design:type", Array)
    ], CreateOpenIdIdpConfigRequest.prototype, "redirectUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], CreateOpenIdIdpConfigRequest.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenEndPointUrl" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "tokenEndPointUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userImportEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateOpenIdIdpConfigRequest.prototype, "userImportEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userImportGroup" }),
        __metadata("design:type", Number)
    ], CreateOpenIdIdpConfigRequest.prototype, "userImportGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfoEndPointUrl" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "userInfoEndPointUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfoSource" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "userInfoSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userManagementUrl" }),
        __metadata("design:type", String)
    ], CreateOpenIdIdpConfigRequest.prototype, "userManagementUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userUpdateEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateOpenIdIdpConfigRequest.prototype, "userUpdateEnabled", void 0);
    return CreateOpenIdIdpConfigRequest;
}(SpeakeasyBase));
export { CreateOpenIdIdpConfigRequest };
