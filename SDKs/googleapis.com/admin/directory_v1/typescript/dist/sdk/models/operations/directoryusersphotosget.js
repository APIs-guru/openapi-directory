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
var DirectoryUsersPhotosGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersPhotosGetPathParams, _super);
    function DirectoryUsersPhotosGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetPathParams.prototype, "userKey", void 0);
    return DirectoryUsersPhotosGetPathParams;
}(SpeakeasyBase));
export { DirectoryUsersPhotosGetPathParams };
var DirectoryUsersPhotosGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersPhotosGetQueryParams, _super);
    function DirectoryUsersPhotosGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryUsersPhotosGetQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersPhotosGetQueryParams };
var DirectoryUsersPhotosGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersPhotosGetSecurityOption1, _super);
    function DirectoryUsersPhotosGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersPhotosGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersPhotosGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersPhotosGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersPhotosGetSecurityOption1 };
var DirectoryUsersPhotosGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersPhotosGetSecurityOption2, _super);
    function DirectoryUsersPhotosGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersPhotosGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersPhotosGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersPhotosGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersPhotosGetSecurityOption2 };
var DirectoryUsersPhotosGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersPhotosGetSecurity, _super);
    function DirectoryUsersPhotosGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersPhotosGetSecurityOption1)
    ], DirectoryUsersPhotosGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersPhotosGetSecurityOption2)
    ], DirectoryUsersPhotosGetSecurity.prototype, "option2", void 0);
    return DirectoryUsersPhotosGetSecurity;
}(SpeakeasyBase));
export { DirectoryUsersPhotosGetSecurity };
var DirectoryUsersPhotosGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersPhotosGetRequest, _super);
    function DirectoryUsersPhotosGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersPhotosGetPathParams)
    ], DirectoryUsersPhotosGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersPhotosGetQueryParams)
    ], DirectoryUsersPhotosGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersPhotosGetSecurity)
    ], DirectoryUsersPhotosGetRequest.prototype, "security", void 0);
    return DirectoryUsersPhotosGetRequest;
}(SpeakeasyBase));
export { DirectoryUsersPhotosGetRequest };
var DirectoryUsersPhotosGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersPhotosGetResponse, _super);
    function DirectoryUsersPhotosGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersPhotosGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersPhotosGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserPhoto)
    ], DirectoryUsersPhotosGetResponse.prototype, "userPhoto", void 0);
    return DirectoryUsersPhotosGetResponse;
}(SpeakeasyBase));
export { DirectoryUsersPhotosGetResponse };
