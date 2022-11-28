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
var AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams.prototype, "name", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=etag" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams };
var AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity.prototype, "oauth2c", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity };
var AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest.prototype, "security", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest };
var AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse = /** @class */ (function (_super) {
    __extends(AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse, _super);
    function AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse.prototype, "statusCode", void 0);
    return AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse;
}(SpeakeasyBase));
export { AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse };
