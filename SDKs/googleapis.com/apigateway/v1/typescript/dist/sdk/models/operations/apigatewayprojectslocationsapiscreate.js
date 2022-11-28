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
var ApigatewayProjectsLocationsApisCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsApisCreatePathParams, _super);
    function ApigatewayProjectsLocationsApisCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreatePathParams.prototype, "parent", void 0);
    return ApigatewayProjectsLocationsApisCreatePathParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsApisCreatePathParams };
var ApigatewayProjectsLocationsApisCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsApisCreateQueryParams, _super);
    function ApigatewayProjectsLocationsApisCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiId" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigatewayProjectsLocationsApisCreateQueryParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsApisCreateQueryParams };
var ApigatewayProjectsLocationsApisCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsApisCreateSecurity, _super);
    function ApigatewayProjectsLocationsApisCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigatewayProjectsLocationsApisCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigatewayProjectsLocationsApisCreateSecurity.prototype, "oauth2c", void 0);
    return ApigatewayProjectsLocationsApisCreateSecurity;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsApisCreateSecurity };
var ApigatewayProjectsLocationsApisCreateRequest = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsApisCreateRequest, _super);
    function ApigatewayProjectsLocationsApisCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsApisCreatePathParams)
    ], ApigatewayProjectsLocationsApisCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsApisCreateQueryParams)
    ], ApigatewayProjectsLocationsApisCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApigatewayApiInput)
    ], ApigatewayProjectsLocationsApisCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsApisCreateSecurity)
    ], ApigatewayProjectsLocationsApisCreateRequest.prototype, "security", void 0);
    return ApigatewayProjectsLocationsApisCreateRequest;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsApisCreateRequest };
var ApigatewayProjectsLocationsApisCreateResponse = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsApisCreateResponse, _super);
    function ApigatewayProjectsLocationsApisCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApigatewayOperation)
    ], ApigatewayProjectsLocationsApisCreateResponse.prototype, "apigatewayOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsApisCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsApisCreateResponse.prototype, "statusCode", void 0);
    return ApigatewayProjectsLocationsApisCreateResponse;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsApisCreateResponse };
