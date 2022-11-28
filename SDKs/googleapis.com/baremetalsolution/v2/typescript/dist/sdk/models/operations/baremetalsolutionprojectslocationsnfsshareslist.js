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
var BaremetalsolutionProjectsLocationsNfsSharesListPathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNfsSharesListPathParams, _super);
    function BaremetalsolutionProjectsLocationsNfsSharesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListPathParams.prototype, "parent", void 0);
    return BaremetalsolutionProjectsLocationsNfsSharesListPathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNfsSharesListPathParams };
var BaremetalsolutionProjectsLocationsNfsSharesListQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNfsSharesListQueryParams, _super);
    function BaremetalsolutionProjectsLocationsNfsSharesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsNfsSharesListQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNfsSharesListQueryParams };
var BaremetalsolutionProjectsLocationsNfsSharesListSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNfsSharesListSecurity, _super);
    function BaremetalsolutionProjectsLocationsNfsSharesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsNfsSharesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsNfsSharesListSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsNfsSharesListSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNfsSharesListSecurity };
var BaremetalsolutionProjectsLocationsNfsSharesListRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNfsSharesListRequest, _super);
    function BaremetalsolutionProjectsLocationsNfsSharesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsNfsSharesListPathParams)
    ], BaremetalsolutionProjectsLocationsNfsSharesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsNfsSharesListQueryParams)
    ], BaremetalsolutionProjectsLocationsNfsSharesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsNfsSharesListSecurity)
    ], BaremetalsolutionProjectsLocationsNfsSharesListRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsNfsSharesListRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNfsSharesListRequest };
var BaremetalsolutionProjectsLocationsNfsSharesListResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNfsSharesListResponse, _super);
    function BaremetalsolutionProjectsLocationsNfsSharesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNfsSharesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNfsSharesResponse)
    ], BaremetalsolutionProjectsLocationsNfsSharesListResponse.prototype, "listNfsSharesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsNfsSharesListResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsNfsSharesListResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNfsSharesListResponse };
