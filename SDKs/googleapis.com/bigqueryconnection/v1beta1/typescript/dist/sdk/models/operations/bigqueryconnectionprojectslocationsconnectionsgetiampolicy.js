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
var BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams.prototype, "resource", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams };
var BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams };
var BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1, _super);
    function BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1 };
var BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2, _super);
    function BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2 };
var BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity, _super);
    function BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity.prototype, "option2", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity };
var BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest, _super);
    function BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest.prototype, "security", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest };
var BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse, _super);
    function BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse };
