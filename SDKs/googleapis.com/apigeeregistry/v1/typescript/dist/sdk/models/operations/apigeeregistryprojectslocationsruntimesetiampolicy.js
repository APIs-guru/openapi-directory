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
var ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams, _super);
    function ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams.prototype, "resource", void 0);
    return ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams };
var ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams, _super);
    function ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams };
var ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity, _super);
    function ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity };
var ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest, _super);
    function ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest };
var ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse, _super);
    function ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse };
