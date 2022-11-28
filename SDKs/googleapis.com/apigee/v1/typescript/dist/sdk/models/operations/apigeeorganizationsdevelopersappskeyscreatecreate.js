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
var ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams, _super);
    function ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams };
var ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams, _super);
    function ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams };
var ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity, _super);
    function ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity };
var ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest, _super);
    function ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsKeysCreateCreatePathParams)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsKeysCreateCreateQueryParams)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeveloperAppKey)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsKeysCreateCreateSecurity)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest };
var ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse, _super);
    function ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeveloperAppKey)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse.prototype, "googleCloudApigeeV1DeveloperAppKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse };
