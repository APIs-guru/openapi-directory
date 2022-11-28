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
var GetAnalyticsVideosVideoIdPathParams = /** @class */ (function (_super) {
    __extends(GetAnalyticsVideosVideoIdPathParams, _super);
    function GetAnalyticsVideosVideoIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], GetAnalyticsVideosVideoIdPathParams.prototype, "videoId", void 0);
    return GetAnalyticsVideosVideoIdPathParams;
}(SpeakeasyBase));
export { GetAnalyticsVideosVideoIdPathParams };
var GetAnalyticsVideosVideoIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAnalyticsVideosVideoIdQueryParams, _super);
    function GetAnalyticsVideosVideoIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetAnalyticsVideosVideoIdQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadata" }),
        __metadata("design:type", Array)
    ], GetAnalyticsVideosVideoIdQueryParams.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetAnalyticsVideosVideoIdQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], GetAnalyticsVideosVideoIdQueryParams.prototype, "period", void 0);
    return GetAnalyticsVideosVideoIdQueryParams;
}(SpeakeasyBase));
export { GetAnalyticsVideosVideoIdQueryParams };
var GetAnalyticsVideosVideoIdSecurity = /** @class */ (function (_super) {
    __extends(GetAnalyticsVideosVideoIdSecurity, _super);
    function GetAnalyticsVideosVideoIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAnalyticsVideosVideoIdSecurity.prototype, "bearerAuth", void 0);
    return GetAnalyticsVideosVideoIdSecurity;
}(SpeakeasyBase));
export { GetAnalyticsVideosVideoIdSecurity };
var GetAnalyticsVideosVideoIdRequest = /** @class */ (function (_super) {
    __extends(GetAnalyticsVideosVideoIdRequest, _super);
    function GetAnalyticsVideosVideoIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsVideosVideoIdPathParams)
    ], GetAnalyticsVideosVideoIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsVideosVideoIdQueryParams)
    ], GetAnalyticsVideosVideoIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsVideosVideoIdSecurity)
    ], GetAnalyticsVideosVideoIdRequest.prototype, "security", void 0);
    return GetAnalyticsVideosVideoIdRequest;
}(SpeakeasyBase));
export { GetAnalyticsVideosVideoIdRequest };
var GetAnalyticsVideosVideoIdResponse = /** @class */ (function (_super) {
    __extends(GetAnalyticsVideosVideoIdResponse, _super);
    function GetAnalyticsVideosVideoIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnalyticsVideosVideoIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnalyticsVideosVideoIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetAnalyticsVideosVideoIdResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RawStatisticsListSessionsResponse)
    ], GetAnalyticsVideosVideoIdResponse.prototype, "rawStatisticsListSessionsResponse", void 0);
    return GetAnalyticsVideosVideoIdResponse;
}(SpeakeasyBase));
export { GetAnalyticsVideosVideoIdResponse };
