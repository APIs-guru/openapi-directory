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
var ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams, _super);
    function ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams.prototype, "resource", void 0);
    return ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams };
var ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams };
var ApigeeOrganizationsEnvironmentsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsGetIamPolicySecurity, _super);
    function ApigeeOrganizationsEnvironmentsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsGetIamPolicySecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsGetIamPolicySecurity };
var ApigeeOrganizationsEnvironmentsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsGetIamPolicyRequest, _super);
    function ApigeeOrganizationsEnvironmentsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsGetIamPolicySecurity)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsGetIamPolicyRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsGetIamPolicyRequest };
var ApigeeOrganizationsEnvironmentsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsGetIamPolicyResponse, _super);
    function ApigeeOrganizationsEnvironmentsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsGetIamPolicyResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsGetIamPolicyResponse };
