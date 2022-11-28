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
var ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams.prototype, "name", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams };
var ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams };
var ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity };
var ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TagApiSpecRevisionRequest)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest };
var ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse, _super);
    function ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiSpec)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse.prototype, "apiSpec", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse };
