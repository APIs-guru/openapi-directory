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
var ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams.prototype, "parent", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams };
var ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams };
var ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity };
var ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest };
var ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListApiSpecsResponse)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse.prototype, "listApiSpecsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse };
