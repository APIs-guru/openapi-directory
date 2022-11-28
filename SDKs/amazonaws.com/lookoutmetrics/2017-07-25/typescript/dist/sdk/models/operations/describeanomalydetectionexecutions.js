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
var DescribeAnomalyDetectionExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeAnomalyDetectionExecutionsQueryParams, _super);
    function DescribeAnomalyDetectionExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsQueryParams.prototype, "nextToken", void 0);
    return DescribeAnomalyDetectionExecutionsQueryParams;
}(SpeakeasyBase));
export { DescribeAnomalyDetectionExecutionsQueryParams };
var DescribeAnomalyDetectionExecutionsHeaders = /** @class */ (function (_super) {
    __extends(DescribeAnomalyDetectionExecutionsHeaders, _super);
    function DescribeAnomalyDetectionExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeAnomalyDetectionExecutionsHeaders;
}(SpeakeasyBase));
export { DescribeAnomalyDetectionExecutionsHeaders };
var DescribeAnomalyDetectionExecutionsRequestBody = /** @class */ (function (_super) {
    __extends(DescribeAnomalyDetectionExecutionsRequestBody, _super);
    function DescribeAnomalyDetectionExecutionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], DescribeAnomalyDetectionExecutionsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsRequestBody.prototype, "timestamp", void 0);
    return DescribeAnomalyDetectionExecutionsRequestBody;
}(SpeakeasyBase));
export { DescribeAnomalyDetectionExecutionsRequestBody };
var DescribeAnomalyDetectionExecutionsRequest = /** @class */ (function (_super) {
    __extends(DescribeAnomalyDetectionExecutionsRequest, _super);
    function DescribeAnomalyDetectionExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAnomalyDetectionExecutionsQueryParams)
    ], DescribeAnomalyDetectionExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAnomalyDetectionExecutionsHeaders)
    ], DescribeAnomalyDetectionExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeAnomalyDetectionExecutionsRequestBody)
    ], DescribeAnomalyDetectionExecutionsRequest.prototype, "request", void 0);
    return DescribeAnomalyDetectionExecutionsRequest;
}(SpeakeasyBase));
export { DescribeAnomalyDetectionExecutionsRequest };
var DescribeAnomalyDetectionExecutionsResponse = /** @class */ (function (_super) {
    __extends(DescribeAnomalyDetectionExecutionsResponse, _super);
    function DescribeAnomalyDetectionExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeAnomalyDetectionExecutionsResponse)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "describeAnomalyDetectionExecutionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAnomalyDetectionExecutionsResponse.prototype, "validationException", void 0);
    return DescribeAnomalyDetectionExecutionsResponse;
}(SpeakeasyBase));
export { DescribeAnomalyDetectionExecutionsResponse };
