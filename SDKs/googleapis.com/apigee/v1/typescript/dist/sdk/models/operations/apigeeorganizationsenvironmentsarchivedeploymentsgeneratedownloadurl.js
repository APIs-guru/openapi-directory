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
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1GenerateDownloadUrlResponse)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse.prototype, "googleCloudApigeeV1GenerateDownloadUrlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse };
