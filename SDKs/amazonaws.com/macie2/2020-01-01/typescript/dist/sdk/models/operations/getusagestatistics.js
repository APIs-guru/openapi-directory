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
var GetUsageStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsQueryParams, _super);
    function GetUsageStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsQueryParams.prototype, "nextToken", void 0);
    return GetUsageStatisticsQueryParams;
}(SpeakeasyBase));
export { GetUsageStatisticsQueryParams };
var GetUsageStatisticsHeaders = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsHeaders, _super);
    function GetUsageStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUsageStatisticsHeaders;
}(SpeakeasyBase));
export { GetUsageStatisticsHeaders };
// GetUsageStatisticsRequestBodySortBy
/**
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
**/
var GetUsageStatisticsRequestBodySortBy = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsRequestBodySortBy, _super);
    function GetUsageStatisticsRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBodySortBy.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBodySortBy.prototype, "orderBy", void 0);
    return GetUsageStatisticsRequestBodySortBy;
}(SpeakeasyBase));
export { GetUsageStatisticsRequestBodySortBy };
export var GetUsageStatisticsRequestBodyTimeRangeEnum;
(function (GetUsageStatisticsRequestBodyTimeRangeEnum) {
    GetUsageStatisticsRequestBodyTimeRangeEnum["MonthToDate"] = "MONTH_TO_DATE";
    GetUsageStatisticsRequestBodyTimeRangeEnum["Past30Days"] = "PAST_30_DAYS";
})(GetUsageStatisticsRequestBodyTimeRangeEnum || (GetUsageStatisticsRequestBodyTimeRangeEnum = {}));
var GetUsageStatisticsRequestBody = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsRequestBody, _super);
    function GetUsageStatisticsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterBy", elemType: shared.UsageStatisticsFilter }),
        __metadata("design:type", Array)
    ], GetUsageStatisticsRequestBody.prototype, "filterBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GetUsageStatisticsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortBy" }),
        __metadata("design:type", GetUsageStatisticsRequestBodySortBy)
    ], GetUsageStatisticsRequestBody.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeRange" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBody.prototype, "timeRange", void 0);
    return GetUsageStatisticsRequestBody;
}(SpeakeasyBase));
export { GetUsageStatisticsRequestBody };
var GetUsageStatisticsRequest = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsRequest, _super);
    function GetUsageStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsageStatisticsQueryParams)
    ], GetUsageStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsageStatisticsHeaders)
    ], GetUsageStatisticsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetUsageStatisticsRequestBody)
    ], GetUsageStatisticsRequest.prototype, "request", void 0);
    return GetUsageStatisticsRequest;
}(SpeakeasyBase));
export { GetUsageStatisticsRequest };
var GetUsageStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsResponse, _super);
    function GetUsageStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsageStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetUsageStatisticsResponse)
    ], GetUsageStatisticsResponse.prototype, "getUsageStatisticsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsageStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "validationException", void 0);
    return GetUsageStatisticsResponse;
}(SpeakeasyBase));
export { GetUsageStatisticsResponse };
