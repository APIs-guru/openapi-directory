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
var AndroidenterpriseGrouplicensesListPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesListPathParams, _super);
    function AndroidenterpriseGrouplicensesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseGrouplicensesListPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesListPathParams };
var AndroidenterpriseGrouplicensesListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesListQueryParams, _super);
    function AndroidenterpriseGrouplicensesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseGrouplicensesListQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesListQueryParams };
var AndroidenterpriseGrouplicensesListSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesListSecurity, _super);
    function AndroidenterpriseGrouplicensesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseGrouplicensesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseGrouplicensesListSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseGrouplicensesListSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesListSecurity };
var AndroidenterpriseGrouplicensesListRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesListRequest, _super);
    function AndroidenterpriseGrouplicensesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicensesListPathParams)
    ], AndroidenterpriseGrouplicensesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicensesListQueryParams)
    ], AndroidenterpriseGrouplicensesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicensesListSecurity)
    ], AndroidenterpriseGrouplicensesListRequest.prototype, "security", void 0);
    return AndroidenterpriseGrouplicensesListRequest;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesListRequest };
var AndroidenterpriseGrouplicensesListResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesListResponse, _super);
    function AndroidenterpriseGrouplicensesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupLicensesListResponse)
    ], AndroidenterpriseGrouplicensesListResponse.prototype, "groupLicensesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseGrouplicensesListResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseGrouplicensesListResponse;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesListResponse };
