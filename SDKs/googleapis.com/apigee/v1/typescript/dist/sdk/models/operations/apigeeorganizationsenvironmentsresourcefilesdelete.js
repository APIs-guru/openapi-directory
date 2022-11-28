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
var ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams.prototype, "type", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams };
var ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams };
var ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity };
var ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest };
var ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ResourceFile)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse.prototype, "googleCloudApigeeV1ResourceFile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse };
