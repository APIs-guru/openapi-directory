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
var ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams, _super);
    function ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams };
var ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams, _super);
    function ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams };
var ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity, _super);
    function ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity };
var ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest, _super);
    function ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1CanaryEvaluationInput)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest };
var ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse, _super);
    function ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse };
