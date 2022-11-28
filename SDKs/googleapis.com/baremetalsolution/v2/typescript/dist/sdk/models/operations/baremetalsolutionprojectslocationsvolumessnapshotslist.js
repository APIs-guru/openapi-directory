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
var BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams.prototype, "parent", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest };
var BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse, _super);
    function BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVolumeSnapshotsResponse)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse.prototype, "listVolumeSnapshotsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse };
