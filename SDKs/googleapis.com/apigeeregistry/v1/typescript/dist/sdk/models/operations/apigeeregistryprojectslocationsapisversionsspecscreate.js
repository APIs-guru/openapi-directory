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
var ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams.prototype, "parent", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams };
var ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiSpecId" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "apiSpecId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams };
var ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity };
var ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiSpecInput)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest };
var ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiSpec)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse.prototype, "apiSpec", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse };
