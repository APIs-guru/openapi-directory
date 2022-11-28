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
var ApigatewayProjectsLocationsGatewaysPatchPathParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysPatchPathParams, _super);
    function ApigatewayProjectsLocationsGatewaysPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchPathParams.prototype, "name", void 0);
    return ApigatewayProjectsLocationsGatewaysPatchPathParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysPatchPathParams };
var ApigatewayProjectsLocationsGatewaysPatchQueryParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysPatchQueryParams, _super);
    function ApigatewayProjectsLocationsGatewaysPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ApigatewayProjectsLocationsGatewaysPatchQueryParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysPatchQueryParams };
var ApigatewayProjectsLocationsGatewaysPatchSecurity = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysPatchSecurity, _super);
    function ApigatewayProjectsLocationsGatewaysPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigatewayProjectsLocationsGatewaysPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigatewayProjectsLocationsGatewaysPatchSecurity.prototype, "oauth2c", void 0);
    return ApigatewayProjectsLocationsGatewaysPatchSecurity;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysPatchSecurity };
var ApigatewayProjectsLocationsGatewaysPatchRequest = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysPatchRequest, _super);
    function ApigatewayProjectsLocationsGatewaysPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysPatchPathParams)
    ], ApigatewayProjectsLocationsGatewaysPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysPatchQueryParams)
    ], ApigatewayProjectsLocationsGatewaysPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApigatewayGatewayInput)
    ], ApigatewayProjectsLocationsGatewaysPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysPatchSecurity)
    ], ApigatewayProjectsLocationsGatewaysPatchRequest.prototype, "security", void 0);
    return ApigatewayProjectsLocationsGatewaysPatchRequest;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysPatchRequest };
var ApigatewayProjectsLocationsGatewaysPatchResponse = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysPatchResponse, _super);
    function ApigatewayProjectsLocationsGatewaysPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApigatewayOperation)
    ], ApigatewayProjectsLocationsGatewaysPatchResponse.prototype, "apigatewayOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsGatewaysPatchResponse.prototype, "statusCode", void 0);
    return ApigatewayProjectsLocationsGatewaysPatchResponse;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysPatchResponse };
