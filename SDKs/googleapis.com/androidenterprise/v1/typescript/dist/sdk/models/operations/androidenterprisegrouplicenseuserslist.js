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
var AndroidenterpriseGrouplicenseusersListPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicenseusersListPathParams, _super);
    function AndroidenterpriseGrouplicenseusersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupLicenseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListPathParams.prototype, "groupLicenseId", void 0);
    return AndroidenterpriseGrouplicenseusersListPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicenseusersListPathParams };
var AndroidenterpriseGrouplicenseusersListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicenseusersListQueryParams, _super);
    function AndroidenterpriseGrouplicenseusersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseGrouplicenseusersListQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicenseusersListQueryParams };
var AndroidenterpriseGrouplicenseusersListSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicenseusersListSecurity, _super);
    function AndroidenterpriseGrouplicenseusersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseGrouplicenseusersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseGrouplicenseusersListSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseGrouplicenseusersListSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicenseusersListSecurity };
var AndroidenterpriseGrouplicenseusersListRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicenseusersListRequest, _super);
    function AndroidenterpriseGrouplicenseusersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicenseusersListPathParams)
    ], AndroidenterpriseGrouplicenseusersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicenseusersListQueryParams)
    ], AndroidenterpriseGrouplicenseusersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicenseusersListSecurity)
    ], AndroidenterpriseGrouplicenseusersListRequest.prototype, "security", void 0);
    return AndroidenterpriseGrouplicenseusersListRequest;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicenseusersListRequest };
var AndroidenterpriseGrouplicenseusersListResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicenseusersListResponse, _super);
    function AndroidenterpriseGrouplicenseusersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicenseusersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupLicenseUsersListResponse)
    ], AndroidenterpriseGrouplicenseusersListResponse.prototype, "groupLicenseUsersListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseGrouplicenseusersListResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseGrouplicenseusersListResponse;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicenseusersListResponse };
