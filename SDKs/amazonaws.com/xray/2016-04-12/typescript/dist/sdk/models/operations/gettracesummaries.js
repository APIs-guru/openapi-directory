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
var GetTraceSummariesQueryParams = /** @class */ (function (_super) {
    __extends(GetTraceSummariesQueryParams, _super);
    function GetTraceSummariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetTraceSummariesQueryParams.prototype, "nextToken", void 0);
    return GetTraceSummariesQueryParams;
}(SpeakeasyBase));
export { GetTraceSummariesQueryParams };
var GetTraceSummariesHeaders = /** @class */ (function (_super) {
    __extends(GetTraceSummariesHeaders, _super);
    function GetTraceSummariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetTraceSummariesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetTraceSummariesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetTraceSummariesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetTraceSummariesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetTraceSummariesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetTraceSummariesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetTraceSummariesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetTraceSummariesHeaders;
}(SpeakeasyBase));
export { GetTraceSummariesHeaders };
// GetTraceSummariesRequestBodySamplingStrategy
/**
 * The name and value of a sampling rule to apply to a trace summary.
**/
var GetTraceSummariesRequestBodySamplingStrategy = /** @class */ (function (_super) {
    __extends(GetTraceSummariesRequestBodySamplingStrategy, _super);
    function GetTraceSummariesRequestBodySamplingStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetTraceSummariesRequestBodySamplingStrategy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], GetTraceSummariesRequestBodySamplingStrategy.prototype, "value", void 0);
    return GetTraceSummariesRequestBodySamplingStrategy;
}(SpeakeasyBase));
export { GetTraceSummariesRequestBodySamplingStrategy };
export var GetTraceSummariesRequestBodyTimeRangeTypeEnum;
(function (GetTraceSummariesRequestBodyTimeRangeTypeEnum) {
    GetTraceSummariesRequestBodyTimeRangeTypeEnum["TraceId"] = "TraceId";
    GetTraceSummariesRequestBodyTimeRangeTypeEnum["Event"] = "Event";
})(GetTraceSummariesRequestBodyTimeRangeTypeEnum || (GetTraceSummariesRequestBodyTimeRangeTypeEnum = {}));
var GetTraceSummariesRequestBody = /** @class */ (function (_super) {
    __extends(GetTraceSummariesRequestBody, _super);
    function GetTraceSummariesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], GetTraceSummariesRequestBody.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterExpression" }),
        __metadata("design:type", String)
    ], GetTraceSummariesRequestBody.prototype, "filterExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetTraceSummariesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sampling" }),
        __metadata("design:type", Boolean)
    ], GetTraceSummariesRequestBody.prototype, "sampling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SamplingStrategy" }),
        __metadata("design:type", GetTraceSummariesRequestBodySamplingStrategy)
    ], GetTraceSummariesRequestBody.prototype, "samplingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], GetTraceSummariesRequestBody.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeRangeType" }),
        __metadata("design:type", String)
    ], GetTraceSummariesRequestBody.prototype, "timeRangeType", void 0);
    return GetTraceSummariesRequestBody;
}(SpeakeasyBase));
export { GetTraceSummariesRequestBody };
var GetTraceSummariesRequest = /** @class */ (function (_super) {
    __extends(GetTraceSummariesRequest, _super);
    function GetTraceSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTraceSummariesQueryParams)
    ], GetTraceSummariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTraceSummariesHeaders)
    ], GetTraceSummariesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetTraceSummariesRequestBody)
    ], GetTraceSummariesRequest.prototype, "request", void 0);
    return GetTraceSummariesRequest;
}(SpeakeasyBase));
export { GetTraceSummariesRequest };
var GetTraceSummariesResponse = /** @class */ (function (_super) {
    __extends(GetTraceSummariesResponse, _super);
    function GetTraceSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTraceSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetTraceSummariesResult)
    ], GetTraceSummariesResponse.prototype, "getTraceSummariesResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTraceSummariesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTraceSummariesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTraceSummariesResponse.prototype, "throttledException", void 0);
    return GetTraceSummariesResponse;
}(SpeakeasyBase));
export { GetTraceSummariesResponse };
