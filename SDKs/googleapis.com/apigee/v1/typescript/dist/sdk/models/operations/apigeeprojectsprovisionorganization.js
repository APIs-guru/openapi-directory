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
var ApigeeProjectsProvisionOrganizationPathParams = /** @class */ (function (_super) {
    __extends(ApigeeProjectsProvisionOrganizationPathParams, _super);
    function ApigeeProjectsProvisionOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationPathParams.prototype, "project", void 0);
    return ApigeeProjectsProvisionOrganizationPathParams;
}(SpeakeasyBase));
export { ApigeeProjectsProvisionOrganizationPathParams };
var ApigeeProjectsProvisionOrganizationQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeProjectsProvisionOrganizationQueryParams, _super);
    function ApigeeProjectsProvisionOrganizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeProjectsProvisionOrganizationQueryParams;
}(SpeakeasyBase));
export { ApigeeProjectsProvisionOrganizationQueryParams };
var ApigeeProjectsProvisionOrganizationSecurity = /** @class */ (function (_super) {
    __extends(ApigeeProjectsProvisionOrganizationSecurity, _super);
    function ApigeeProjectsProvisionOrganizationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeProjectsProvisionOrganizationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeProjectsProvisionOrganizationSecurity.prototype, "oauth2c", void 0);
    return ApigeeProjectsProvisionOrganizationSecurity;
}(SpeakeasyBase));
export { ApigeeProjectsProvisionOrganizationSecurity };
var ApigeeProjectsProvisionOrganizationRequest = /** @class */ (function (_super) {
    __extends(ApigeeProjectsProvisionOrganizationRequest, _super);
    function ApigeeProjectsProvisionOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeProjectsProvisionOrganizationPathParams)
    ], ApigeeProjectsProvisionOrganizationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeProjectsProvisionOrganizationQueryParams)
    ], ApigeeProjectsProvisionOrganizationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1ProvisionOrganizationRequest)
    ], ApigeeProjectsProvisionOrganizationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeProjectsProvisionOrganizationSecurity)
    ], ApigeeProjectsProvisionOrganizationRequest.prototype, "security", void 0);
    return ApigeeProjectsProvisionOrganizationRequest;
}(SpeakeasyBase));
export { ApigeeProjectsProvisionOrganizationRequest };
var ApigeeProjectsProvisionOrganizationResponse = /** @class */ (function (_super) {
    __extends(ApigeeProjectsProvisionOrganizationResponse, _super);
    function ApigeeProjectsProvisionOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeProjectsProvisionOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ApigeeProjectsProvisionOrganizationResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeProjectsProvisionOrganizationResponse.prototype, "statusCode", void 0);
    return ApigeeProjectsProvisionOrganizationResponse;
}(SpeakeasyBase));
export { ApigeeProjectsProvisionOrganizationResponse };
