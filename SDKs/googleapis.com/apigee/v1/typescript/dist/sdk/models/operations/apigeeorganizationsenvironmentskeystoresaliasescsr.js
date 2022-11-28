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
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest };
var ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse, _super);
    function ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleApiHttpBody)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse.prototype, "googleApiHttpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse };
