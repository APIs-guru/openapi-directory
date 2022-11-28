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
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1GenerateUploadUrlResponse)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse.prototype, "googleCloudApigeeV1GenerateUploadUrlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse };
