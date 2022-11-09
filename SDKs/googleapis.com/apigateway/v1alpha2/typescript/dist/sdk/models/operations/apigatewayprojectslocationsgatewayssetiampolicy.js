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
var ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams, _super);
    function ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams.prototype, "resource", void 0);
    return ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams };
var ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams, _super);
    function ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams };
var ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity, _super);
    function ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity };
var ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest, _super);
    function ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApigatewaySetIamPolicyRequest)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest.prototype, "security", void 0);
    return ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest };
var ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse, _super);
    function ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApigatewayPolicy)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse.prototype, "apigatewayPolicy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse.prototype, "statusCode", void 0);
    return ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse };
