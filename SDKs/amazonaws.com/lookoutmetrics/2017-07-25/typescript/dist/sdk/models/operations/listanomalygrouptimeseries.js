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
var ListAnomalyGroupTimeSeriesQueryParams = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupTimeSeriesQueryParams, _super);
    function ListAnomalyGroupTimeSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesQueryParams.prototype, "nextToken", void 0);
    return ListAnomalyGroupTimeSeriesQueryParams;
}(SpeakeasyBase));
export { ListAnomalyGroupTimeSeriesQueryParams };
var ListAnomalyGroupTimeSeriesHeaders = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupTimeSeriesHeaders, _super);
    function ListAnomalyGroupTimeSeriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAnomalyGroupTimeSeriesHeaders;
}(SpeakeasyBase));
export { ListAnomalyGroupTimeSeriesHeaders };
var ListAnomalyGroupTimeSeriesRequestBody = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupTimeSeriesRequestBody, _super);
    function ListAnomalyGroupTimeSeriesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyGroupId" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesRequestBody.prototype, "anomalyGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListAnomalyGroupTimeSeriesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricName" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesRequestBody.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesRequestBody.prototype, "nextToken", void 0);
    return ListAnomalyGroupTimeSeriesRequestBody;
}(SpeakeasyBase));
export { ListAnomalyGroupTimeSeriesRequestBody };
var ListAnomalyGroupTimeSeriesRequest = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupTimeSeriesRequest, _super);
    function ListAnomalyGroupTimeSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAnomalyGroupTimeSeriesQueryParams)
    ], ListAnomalyGroupTimeSeriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAnomalyGroupTimeSeriesHeaders)
    ], ListAnomalyGroupTimeSeriesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAnomalyGroupTimeSeriesRequestBody)
    ], ListAnomalyGroupTimeSeriesRequest.prototype, "request", void 0);
    return ListAnomalyGroupTimeSeriesRequest;
}(SpeakeasyBase));
export { ListAnomalyGroupTimeSeriesRequest };
var ListAnomalyGroupTimeSeriesResponse = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupTimeSeriesResponse, _super);
    function ListAnomalyGroupTimeSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAnomalyGroupTimeSeriesResponse)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "listAnomalyGroupTimeSeriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAnomalyGroupTimeSeriesResponse.prototype, "validationException", void 0);
    return ListAnomalyGroupTimeSeriesResponse;
}(SpeakeasyBase));
export { ListAnomalyGroupTimeSeriesResponse };
