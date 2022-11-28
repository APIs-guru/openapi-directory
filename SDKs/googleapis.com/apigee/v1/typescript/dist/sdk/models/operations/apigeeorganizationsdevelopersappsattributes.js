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
var ApigeeOrganizationsDevelopersAppsAttributesPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsAttributesPathParams, _super);
    function ApigeeOrganizationsDevelopersAppsAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsDevelopersAppsAttributesPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsAttributesPathParams };
var ApigeeOrganizationsDevelopersAppsAttributesQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsAttributesQueryParams, _super);
    function ApigeeOrganizationsDevelopersAppsAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDevelopersAppsAttributesQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsAttributesQueryParams };
var ApigeeOrganizationsDevelopersAppsAttributesSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsAttributesSecurity, _super);
    function ApigeeOrganizationsDevelopersAppsAttributesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDevelopersAppsAttributesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDevelopersAppsAttributesSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDevelopersAppsAttributesSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsAttributesSecurity };
var ApigeeOrganizationsDevelopersAppsAttributesRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsAttributesRequest, _super);
    function ApigeeOrganizationsDevelopersAppsAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsAttributesPathParams)
    ], ApigeeOrganizationsDevelopersAppsAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsAttributesQueryParams)
    ], ApigeeOrganizationsDevelopersAppsAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1Attributes)
    ], ApigeeOrganizationsDevelopersAppsAttributesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersAppsAttributesSecurity)
    ], ApigeeOrganizationsDevelopersAppsAttributesRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDevelopersAppsAttributesRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsAttributesRequest };
var ApigeeOrganizationsDevelopersAppsAttributesResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersAppsAttributesResponse, _super);
    function ApigeeOrganizationsDevelopersAppsAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersAppsAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Attributes)
    ], ApigeeOrganizationsDevelopersAppsAttributesResponse.prototype, "googleCloudApigeeV1Attributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersAppsAttributesResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDevelopersAppsAttributesResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersAppsAttributesResponse };
