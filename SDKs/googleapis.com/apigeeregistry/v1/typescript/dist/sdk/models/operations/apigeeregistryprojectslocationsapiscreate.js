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
var ApigeeregistryProjectsLocationsApisCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisCreatePathParams, _super);
    function ApigeeregistryProjectsLocationsApisCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreatePathParams.prototype, "parent", void 0);
    return ApigeeregistryProjectsLocationsApisCreatePathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisCreatePathParams };
var ApigeeregistryProjectsLocationsApisCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisCreateQueryParams, _super);
    function ApigeeregistryProjectsLocationsApisCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiId" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsApisCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisCreateQueryParams };
var ApigeeregistryProjectsLocationsApisCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisCreateSecurity, _super);
    function ApigeeregistryProjectsLocationsApisCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsApisCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsApisCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsApisCreateSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisCreateSecurity };
var ApigeeregistryProjectsLocationsApisCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisCreateRequest, _super);
    function ApigeeregistryProjectsLocationsApisCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisCreatePathParams)
    ], ApigeeregistryProjectsLocationsApisCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisCreateQueryParams)
    ], ApigeeregistryProjectsLocationsApisCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiInput)
    ], ApigeeregistryProjectsLocationsApisCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisCreateSecurity)
    ], ApigeeregistryProjectsLocationsApisCreateRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsApisCreateRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisCreateRequest };
var ApigeeregistryProjectsLocationsApisCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisCreateResponse, _super);
    function ApigeeregistryProjectsLocationsApisCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Api)
    ], ApigeeregistryProjectsLocationsApisCreateResponse.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisCreateResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsApisCreateResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisCreateResponse };
