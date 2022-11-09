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
var ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams, _super);
    function ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams.prototype, "resource", void 0);
    return ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams };
var ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams, _super);
    function ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams };
var ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity, _super);
    function ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity };
var ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest, _super);
    function ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest.prototype, "security", void 0);
    return ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest };
var ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse, _super);
    function ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApigatewayPolicy)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse.prototype, "apigatewayPolicy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse.prototype, "statusCode", void 0);
    return ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse;
}(SpeakeasyBase));
export { ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse };
