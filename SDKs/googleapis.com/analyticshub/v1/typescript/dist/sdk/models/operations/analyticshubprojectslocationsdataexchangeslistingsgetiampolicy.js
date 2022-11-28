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
var AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams.prototype, "resource", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams };
var AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams };
var AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1 };
var AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2 };
var AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity.prototype, "option2", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity };
var AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest.prototype, "security", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest };
var AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse };
