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
var ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleApiHttpBody)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse.prototype, "googleApiHttpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse };
