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
var BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeSnapshot" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams.prototype, "volumeSnapshot", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse };
