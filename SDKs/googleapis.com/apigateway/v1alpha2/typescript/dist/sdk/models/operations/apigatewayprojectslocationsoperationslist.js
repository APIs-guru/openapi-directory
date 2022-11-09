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
var ApigatewayProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsListPathParams, _super);
    function ApigatewayProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListPathParams.prototype, "name", void 0);
    return ApigatewayProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsListPathParams };
var ApigatewayProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsListQueryParams, _super);
    function ApigatewayProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigatewayProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsListQueryParams };
var ApigatewayProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsListSecurity, _super);
    function ApigatewayProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigatewayProjectsLocationsOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigatewayProjectsLocationsOperationsListSecurity.prototype, "oauth2c", void 0);
    return ApigatewayProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsListSecurity };
var ApigatewayProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsListRequest, _super);
    function ApigatewayProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsOperationsListPathParams)
    ], ApigatewayProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsOperationsListQueryParams)
    ], ApigatewayProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsOperationsListSecurity)
    ], ApigatewayProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return ApigatewayProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsListRequest };
var ApigatewayProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsListResponse, _super);
    function ApigatewayProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApigatewayListOperationsResponse)
    ], ApigatewayProjectsLocationsOperationsListResponse.prototype, "apigatewayListOperationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return ApigatewayProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsListResponse };
