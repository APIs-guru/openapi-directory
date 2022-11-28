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
var AdmobAccountsListQueryParams = /** @class */ (function (_super) {
    __extends(AdmobAccountsListQueryParams, _super);
    function AdmobAccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdmobAccountsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdmobAccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdmobAccountsListQueryParams.prototype, "uploadProtocol", void 0);
    return AdmobAccountsListQueryParams;
}(SpeakeasyBase));
export { AdmobAccountsListQueryParams };
var AdmobAccountsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdmobAccountsListSecurityOption1, _super);
    function AdmobAccountsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdmobAccountsListSecurityOption1;
}(SpeakeasyBase));
export { AdmobAccountsListSecurityOption1 };
var AdmobAccountsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdmobAccountsListSecurityOption2, _super);
    function AdmobAccountsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdmobAccountsListSecurityOption2;
}(SpeakeasyBase));
export { AdmobAccountsListSecurityOption2 };
var AdmobAccountsListSecurity = /** @class */ (function (_super) {
    __extends(AdmobAccountsListSecurity, _super);
    function AdmobAccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsListSecurityOption1)
    ], AdmobAccountsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsListSecurityOption2)
    ], AdmobAccountsListSecurity.prototype, "option2", void 0);
    return AdmobAccountsListSecurity;
}(SpeakeasyBase));
export { AdmobAccountsListSecurity };
var AdmobAccountsListRequest = /** @class */ (function (_super) {
    __extends(AdmobAccountsListRequest, _super);
    function AdmobAccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsListQueryParams)
    ], AdmobAccountsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsListSecurity)
    ], AdmobAccountsListRequest.prototype, "security", void 0);
    return AdmobAccountsListRequest;
}(SpeakeasyBase));
export { AdmobAccountsListRequest };
var AdmobAccountsListResponse = /** @class */ (function (_super) {
    __extends(AdmobAccountsListResponse, _super);
    function AdmobAccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdmobAccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPublisherAccountsResponse)
    ], AdmobAccountsListResponse.prototype, "listPublisherAccountsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdmobAccountsListResponse.prototype, "statusCode", void 0);
    return AdmobAccountsListResponse;
}(SpeakeasyBase));
export { AdmobAccountsListResponse };
