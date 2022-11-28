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
var AndroidenterpriseManagedconfigurationsforuserDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserDeletePathParams, _super);
    function AndroidenterpriseManagedconfigurationsforuserDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeletePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedConfigurationForUserId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeletePathParams.prototype, "managedConfigurationForUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeletePathParams.prototype, "userId", void 0);
    return AndroidenterpriseManagedconfigurationsforuserDeletePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserDeletePathParams };
var AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams, _super);
    function AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams };
var AndroidenterpriseManagedconfigurationsforuserDeleteSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserDeleteSecurity, _super);
    function AndroidenterpriseManagedconfigurationsforuserDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseManagedconfigurationsforuserDeleteSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserDeleteSecurity };
var AndroidenterpriseManagedconfigurationsforuserDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserDeleteRequest, _super);
    function AndroidenterpriseManagedconfigurationsforuserDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserDeletePathParams)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserDeleteSecurity)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteRequest.prototype, "security", void 0);
    return AndroidenterpriseManagedconfigurationsforuserDeleteRequest;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserDeleteRequest };
var AndroidenterpriseManagedconfigurationsforuserDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserDeleteResponse, _super);
    function AndroidenterpriseManagedconfigurationsforuserDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseManagedconfigurationsforuserDeleteResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseManagedconfigurationsforuserDeleteResponse;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserDeleteResponse };
