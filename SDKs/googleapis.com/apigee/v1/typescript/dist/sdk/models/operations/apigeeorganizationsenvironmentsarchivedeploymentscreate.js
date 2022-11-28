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
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1ArchiveDeploymentInput)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse };
