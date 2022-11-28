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
var AndroidenterpriseUsersRevokeDeviceAccessPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersRevokeDeviceAccessPathParams, _super);
    function AndroidenterpriseUsersRevokeDeviceAccessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessPathParams.prototype, "userId", void 0);
    return AndroidenterpriseUsersRevokeDeviceAccessPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseUsersRevokeDeviceAccessPathParams };
var AndroidenterpriseUsersRevokeDeviceAccessQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersRevokeDeviceAccessQueryParams, _super);
    function AndroidenterpriseUsersRevokeDeviceAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseUsersRevokeDeviceAccessQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseUsersRevokeDeviceAccessQueryParams };
var AndroidenterpriseUsersRevokeDeviceAccessSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersRevokeDeviceAccessSecurity, _super);
    function AndroidenterpriseUsersRevokeDeviceAccessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseUsersRevokeDeviceAccessSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseUsersRevokeDeviceAccessSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseUsersRevokeDeviceAccessSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseUsersRevokeDeviceAccessSecurity };
var AndroidenterpriseUsersRevokeDeviceAccessRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersRevokeDeviceAccessRequest, _super);
    function AndroidenterpriseUsersRevokeDeviceAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseUsersRevokeDeviceAccessPathParams)
    ], AndroidenterpriseUsersRevokeDeviceAccessRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseUsersRevokeDeviceAccessQueryParams)
    ], AndroidenterpriseUsersRevokeDeviceAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseUsersRevokeDeviceAccessSecurity)
    ], AndroidenterpriseUsersRevokeDeviceAccessRequest.prototype, "security", void 0);
    return AndroidenterpriseUsersRevokeDeviceAccessRequest;
}(SpeakeasyBase));
export { AndroidenterpriseUsersRevokeDeviceAccessRequest };
var AndroidenterpriseUsersRevokeDeviceAccessResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseUsersRevokeDeviceAccessResponse, _super);
    function AndroidenterpriseUsersRevokeDeviceAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseUsersRevokeDeviceAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseUsersRevokeDeviceAccessResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseUsersRevokeDeviceAccessResponse;
}(SpeakeasyBase));
export { AndroidenterpriseUsersRevokeDeviceAccessResponse };
