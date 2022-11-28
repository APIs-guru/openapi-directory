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
var AnalyticshubProjectsLocationsDataExchangesListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListPathParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListPathParams.prototype, "parent", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListPathParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListPathParams };
var AnalyticshubProjectsLocationsDataExchangesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListQueryParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListQueryParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListQueryParams };
var AnalyticshubProjectsLocationsDataExchangesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListSecurityOption1, _super);
    function AnalyticshubProjectsLocationsDataExchangesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListSecurityOption1 };
var AnalyticshubProjectsLocationsDataExchangesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListSecurityOption2, _super);
    function AnalyticshubProjectsLocationsDataExchangesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListSecurityOption2 };
var AnalyticshubProjectsLocationsDataExchangesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListSecurity, _super);
    function AnalyticshubProjectsLocationsDataExchangesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListSecurityOption1)
    ], AnalyticshubProjectsLocationsDataExchangesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListSecurityOption2)
    ], AnalyticshubProjectsLocationsDataExchangesListSecurity.prototype, "option2", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListSecurity;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListSecurity };
var AnalyticshubProjectsLocationsDataExchangesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListRequest, _super);
    function AnalyticshubProjectsLocationsDataExchangesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListPathParams)
    ], AnalyticshubProjectsLocationsDataExchangesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListQueryParams)
    ], AnalyticshubProjectsLocationsDataExchangesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListSecurity)
    ], AnalyticshubProjectsLocationsDataExchangesListRequest.prototype, "security", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListRequest;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListRequest };
var AnalyticshubProjectsLocationsDataExchangesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListResponse, _super);
    function AnalyticshubProjectsLocationsDataExchangesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDataExchangesResponse)
    ], AnalyticshubProjectsLocationsDataExchangesListResponse.prototype, "listDataExchangesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticshubProjectsLocationsDataExchangesListResponse.prototype, "statusCode", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListResponse;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListResponse };
