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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ApigeeregistryProjectsLocationsApisDeploymentsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisDeploymentsListPathParams, _super);
    function ApigeeregistryProjectsLocationsApisDeploymentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListPathParams.prototype, "parent", void 0);
    return ApigeeregistryProjectsLocationsApisDeploymentsListPathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisDeploymentsListPathParams };
var ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams, _super);
    function ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams };
var ApigeeregistryProjectsLocationsApisDeploymentsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisDeploymentsListSecurity, _super);
    function ApigeeregistryProjectsLocationsApisDeploymentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsApisDeploymentsListSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisDeploymentsListSecurity };
var ApigeeregistryProjectsLocationsApisDeploymentsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisDeploymentsListRequest, _super);
    function ApigeeregistryProjectsLocationsApisDeploymentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisDeploymentsListPathParams)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisDeploymentsListSecurity)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsApisDeploymentsListRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisDeploymentsListRequest };
var ApigeeregistryProjectsLocationsApisDeploymentsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisDeploymentsListResponse, _super);
    function ApigeeregistryProjectsLocationsApisDeploymentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListApiDeploymentsResponse)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListResponse.prototype, "listApiDeploymentsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisDeploymentsListResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsApisDeploymentsListResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisDeploymentsListResponse };
