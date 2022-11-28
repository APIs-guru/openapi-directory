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
var GetAnalyticsLiveStreamsLiveStreamIdPathParams = /** @class */ (function (_super) {
    __extends(GetAnalyticsLiveStreamsLiveStreamIdPathParams, _super);
    function GetAnalyticsLiveStreamsLiveStreamIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" }),
        __metadata("design:type", String)
    ], GetAnalyticsLiveStreamsLiveStreamIdPathParams.prototype, "liveStreamId", void 0);
    return GetAnalyticsLiveStreamsLiveStreamIdPathParams;
}(SpeakeasyBase));
export { GetAnalyticsLiveStreamsLiveStreamIdPathParams };
var GetAnalyticsLiveStreamsLiveStreamIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAnalyticsLiveStreamsLiveStreamIdQueryParams, _super);
    function GetAnalyticsLiveStreamsLiveStreamIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetAnalyticsLiveStreamsLiveStreamIdQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetAnalyticsLiveStreamsLiveStreamIdQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], GetAnalyticsLiveStreamsLiveStreamIdQueryParams.prototype, "period", void 0);
    return GetAnalyticsLiveStreamsLiveStreamIdQueryParams;
}(SpeakeasyBase));
export { GetAnalyticsLiveStreamsLiveStreamIdQueryParams };
var GetAnalyticsLiveStreamsLiveStreamIdSecurity = /** @class */ (function (_super) {
    __extends(GetAnalyticsLiveStreamsLiveStreamIdSecurity, _super);
    function GetAnalyticsLiveStreamsLiveStreamIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAnalyticsLiveStreamsLiveStreamIdSecurity.prototype, "bearerAuth", void 0);
    return GetAnalyticsLiveStreamsLiveStreamIdSecurity;
}(SpeakeasyBase));
export { GetAnalyticsLiveStreamsLiveStreamIdSecurity };
var GetAnalyticsLiveStreamsLiveStreamIdRequest = /** @class */ (function (_super) {
    __extends(GetAnalyticsLiveStreamsLiveStreamIdRequest, _super);
    function GetAnalyticsLiveStreamsLiveStreamIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsLiveStreamsLiveStreamIdPathParams)
    ], GetAnalyticsLiveStreamsLiveStreamIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsLiveStreamsLiveStreamIdQueryParams)
    ], GetAnalyticsLiveStreamsLiveStreamIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsLiveStreamsLiveStreamIdSecurity)
    ], GetAnalyticsLiveStreamsLiveStreamIdRequest.prototype, "security", void 0);
    return GetAnalyticsLiveStreamsLiveStreamIdRequest;
}(SpeakeasyBase));
export { GetAnalyticsLiveStreamsLiveStreamIdRequest };
var GetAnalyticsLiveStreamsLiveStreamIdResponse = /** @class */ (function (_super) {
    __extends(GetAnalyticsLiveStreamsLiveStreamIdResponse, _super);
    function GetAnalyticsLiveStreamsLiveStreamIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnalyticsLiveStreamsLiveStreamIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnalyticsLiveStreamsLiveStreamIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetAnalyticsLiveStreamsLiveStreamIdResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RawStatisticsListLiveStreamAnalyticsResponse)
    ], GetAnalyticsLiveStreamsLiveStreamIdResponse.prototype, "rawStatisticsListLiveStreamAnalyticsResponse", void 0);
    return GetAnalyticsLiveStreamsLiveStreamIdResponse;
}(SpeakeasyBase));
export { GetAnalyticsLiveStreamsLiveStreamIdResponse };
