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
var AdminCustomersChromePrintServersListPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersListPathParams, _super);
    function AdminCustomersChromePrintServersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListPathParams.prototype, "parent", void 0);
    return AdminCustomersChromePrintServersListPathParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersListPathParams };
var AdminCustomersChromePrintServersListQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersListQueryParams, _super);
    function AdminCustomersChromePrintServersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomersChromePrintServersListQueryParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersListQueryParams };
var AdminCustomersChromePrintServersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersListSecurityOption1, _super);
    function AdminCustomersChromePrintServersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintServersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintServersListSecurityOption1.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintServersListSecurityOption1;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersListSecurityOption1 };
var AdminCustomersChromePrintServersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersListSecurityOption2, _super);
    function AdminCustomersChromePrintServersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintServersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintServersListSecurityOption2.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintServersListSecurityOption2;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersListSecurityOption2 };
var AdminCustomersChromePrintServersListSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersListSecurity, _super);
    function AdminCustomersChromePrintServersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminCustomersChromePrintServersListSecurityOption1)
    ], AdminCustomersChromePrintServersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminCustomersChromePrintServersListSecurityOption2)
    ], AdminCustomersChromePrintServersListSecurity.prototype, "option2", void 0);
    return AdminCustomersChromePrintServersListSecurity;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersListSecurity };
var AdminCustomersChromePrintServersListRequest = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersListRequest, _super);
    function AdminCustomersChromePrintServersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersListPathParams)
    ], AdminCustomersChromePrintServersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersListQueryParams)
    ], AdminCustomersChromePrintServersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintServersListSecurity)
    ], AdminCustomersChromePrintServersListRequest.prototype, "security", void 0);
    return AdminCustomersChromePrintServersListRequest;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersListRequest };
var AdminCustomersChromePrintServersListResponse = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintServersListResponse, _super);
    function AdminCustomersChromePrintServersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintServersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPrintServersResponse)
    ], AdminCustomersChromePrintServersListResponse.prototype, "listPrintServersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintServersListResponse.prototype, "statusCode", void 0);
    return AdminCustomersChromePrintServersListResponse;
}(SpeakeasyBase));
export { AdminCustomersChromePrintServersListResponse };
