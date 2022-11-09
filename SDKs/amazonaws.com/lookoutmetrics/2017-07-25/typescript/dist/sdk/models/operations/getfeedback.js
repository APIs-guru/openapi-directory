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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetFeedbackQueryParams = /** @class */ (function (_super) {
    __extends(GetFeedbackQueryParams, _super);
    function GetFeedbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetFeedbackQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetFeedbackQueryParams.prototype, "nextToken", void 0);
    return GetFeedbackQueryParams;
}(SpeakeasyBase));
export { GetFeedbackQueryParams };
var GetFeedbackHeaders = /** @class */ (function (_super) {
    __extends(GetFeedbackHeaders, _super);
    function GetFeedbackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFeedbackHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFeedbackHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFeedbackHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFeedbackHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFeedbackHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFeedbackHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFeedbackHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFeedbackHeaders;
}(SpeakeasyBase));
export { GetFeedbackHeaders };
// GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
/**
 * An anomalous metric in an anomaly group.
**/
var GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback = /** @class */ (function (_super) {
    __extends(GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback, _super);
    function GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AnomalyGroupId" }),
        __metadata("design:type", String)
    ], GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback.prototype, "anomalyGroupId", void 0);
    __decorate([
        Metadata({ data: "json, name=TimeSeriesId" }),
        __metadata("design:type", String)
    ], GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback.prototype, "timeSeriesId", void 0);
    return GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
}(SpeakeasyBase));
export { GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback };
var GetFeedbackRequestBody = /** @class */ (function (_super) {
    __extends(GetFeedbackRequestBody, _super);
    function GetFeedbackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], GetFeedbackRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        Metadata({ data: "json, name=AnomalyGroupTimeSeriesFeedback" }),
        __metadata("design:type", GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback)
    ], GetFeedbackRequestBody.prototype, "anomalyGroupTimeSeriesFeedback", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetFeedbackRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetFeedbackRequestBody.prototype, "nextToken", void 0);
    return GetFeedbackRequestBody;
}(SpeakeasyBase));
export { GetFeedbackRequestBody };
var GetFeedbackRequest = /** @class */ (function (_super) {
    __extends(GetFeedbackRequest, _super);
    function GetFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFeedbackQueryParams)
    ], GetFeedbackRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFeedbackHeaders)
    ], GetFeedbackRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetFeedbackRequestBody)
    ], GetFeedbackRequest.prototype, "request", void 0);
    return GetFeedbackRequest;
}(SpeakeasyBase));
export { GetFeedbackRequest };
var GetFeedbackResponse = /** @class */ (function (_super) {
    __extends(GetFeedbackResponse, _super);
    function GetFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetFeedbackResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetFeedbackResponse)
    ], GetFeedbackResponse.prototype, "getFeedbackResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetFeedbackResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetFeedbackResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetFeedbackResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetFeedbackResponse.prototype, "validationException", void 0);
    return GetFeedbackResponse;
}(SpeakeasyBase));
export { GetFeedbackResponse };
