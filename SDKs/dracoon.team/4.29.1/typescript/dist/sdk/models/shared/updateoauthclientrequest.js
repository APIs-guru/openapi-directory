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
export var UpdateOAuthClientRequestClientTypeEnum;
(function (UpdateOAuthClientRequestClientTypeEnum) {
    UpdateOAuthClientRequestClientTypeEnum["Confidential"] = "confidential";
    UpdateOAuthClientRequestClientTypeEnum["Public"] = "public";
})(UpdateOAuthClientRequestClientTypeEnum || (UpdateOAuthClientRequestClientTypeEnum = {}));
export var UpdateOAuthClientRequestGrantTypesEnum;
(function (UpdateOAuthClientRequestGrantTypesEnum) {
    UpdateOAuthClientRequestGrantTypesEnum["AuthorizationCode"] = "authorization_code";
    UpdateOAuthClientRequestGrantTypesEnum["ClientCredentials"] = "client_credentials";
    UpdateOAuthClientRequestGrantTypesEnum["Implicit"] = "implicit";
    UpdateOAuthClientRequestGrantTypesEnum["Password"] = "password";
    UpdateOAuthClientRequestGrantTypesEnum["RefreshToken"] = "refresh_token";
})(UpdateOAuthClientRequestGrantTypesEnum || (UpdateOAuthClientRequestGrantTypesEnum = {}));
// UpdateOAuthClientRequest
/**
 * Request model for updating an OAuth client
**/
var UpdateOAuthClientRequest = /** @class */ (function (_super) {
    __extends(UpdateOAuthClientRequest, _super);
    function UpdateOAuthClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessTokenValidity" }),
        __metadata("design:type", Number)
    ], UpdateOAuthClientRequest.prototype, "accessTokenValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalValidity" }),
        __metadata("design:type", Number)
    ], UpdateOAuthClientRequest.prototype, "approvalValidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], UpdateOAuthClientRequest.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], UpdateOAuthClientRequest.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientType" }),
        __metadata("design:type", String)
    ], UpdateOAuthClientRequest.prototype, "clientType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grantTypes" }),
        __metadata("design:type", Array)
    ], UpdateOAuthClientRequest.prototype, "grantTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOAuthClientRequest.prototype, "isEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUris" }),
        __metadata("design:type", Array)
    ], UpdateOAuthClientRequest.prototype, "redirectUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshTokenValidity" }),
        __metadata("design:type", Number)
    ], UpdateOAuthClientRequest.prototype, "refreshTokenValidity", void 0);
    return UpdateOAuthClientRequest;
}(SpeakeasyBase));
export { UpdateOAuthClientRequest };
