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
var BigqueryTablesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesSetIamPolicyPathParams, _super);
    function BigqueryTablesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyPathParams.prototype, "resource", void 0);
    return BigqueryTablesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { BigqueryTablesSetIamPolicyPathParams };
var BigqueryTablesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTablesSetIamPolicyQueryParams, _super);
    function BigqueryTablesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTablesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyQueryParams.prototype, "userIp", void 0);
    return BigqueryTablesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BigqueryTablesSetIamPolicyQueryParams };
var BigqueryTablesSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTablesSetIamPolicySecurityOption1, _super);
    function BigqueryTablesSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTablesSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { BigqueryTablesSetIamPolicySecurityOption1 };
var BigqueryTablesSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTablesSetIamPolicySecurityOption2, _super);
    function BigqueryTablesSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTablesSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTablesSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTablesSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { BigqueryTablesSetIamPolicySecurityOption2 };
var BigqueryTablesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BigqueryTablesSetIamPolicySecurity, _super);
    function BigqueryTablesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesSetIamPolicySecurityOption1)
    ], BigqueryTablesSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTablesSetIamPolicySecurityOption2)
    ], BigqueryTablesSetIamPolicySecurity.prototype, "option2", void 0);
    return BigqueryTablesSetIamPolicySecurity;
}(SpeakeasyBase));
export { BigqueryTablesSetIamPolicySecurity };
var BigqueryTablesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BigqueryTablesSetIamPolicyRequest, _super);
    function BigqueryTablesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesSetIamPolicyPathParams)
    ], BigqueryTablesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesSetIamPolicyQueryParams)
    ], BigqueryTablesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], BigqueryTablesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTablesSetIamPolicySecurity)
    ], BigqueryTablesSetIamPolicyRequest.prototype, "security", void 0);
    return BigqueryTablesSetIamPolicyRequest;
}(SpeakeasyBase));
export { BigqueryTablesSetIamPolicyRequest };
var BigqueryTablesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BigqueryTablesSetIamPolicyResponse, _super);
    function BigqueryTablesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTablesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], BigqueryTablesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTablesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return BigqueryTablesSetIamPolicyResponse;
}(SpeakeasyBase));
export { BigqueryTablesSetIamPolicyResponse };
