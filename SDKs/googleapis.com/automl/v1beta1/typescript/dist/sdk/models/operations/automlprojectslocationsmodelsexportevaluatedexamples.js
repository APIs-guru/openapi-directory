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
var AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams, _super);
    function AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams.prototype, "name", void 0);
    return AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams };
var AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams, _super);
    function AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams };
var AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity, _super);
    function AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity };
var AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest, _super);
    function AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExportEvaluatedExamplesRequest)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest };
var AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse, _super);
    function AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse };
