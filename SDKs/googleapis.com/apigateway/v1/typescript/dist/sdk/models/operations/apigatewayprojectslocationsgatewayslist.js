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
var ApigatewayProjectsLocationsGatewaysListPathParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysListPathParams, _super);
    function ApigatewayProjectsLocationsGatewaysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListPathParams.prototype, "parent", void 0);
    return ApigatewayProjectsLocationsGatewaysListPathParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysListPathParams };
var ApigatewayProjectsLocationsGatewaysListQueryParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysListQueryParams, _super);
    function ApigatewayProjectsLocationsGatewaysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigatewayProjectsLocationsGatewaysListQueryParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysListQueryParams };
var ApigatewayProjectsLocationsGatewaysListSecurity = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysListSecurity, _super);
    function ApigatewayProjectsLocationsGatewaysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigatewayProjectsLocationsGatewaysListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigatewayProjectsLocationsGatewaysListSecurity.prototype, "oauth2c", void 0);
    return ApigatewayProjectsLocationsGatewaysListSecurity;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysListSecurity };
var ApigatewayProjectsLocationsGatewaysListRequest = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysListRequest, _super);
    function ApigatewayProjectsLocationsGatewaysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysListPathParams)
    ], ApigatewayProjectsLocationsGatewaysListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysListQueryParams)
    ], ApigatewayProjectsLocationsGatewaysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysListSecurity)
    ], ApigatewayProjectsLocationsGatewaysListRequest.prototype, "security", void 0);
    return ApigatewayProjectsLocationsGatewaysListRequest;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysListRequest };
var ApigatewayProjectsLocationsGatewaysListResponse = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysListResponse, _super);
    function ApigatewayProjectsLocationsGatewaysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApigatewayListGatewaysResponse)
    ], ApigatewayProjectsLocationsGatewaysListResponse.prototype, "apigatewayListGatewaysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsGatewaysListResponse.prototype, "statusCode", void 0);
    return ApigatewayProjectsLocationsGatewaysListResponse;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysListResponse };
