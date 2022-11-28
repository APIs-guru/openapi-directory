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
var BigqueryTablesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicyPathParams, _super);
    function BigqueryTablesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyPathParams.prototype, "resource", void 0);
    return BigqueryTablesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicyPathParams };
var BigqueryTablesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicyQueryParams, _super);
    function BigqueryTablesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyQueryParams.prototype, "userIp", void 0);
    return BigqueryTablesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicyQueryParams };
var BigqueryTablesGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicySecurityOption1, _super);
    function BigqueryTablesGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicySecurityOption1 };
var BigqueryTablesGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicySecurityOption2, _super);
    function BigqueryTablesGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicySecurityOption2 };
var BigqueryTablesGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicySecurityOption3, _super);
    function BigqueryTablesGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryTablesGetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicySecurityOption3 };
var BigqueryTablesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicySecurity, _super);
    function BigqueryTablesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesGetIamPolicySecurityOption1)
    ], BigqueryTablesGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesGetIamPolicySecurityOption2)
    ], BigqueryTablesGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesGetIamPolicySecurityOption3)
    ], BigqueryTablesGetIamPolicySecurity.prototype, "option3", void 0);
    return BigqueryTablesGetIamPolicySecurity;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicySecurity };
var BigqueryTablesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicyRequest, _super);
    function BigqueryTablesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesGetIamPolicyPathParams)
    ], BigqueryTablesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesGetIamPolicyQueryParams)
    ], BigqueryTablesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], BigqueryTablesGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesGetIamPolicySecurity)
    ], BigqueryTablesGetIamPolicyRequest.prototype, "security", void 0);
    return BigqueryTablesGetIamPolicyRequest;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicyRequest };
var BigqueryTablesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesGetIamPolicyResponse, _super);
    function BigqueryTablesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], BigqueryTablesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return BigqueryTablesGetIamPolicyResponse;
}(SpeakeasyBase));
export { BigqueryTablesGetIamPolicyResponse };
