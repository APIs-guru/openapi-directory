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
var ApigeeOrganizationsDevelopersCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersCreatePathParams, _super);
    function ApigeeOrganizationsDevelopersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsDevelopersCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersCreatePathParams };
var ApigeeOrganizationsDevelopersCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersCreateQueryParams, _super);
    function ApigeeOrganizationsDevelopersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDevelopersCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersCreateQueryParams };
var ApigeeOrganizationsDevelopersCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersCreateSecurity, _super);
    function ApigeeOrganizationsDevelopersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDevelopersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDevelopersCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDevelopersCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersCreateSecurity };
var ApigeeOrganizationsDevelopersCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersCreateRequest, _super);
    function ApigeeOrganizationsDevelopersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersCreatePathParams)
    ], ApigeeOrganizationsDevelopersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersCreateQueryParams)
    ], ApigeeOrganizationsDevelopersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeveloperInput)
    ], ApigeeOrganizationsDevelopersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersCreateSecurity)
    ], ApigeeOrganizationsDevelopersCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDevelopersCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersCreateRequest };
var ApigeeOrganizationsDevelopersCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersCreateResponse, _super);
    function ApigeeOrganizationsDevelopersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Developer)
    ], ApigeeOrganizationsDevelopersCreateResponse.prototype, "googleCloudApigeeV1Developer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDevelopersCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersCreateResponse };
