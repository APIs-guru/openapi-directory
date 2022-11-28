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
var AppengineAppsDomainMappingsListPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListPathParams, _super);
    function AppengineAppsDomainMappingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListPathParams.prototype, "appsId", void 0);
    return AppengineAppsDomainMappingsListPathParams;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListPathParams };
var AppengineAppsDomainMappingsListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListQueryParams, _super);
    function AppengineAppsDomainMappingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsDomainMappingsListQueryParams;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListQueryParams };
var AppengineAppsDomainMappingsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListSecurityOption1, _super);
    function AppengineAppsDomainMappingsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsDomainMappingsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsDomainMappingsListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsDomainMappingsListSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListSecurityOption1 };
var AppengineAppsDomainMappingsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListSecurityOption2, _super);
    function AppengineAppsDomainMappingsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsDomainMappingsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsDomainMappingsListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsDomainMappingsListSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListSecurityOption2 };
var AppengineAppsDomainMappingsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListSecurityOption3, _super);
    function AppengineAppsDomainMappingsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsDomainMappingsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsDomainMappingsListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsDomainMappingsListSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListSecurityOption3 };
var AppengineAppsDomainMappingsListSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListSecurity, _super);
    function AppengineAppsDomainMappingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsDomainMappingsListSecurityOption1)
    ], AppengineAppsDomainMappingsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsDomainMappingsListSecurityOption2)
    ], AppengineAppsDomainMappingsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsDomainMappingsListSecurityOption3)
    ], AppengineAppsDomainMappingsListSecurity.prototype, "option3", void 0);
    return AppengineAppsDomainMappingsListSecurity;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListSecurity };
var AppengineAppsDomainMappingsListRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListRequest, _super);
    function AppengineAppsDomainMappingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsDomainMappingsListPathParams)
    ], AppengineAppsDomainMappingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsDomainMappingsListQueryParams)
    ], AppengineAppsDomainMappingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsDomainMappingsListSecurity)
    ], AppengineAppsDomainMappingsListRequest.prototype, "security", void 0);
    return AppengineAppsDomainMappingsListRequest;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListRequest };
var AppengineAppsDomainMappingsListResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsListResponse, _super);
    function AppengineAppsDomainMappingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDomainMappingsResponse)
    ], AppengineAppsDomainMappingsListResponse.prototype, "listDomainMappingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsDomainMappingsListResponse.prototype, "statusCode", void 0);
    return AppengineAppsDomainMappingsListResponse;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsListResponse };
