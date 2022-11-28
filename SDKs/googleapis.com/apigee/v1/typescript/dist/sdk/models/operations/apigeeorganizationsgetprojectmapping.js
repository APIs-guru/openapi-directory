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
var ApigeeOrganizationsGetProjectMappingPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetProjectMappingPathParams, _super);
    function ApigeeOrganizationsGetProjectMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsGetProjectMappingPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetProjectMappingPathParams };
var ApigeeOrganizationsGetProjectMappingQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetProjectMappingQueryParams, _super);
    function ApigeeOrganizationsGetProjectMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsGetProjectMappingQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetProjectMappingQueryParams };
var ApigeeOrganizationsGetProjectMappingSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetProjectMappingSecurity, _super);
    function ApigeeOrganizationsGetProjectMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsGetProjectMappingSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsGetProjectMappingSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsGetProjectMappingSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetProjectMappingSecurity };
var ApigeeOrganizationsGetProjectMappingRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetProjectMappingRequest, _super);
    function ApigeeOrganizationsGetProjectMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsGetProjectMappingPathParams)
    ], ApigeeOrganizationsGetProjectMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsGetProjectMappingQueryParams)
    ], ApigeeOrganizationsGetProjectMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsGetProjectMappingSecurity)
    ], ApigeeOrganizationsGetProjectMappingRequest.prototype, "security", void 0);
    return ApigeeOrganizationsGetProjectMappingRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetProjectMappingRequest };
var ApigeeOrganizationsGetProjectMappingResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetProjectMappingResponse, _super);
    function ApigeeOrganizationsGetProjectMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetProjectMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1OrganizationProjectMapping)
    ], ApigeeOrganizationsGetProjectMappingResponse.prototype, "googleCloudApigeeV1OrganizationProjectMapping", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsGetProjectMappingResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsGetProjectMappingResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetProjectMappingResponse };
