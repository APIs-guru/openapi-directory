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
var AndroidmanagementEnterprisesEnrollmentTokensListPathParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesEnrollmentTokensListPathParams, _super);
    function AndroidmanagementEnterprisesEnrollmentTokensListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListPathParams.prototype, "parent", void 0);
    return AndroidmanagementEnterprisesEnrollmentTokensListPathParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesEnrollmentTokensListPathParams };
var AndroidmanagementEnterprisesEnrollmentTokensListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesEnrollmentTokensListQueryParams, _super);
    function AndroidmanagementEnterprisesEnrollmentTokensListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidmanagementEnterprisesEnrollmentTokensListQueryParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesEnrollmentTokensListQueryParams };
var AndroidmanagementEnterprisesEnrollmentTokensListSecurity = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesEnrollmentTokensListSecurity, _super);
    function AndroidmanagementEnterprisesEnrollmentTokensListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidmanagementEnterprisesEnrollmentTokensListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidmanagementEnterprisesEnrollmentTokensListSecurity.prototype, "oauth2c", void 0);
    return AndroidmanagementEnterprisesEnrollmentTokensListSecurity;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesEnrollmentTokensListSecurity };
var AndroidmanagementEnterprisesEnrollmentTokensListRequest = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesEnrollmentTokensListRequest, _super);
    function AndroidmanagementEnterprisesEnrollmentTokensListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesEnrollmentTokensListPathParams)
    ], AndroidmanagementEnterprisesEnrollmentTokensListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesEnrollmentTokensListQueryParams)
    ], AndroidmanagementEnterprisesEnrollmentTokensListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesEnrollmentTokensListSecurity)
    ], AndroidmanagementEnterprisesEnrollmentTokensListRequest.prototype, "security", void 0);
    return AndroidmanagementEnterprisesEnrollmentTokensListRequest;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesEnrollmentTokensListRequest };
var AndroidmanagementEnterprisesEnrollmentTokensListResponse = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesEnrollmentTokensListResponse, _super);
    function AndroidmanagementEnterprisesEnrollmentTokensListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesEnrollmentTokensListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEnrollmentTokensResponse)
    ], AndroidmanagementEnterprisesEnrollmentTokensListResponse.prototype, "listEnrollmentTokensResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidmanagementEnterprisesEnrollmentTokensListResponse.prototype, "statusCode", void 0);
    return AndroidmanagementEnterprisesEnrollmentTokensListResponse;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesEnrollmentTokensListResponse };
