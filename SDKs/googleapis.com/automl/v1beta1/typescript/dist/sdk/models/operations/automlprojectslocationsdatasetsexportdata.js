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
var AutomlProjectsLocationsDatasetsExportDataPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsExportDataPathParams, _super);
    function AutomlProjectsLocationsDatasetsExportDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataPathParams.prototype, "name", void 0);
    return AutomlProjectsLocationsDatasetsExportDataPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsExportDataPathParams };
var AutomlProjectsLocationsDatasetsExportDataQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsExportDataQueryParams, _super);
    function AutomlProjectsLocationsDatasetsExportDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsDatasetsExportDataQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsExportDataQueryParams };
var AutomlProjectsLocationsDatasetsExportDataSecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsExportDataSecurity, _super);
    function AutomlProjectsLocationsDatasetsExportDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsDatasetsExportDataSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsDatasetsExportDataSecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsDatasetsExportDataSecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsExportDataSecurity };
var AutomlProjectsLocationsDatasetsExportDataRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsExportDataRequest, _super);
    function AutomlProjectsLocationsDatasetsExportDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsDatasetsExportDataPathParams)
    ], AutomlProjectsLocationsDatasetsExportDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsDatasetsExportDataQueryParams)
    ], AutomlProjectsLocationsDatasetsExportDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExportDataRequest)
    ], AutomlProjectsLocationsDatasetsExportDataRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsDatasetsExportDataSecurity)
    ], AutomlProjectsLocationsDatasetsExportDataRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsDatasetsExportDataRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsExportDataRequest };
var AutomlProjectsLocationsDatasetsExportDataResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsDatasetsExportDataResponse, _super);
    function AutomlProjectsLocationsDatasetsExportDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsDatasetsExportDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AutomlProjectsLocationsDatasetsExportDataResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsDatasetsExportDataResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsDatasetsExportDataResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsDatasetsExportDataResponse };
