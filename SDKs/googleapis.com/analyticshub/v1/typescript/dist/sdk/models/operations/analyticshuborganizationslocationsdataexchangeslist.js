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
var AnalyticshubOrganizationsLocationsDataExchangesListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticshubOrganizationsLocationsDataExchangesListPathParams, _super);
    function AnalyticshubOrganizationsLocationsDataExchangesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListPathParams.prototype, "organization", void 0);
    return AnalyticshubOrganizationsLocationsDataExchangesListPathParams;
}(SpeakeasyBase));
export { AnalyticshubOrganizationsLocationsDataExchangesListPathParams };
var AnalyticshubOrganizationsLocationsDataExchangesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticshubOrganizationsLocationsDataExchangesListQueryParams, _super);
    function AnalyticshubOrganizationsLocationsDataExchangesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticshubOrganizationsLocationsDataExchangesListQueryParams;
}(SpeakeasyBase));
export { AnalyticshubOrganizationsLocationsDataExchangesListQueryParams };
var AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1, _super);
    function AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1 };
var AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2, _super);
    function AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2 };
var AnalyticshubOrganizationsLocationsDataExchangesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticshubOrganizationsLocationsDataExchangesListSecurity, _super);
    function AnalyticshubOrganizationsLocationsDataExchangesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1)
    ], AnalyticshubOrganizationsLocationsDataExchangesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2)
    ], AnalyticshubOrganizationsLocationsDataExchangesListSecurity.prototype, "option2", void 0);
    return AnalyticshubOrganizationsLocationsDataExchangesListSecurity;
}(SpeakeasyBase));
export { AnalyticshubOrganizationsLocationsDataExchangesListSecurity };
var AnalyticshubOrganizationsLocationsDataExchangesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticshubOrganizationsLocationsDataExchangesListRequest, _super);
    function AnalyticshubOrganizationsLocationsDataExchangesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubOrganizationsLocationsDataExchangesListPathParams)
    ], AnalyticshubOrganizationsLocationsDataExchangesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubOrganizationsLocationsDataExchangesListQueryParams)
    ], AnalyticshubOrganizationsLocationsDataExchangesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubOrganizationsLocationsDataExchangesListSecurity)
    ], AnalyticshubOrganizationsLocationsDataExchangesListRequest.prototype, "security", void 0);
    return AnalyticshubOrganizationsLocationsDataExchangesListRequest;
}(SpeakeasyBase));
export { AnalyticshubOrganizationsLocationsDataExchangesListRequest };
var AnalyticshubOrganizationsLocationsDataExchangesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticshubOrganizationsLocationsDataExchangesListResponse, _super);
    function AnalyticshubOrganizationsLocationsDataExchangesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticshubOrganizationsLocationsDataExchangesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOrgDataExchangesResponse)
    ], AnalyticshubOrganizationsLocationsDataExchangesListResponse.prototype, "listOrgDataExchangesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticshubOrganizationsLocationsDataExchangesListResponse.prototype, "statusCode", void 0);
    return AnalyticshubOrganizationsLocationsDataExchangesListResponse;
}(SpeakeasyBase));
export { AnalyticshubOrganizationsLocationsDataExchangesListResponse };
