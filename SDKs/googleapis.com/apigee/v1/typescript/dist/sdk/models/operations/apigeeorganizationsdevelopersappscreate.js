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
var ApigeeOrganizationsDevelopersAppsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsCreatePathParams, _super);
    function ApigeeOrganizationsDevelopersAppsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsDevelopersAppsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsCreatePathParams };
var ApigeeOrganizationsDevelopersAppsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsCreateQueryParams, _super);
    function ApigeeOrganizationsDevelopersAppsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDevelopersAppsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsCreateQueryParams };
var ApigeeOrganizationsDevelopersAppsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsCreateSecurity, _super);
    function ApigeeOrganizationsDevelopersAppsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDevelopersAppsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDevelopersAppsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDevelopersAppsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsCreateSecurity };
var ApigeeOrganizationsDevelopersAppsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsCreateRequest, _super);
    function ApigeeOrganizationsDevelopersAppsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsCreatePathParams)
    ], ApigeeOrganizationsDevelopersAppsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsCreateQueryParams)
    ], ApigeeOrganizationsDevelopersAppsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeveloperAppInput)
    ], ApigeeOrganizationsDevelopersAppsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsCreateSecurity)
    ], ApigeeOrganizationsDevelopersAppsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDevelopersAppsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsCreateRequest };
var ApigeeOrganizationsDevelopersAppsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsCreateResponse, _super);
    function ApigeeOrganizationsDevelopersAppsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeveloperApp)
    ], ApigeeOrganizationsDevelopersAppsCreateResponse.prototype, "googleCloudApigeeV1DeveloperApp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersAppsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDevelopersAppsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsCreateResponse };
