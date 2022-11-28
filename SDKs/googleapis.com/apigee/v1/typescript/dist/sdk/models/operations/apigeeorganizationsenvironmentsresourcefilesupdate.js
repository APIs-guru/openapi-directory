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
var ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams.prototype, "type", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams };
var ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams };
var ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity };
var ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesUpdatePathParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesUpdateQueryParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleApiHttpBody)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesUpdateSecurity)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest };
var ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ResourceFile)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse.prototype, "googleCloudApigeeV1ResourceFile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse };
