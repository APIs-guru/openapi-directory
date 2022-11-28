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
var GetTimeSeriesServiceStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(GetTimeSeriesServiceStatisticsQueryParams, _super);
    function GetTimeSeriesServiceStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsQueryParams.prototype, "nextToken", void 0);
    return GetTimeSeriesServiceStatisticsQueryParams;
}(SpeakeasyBase));
export { GetTimeSeriesServiceStatisticsQueryParams };
var GetTimeSeriesServiceStatisticsHeaders = /** @class */ (function (_super) {
    __extends(GetTimeSeriesServiceStatisticsHeaders, _super);
    function GetTimeSeriesServiceStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTimeSeriesServiceStatisticsHeaders;
}(SpeakeasyBase));
export { GetTimeSeriesServiceStatisticsHeaders };
var GetTimeSeriesServiceStatisticsRequestBody = /** @class */ (function (_super) {
    __extends(GetTimeSeriesServiceStatisticsRequestBody, _super);
    function GetTimeSeriesServiceStatisticsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntitySelectorExpression" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "entitySelectorExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForecastStatistics" }),
        __metadata("design:type", Boolean)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "forecastStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupARN" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "groupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupName" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Period" }),
        __metadata("design:type", Number)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], GetTimeSeriesServiceStatisticsRequestBody.prototype, "startTime", void 0);
    return GetTimeSeriesServiceStatisticsRequestBody;
}(SpeakeasyBase));
export { GetTimeSeriesServiceStatisticsRequestBody };
var GetTimeSeriesServiceStatisticsRequest = /** @class */ (function (_super) {
    __extends(GetTimeSeriesServiceStatisticsRequest, _super);
    function GetTimeSeriesServiceStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimeSeriesServiceStatisticsQueryParams)
    ], GetTimeSeriesServiceStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimeSeriesServiceStatisticsHeaders)
    ], GetTimeSeriesServiceStatisticsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetTimeSeriesServiceStatisticsRequestBody)
    ], GetTimeSeriesServiceStatisticsRequest.prototype, "request", void 0);
    return GetTimeSeriesServiceStatisticsRequest;
}(SpeakeasyBase));
export { GetTimeSeriesServiceStatisticsRequest };
var GetTimeSeriesServiceStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetTimeSeriesServiceStatisticsResponse, _super);
    function GetTimeSeriesServiceStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTimeSeriesServiceStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetTimeSeriesServiceStatisticsResult)
    ], GetTimeSeriesServiceStatisticsResponse.prototype, "getTimeSeriesServiceStatisticsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTimeSeriesServiceStatisticsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTimeSeriesServiceStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTimeSeriesServiceStatisticsResponse.prototype, "throttledException", void 0);
    return GetTimeSeriesServiceStatisticsResponse;
}(SpeakeasyBase));
export { GetTimeSeriesServiceStatisticsResponse };
