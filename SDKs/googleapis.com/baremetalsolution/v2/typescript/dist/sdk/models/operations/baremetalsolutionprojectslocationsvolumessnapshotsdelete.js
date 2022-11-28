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
var BaremetalsolutionProjectsLocationsVolumesSnapshotsDeletePathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsDeletePathParams, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeletePathParams.prototype, "name", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsDeletePathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsDeletePathParams };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsDeletePathParams)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteQueryParams)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse };
