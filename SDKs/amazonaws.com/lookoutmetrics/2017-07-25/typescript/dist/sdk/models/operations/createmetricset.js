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
var CreateMetricSetHeaders = /** @class */ (function (_super) {
    __extends(CreateMetricSetHeaders, _super);
    function CreateMetricSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateMetricSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateMetricSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateMetricSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateMetricSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateMetricSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateMetricSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateMetricSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateMetricSetHeaders;
}(SpeakeasyBase));
export { CreateMetricSetHeaders };
export var CreateMetricSetRequestBodyMetricSetFrequencyEnum;
(function (CreateMetricSetRequestBodyMetricSetFrequencyEnum) {
    CreateMetricSetRequestBodyMetricSetFrequencyEnum["P1D"] = "P1D";
    CreateMetricSetRequestBodyMetricSetFrequencyEnum["Pt1H"] = "PT1H";
    CreateMetricSetRequestBodyMetricSetFrequencyEnum["Pt10M"] = "PT10M";
    CreateMetricSetRequestBodyMetricSetFrequencyEnum["Pt5M"] = "PT5M";
})(CreateMetricSetRequestBodyMetricSetFrequencyEnum || (CreateMetricSetRequestBodyMetricSetFrequencyEnum = {}));
// CreateMetricSetRequestBodyMetricSource
/**
 * Contains information about source data used to generate a metric.
**/
var CreateMetricSetRequestBodyMetricSource = /** @class */ (function (_super) {
    __extends(CreateMetricSetRequestBodyMetricSource, _super);
    function CreateMetricSetRequestBodyMetricSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppFlowConfig" }),
        __metadata("design:type", shared.AppFlowConfig)
    ], CreateMetricSetRequestBodyMetricSource.prototype, "appFlowConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchConfig" }),
        __metadata("design:type", shared.CloudWatchConfig)
    ], CreateMetricSetRequestBodyMetricSource.prototype, "cloudWatchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RDSSourceConfig" }),
        __metadata("design:type", shared.RdsSourceConfig)
    ], CreateMetricSetRequestBodyMetricSource.prototype, "rdsSourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftSourceConfig" }),
        __metadata("design:type", shared.RedshiftSourceConfig)
    ], CreateMetricSetRequestBodyMetricSource.prototype, "redshiftSourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3SourceConfig" }),
        __metadata("design:type", shared.S3SourceConfig)
    ], CreateMetricSetRequestBodyMetricSource.prototype, "s3SourceConfig", void 0);
    return CreateMetricSetRequestBodyMetricSource;
}(SpeakeasyBase));
export { CreateMetricSetRequestBodyMetricSource };
// CreateMetricSetRequestBodyTimestampColumn
/**
 * Contains information about the column used to track time in a source data file.
**/
var CreateMetricSetRequestBodyTimestampColumn = /** @class */ (function (_super) {
    __extends(CreateMetricSetRequestBodyTimestampColumn, _super);
    function CreateMetricSetRequestBodyTimestampColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColumnFormat" }),
        __metadata("design:type", String)
    ], CreateMetricSetRequestBodyTimestampColumn.prototype, "columnFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColumnName" }),
        __metadata("design:type", String)
    ], CreateMetricSetRequestBodyTimestampColumn.prototype, "columnName", void 0);
    return CreateMetricSetRequestBodyTimestampColumn;
}(SpeakeasyBase));
export { CreateMetricSetRequestBodyTimestampColumn };
var CreateMetricSetRequestBody = /** @class */ (function (_super) {
    __extends(CreateMetricSetRequestBody, _super);
    function CreateMetricSetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], CreateMetricSetRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DimensionList" }),
        __metadata("design:type", Array)
    ], CreateMetricSetRequestBody.prototype, "dimensionList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricList", elemType: shared.Metric }),
        __metadata("design:type", Array)
    ], CreateMetricSetRequestBody.prototype, "metricList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSetDescription" }),
        __metadata("design:type", String)
    ], CreateMetricSetRequestBody.prototype, "metricSetDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSetFrequency" }),
        __metadata("design:type", String)
    ], CreateMetricSetRequestBody.prototype, "metricSetFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSetName" }),
        __metadata("design:type", String)
    ], CreateMetricSetRequestBody.prototype, "metricSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSource" }),
        __metadata("design:type", CreateMetricSetRequestBodyMetricSource)
    ], CreateMetricSetRequestBody.prototype, "metricSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Offset" }),
        __metadata("design:type", Number)
    ], CreateMetricSetRequestBody.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateMetricSetRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimestampColumn" }),
        __metadata("design:type", CreateMetricSetRequestBodyTimestampColumn)
    ], CreateMetricSetRequestBody.prototype, "timestampColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timezone" }),
        __metadata("design:type", String)
    ], CreateMetricSetRequestBody.prototype, "timezone", void 0);
    return CreateMetricSetRequestBody;
}(SpeakeasyBase));
export { CreateMetricSetRequestBody };
var CreateMetricSetRequest = /** @class */ (function (_super) {
    __extends(CreateMetricSetRequest, _super);
    function CreateMetricSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMetricSetHeaders)
    ], CreateMetricSetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateMetricSetRequestBody)
    ], CreateMetricSetRequest.prototype, "request", void 0);
    return CreateMetricSetRequest;
}(SpeakeasyBase));
export { CreateMetricSetRequest };
var CreateMetricSetResponse = /** @class */ (function (_super) {
    __extends(CreateMetricSetResponse, _super);
    function CreateMetricSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMetricSetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMetricSetResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMetricSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateMetricSetResponse)
    ], CreateMetricSetResponse.prototype, "createMetricSetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMetricSetResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMetricSetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMetricSetResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMetricSetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMetricSetResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMetricSetResponse.prototype, "validationException", void 0);
    return CreateMetricSetResponse;
}(SpeakeasyBase));
export { CreateMetricSetResponse };
