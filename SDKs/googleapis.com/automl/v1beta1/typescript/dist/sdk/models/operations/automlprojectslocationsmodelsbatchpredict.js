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
var AutomlProjectsLocationsModelsBatchPredictPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsBatchPredictPathParams, _super);
    function AutomlProjectsLocationsModelsBatchPredictPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictPathParams.prototype, "name", void 0);
    return AutomlProjectsLocationsModelsBatchPredictPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsBatchPredictPathParams };
var AutomlProjectsLocationsModelsBatchPredictQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsBatchPredictQueryParams, _super);
    function AutomlProjectsLocationsModelsBatchPredictQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsModelsBatchPredictQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsBatchPredictQueryParams };
var AutomlProjectsLocationsModelsBatchPredictSecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsBatchPredictSecurity, _super);
    function AutomlProjectsLocationsModelsBatchPredictSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsModelsBatchPredictSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsModelsBatchPredictSecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsModelsBatchPredictSecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsBatchPredictSecurity };
var AutomlProjectsLocationsModelsBatchPredictRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsBatchPredictRequest, _super);
    function AutomlProjectsLocationsModelsBatchPredictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsBatchPredictPathParams)
    ], AutomlProjectsLocationsModelsBatchPredictRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsBatchPredictQueryParams)
    ], AutomlProjectsLocationsModelsBatchPredictRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchPredictRequest)
    ], AutomlProjectsLocationsModelsBatchPredictRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsBatchPredictSecurity)
    ], AutomlProjectsLocationsModelsBatchPredictRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsModelsBatchPredictRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsBatchPredictRequest };
var AutomlProjectsLocationsModelsBatchPredictResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsBatchPredictResponse, _super);
    function AutomlProjectsLocationsModelsBatchPredictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsBatchPredictResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AutomlProjectsLocationsModelsBatchPredictResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsBatchPredictResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsModelsBatchPredictResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsBatchPredictResponse };
