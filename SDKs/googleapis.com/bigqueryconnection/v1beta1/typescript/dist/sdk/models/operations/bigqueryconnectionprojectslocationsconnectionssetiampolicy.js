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
var BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams.prototype, "resource", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams };
var BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams };
var BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1, _super);
    function BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1 };
var BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2, _super);
    function BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2 };
var BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity, _super);
    function BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity.prototype, "option2", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity };
var BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest, _super);
    function BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest.prototype, "security", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest };
var BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse, _super);
    function BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse };
