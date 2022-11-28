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
var ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams };
var ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams };
var ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity };
var ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleApiHttpBody)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest };
var ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ResourceFile)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse.prototype, "googleCloudApigeeV1ResourceFile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse };
