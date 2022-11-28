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
var ApigatewayProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsGetPathParams, _super);
    function ApigatewayProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return ApigatewayProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsGetPathParams };
export var ApigatewayProjectsLocationsOperationsGetViewEnum;
(function (ApigatewayProjectsLocationsOperationsGetViewEnum) {
    ApigatewayProjectsLocationsOperationsGetViewEnum["ConfigViewUnspecified"] = "CONFIG_VIEW_UNSPECIFIED";
    ApigatewayProjectsLocationsOperationsGetViewEnum["Basic"] = "BASIC";
    ApigatewayProjectsLocationsOperationsGetViewEnum["Full"] = "FULL";
})(ApigatewayProjectsLocationsOperationsGetViewEnum || (ApigatewayProjectsLocationsOperationsGetViewEnum = {}));
var ApigatewayProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsGetQueryParams, _super);
    function ApigatewayProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetQueryParams.prototype, "view", void 0);
    return ApigatewayProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsGetQueryParams };
var ApigatewayProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsGetSecurity, _super);
    function ApigatewayProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigatewayProjectsLocationsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigatewayProjectsLocationsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return ApigatewayProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsGetSecurity };
var ApigatewayProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsGetRequest, _super);
    function ApigatewayProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsOperationsGetPathParams)
    ], ApigatewayProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsOperationsGetQueryParams)
    ], ApigatewayProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsOperationsGetSecurity)
    ], ApigatewayProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return ApigatewayProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsGetRequest };
var ApigatewayProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsOperationsGetResponse, _super);
    function ApigatewayProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApigatewayOperation)
    ], ApigatewayProjectsLocationsOperationsGetResponse.prototype, "apigatewayOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return ApigatewayProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsOperationsGetResponse };
