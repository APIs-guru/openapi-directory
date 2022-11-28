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
var AutomlProjectsLocationsModelsUndeployPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsUndeployPathParams, _super);
    function AutomlProjectsLocationsModelsUndeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployPathParams.prototype, "name", void 0);
    return AutomlProjectsLocationsModelsUndeployPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsUndeployPathParams };
var AutomlProjectsLocationsModelsUndeployQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsUndeployQueryParams, _super);
    function AutomlProjectsLocationsModelsUndeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsModelsUndeployQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsUndeployQueryParams };
var AutomlProjectsLocationsModelsUndeploySecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsUndeploySecurity, _super);
    function AutomlProjectsLocationsModelsUndeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsModelsUndeploySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsModelsUndeploySecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsModelsUndeploySecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsUndeploySecurity };
var AutomlProjectsLocationsModelsUndeployRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsUndeployRequest, _super);
    function AutomlProjectsLocationsModelsUndeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsUndeployPathParams)
    ], AutomlProjectsLocationsModelsUndeployRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsUndeployQueryParams)
    ], AutomlProjectsLocationsModelsUndeployRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AutomlProjectsLocationsModelsUndeployRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsUndeploySecurity)
    ], AutomlProjectsLocationsModelsUndeployRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsModelsUndeployRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsUndeployRequest };
var AutomlProjectsLocationsModelsUndeployResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsUndeployResponse, _super);
    function AutomlProjectsLocationsModelsUndeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsUndeployResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AutomlProjectsLocationsModelsUndeployResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsUndeployResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsModelsUndeployResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsUndeployResponse };
