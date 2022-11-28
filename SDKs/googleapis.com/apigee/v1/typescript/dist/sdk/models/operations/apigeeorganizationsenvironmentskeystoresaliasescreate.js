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
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_password" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreExpiryValidation" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "ignoreExpiryValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreNewlineValidation" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "ignoreNewlineValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleApiHttpBody)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Alias)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse.prototype, "googleCloudApigeeV1Alias", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse };
