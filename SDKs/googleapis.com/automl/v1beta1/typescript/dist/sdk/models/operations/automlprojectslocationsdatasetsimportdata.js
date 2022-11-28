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
var AutomlProjectsLocationsDatasetsImportDataPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsImportDataPathParams, _super);
    function AutomlProjectsLocationsDatasetsImportDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataPathParams.prototype, "name", void 0);
    return AutomlProjectsLocationsDatasetsImportDataPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsImportDataPathParams };
var AutomlProjectsLocationsDatasetsImportDataQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsImportDataQueryParams, _super);
    function AutomlProjectsLocationsDatasetsImportDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsDatasetsImportDataQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsImportDataQueryParams };
var AutomlProjectsLocationsDatasetsImportDataSecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsImportDataSecurity, _super);
    function AutomlProjectsLocationsDatasetsImportDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsDatasetsImportDataSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsDatasetsImportDataSecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsDatasetsImportDataSecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsImportDataSecurity };
var AutomlProjectsLocationsDatasetsImportDataRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsImportDataRequest, _super);
    function AutomlProjectsLocationsDatasetsImportDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsDatasetsImportDataPathParams)
    ], AutomlProjectsLocationsDatasetsImportDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsDatasetsImportDataQueryParams)
    ], AutomlProjectsLocationsDatasetsImportDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportDataRequest)
    ], AutomlProjectsLocationsDatasetsImportDataRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsDatasetsImportDataSecurity)
    ], AutomlProjectsLocationsDatasetsImportDataRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsDatasetsImportDataRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsImportDataRequest };
var AutomlProjectsLocationsDatasetsImportDataResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsImportDataResponse, _super);
    function AutomlProjectsLocationsDatasetsImportDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsImportDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AutomlProjectsLocationsDatasetsImportDataResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsDatasetsImportDataResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsDatasetsImportDataResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsImportDataResponse };
