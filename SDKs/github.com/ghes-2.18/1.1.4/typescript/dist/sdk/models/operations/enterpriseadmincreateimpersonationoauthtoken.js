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
import * as shared from "../shared";
var EnterpriseAdminCreateImpersonationOAuthTokenPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateImpersonationOAuthTokenPathParams, _super);
    function EnterpriseAdminCreateImpersonationOAuthTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateImpersonationOAuthTokenPathParams.prototype, "username", void 0);
    return EnterpriseAdminCreateImpersonationOAuthTokenPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminCreateImpersonationOAuthTokenPathParams };
var EnterpriseAdminCreateImpersonationOAuthTokenRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateImpersonationOAuthTokenRequestBody, _super);
    function EnterpriseAdminCreateImpersonationOAuthTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminCreateImpersonationOAuthTokenRequestBody.prototype, "scopes", void 0);
    return EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminCreateImpersonationOAuthTokenRequestBody };
var EnterpriseAdminCreateImpersonationOAuthTokenRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateImpersonationOAuthTokenRequest, _super);
    function EnterpriseAdminCreateImpersonationOAuthTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminCreateImpersonationOAuthTokenPathParams)
    ], EnterpriseAdminCreateImpersonationOAuthTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminCreateImpersonationOAuthTokenRequestBody)
    ], EnterpriseAdminCreateImpersonationOAuthTokenRequest.prototype, "request", void 0);
    return EnterpriseAdminCreateImpersonationOAuthTokenRequest;
}(SpeakeasyBase));
export { EnterpriseAdminCreateImpersonationOAuthTokenRequest };
var EnterpriseAdminCreateImpersonationOAuthTokenResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateImpersonationOAuthTokenResponse, _super);
    function EnterpriseAdminCreateImpersonationOAuthTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateImpersonationOAuthTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminCreateImpersonationOAuthTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorization)
    ], EnterpriseAdminCreateImpersonationOAuthTokenResponse.prototype, "authorization", void 0);
    return EnterpriseAdminCreateImpersonationOAuthTokenResponse;
}(SpeakeasyBase));
export { EnterpriseAdminCreateImpersonationOAuthTokenResponse };
