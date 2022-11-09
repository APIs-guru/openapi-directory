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
var UpdateMetricSetHeaders = /** @class */ (function (_super) {
    __extends(UpdateMetricSetHeaders, _super);
    function UpdateMetricSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateMetricSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateMetricSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateMetricSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateMetricSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateMetricSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateMetricSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateMetricSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateMetricSetHeaders;
}(SpeakeasyBase));
export { UpdateMetricSetHeaders };
export var UpdateMetricSetRequestBodyMetricSetFrequencyEnum;
(function (UpdateMetricSetRequestBodyMetricSetFrequencyEnum) {
    UpdateMetricSetRequestBodyMetricSetFrequencyEnum["P1D"] = "P1D";
    UpdateMetricSetRequestBodyMetricSetFrequencyEnum["Pt1H"] = "PT1H";
    UpdateMetricSetRequestBodyMetricSetFrequencyEnum["Pt10M"] = "PT10M";
    UpdateMetricSetRequestBodyMetricSetFrequencyEnum["Pt5M"] = "PT5M";
})(UpdateMetricSetRequestBodyMetricSetFrequencyEnum || (UpdateMetricSetRequestBodyMetricSetFrequencyEnum = {}));
// UpdateMetricSetRequestBodyMetricSource
/**
 * Contains information about source data used to generate a metric.
**/
var UpdateMetricSetRequestBodyMetricSource = /** @class */ (function (_super) {
    __extends(UpdateMetricSetRequestBodyMetricSource, _super);
    function UpdateMetricSetRequestBodyMetricSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AppFlowConfig" }),
        __metadata("design:type", shared.AppFlowConfig)
    ], UpdateMetricSetRequestBodyMetricSource.prototype, "appFlowConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=CloudWatchConfig" }),
        __metadata("design:type", shared.CloudWatchConfig)
    ], UpdateMetricSetRequestBodyMetricSource.prototype, "cloudWatchConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=RDSSourceConfig" }),
        __metadata("design:type", shared.RdsSourceConfig)
    ], UpdateMetricSetRequestBodyMetricSource.prototype, "rdsSourceConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=RedshiftSourceConfig" }),
        __metadata("design:type", shared.RedshiftSourceConfig)
    ], UpdateMetricSetRequestBodyMetricSource.prototype, "redshiftSourceConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=S3SourceConfig" }),
        __metadata("design:type", shared.S3SourceConfig)
    ], UpdateMetricSetRequestBodyMetricSource.prototype, "s3SourceConfig", void 0);
    return UpdateMetricSetRequestBodyMetricSource;
}(SpeakeasyBase));
export { UpdateMetricSetRequestBodyMetricSource };
// UpdateMetricSetRequestBodyTimestampColumn
/**
 * Contains information about the column used to track time in a source data file.
**/
var UpdateMetricSetRequestBodyTimestampColumn = /** @class */ (function (_super) {
    __extends(UpdateMetricSetRequestBodyTimestampColumn, _super);
    function UpdateMetricSetRequestBodyTimestampColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ColumnFormat" }),
        __metadata("design:type", String)
    ], UpdateMetricSetRequestBodyTimestampColumn.prototype, "columnFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=ColumnName" }),
        __metadata("design:type", String)
    ], UpdateMetricSetRequestBodyTimestampColumn.prototype, "columnName", void 0);
    return UpdateMetricSetRequestBodyTimestampColumn;
}(SpeakeasyBase));
export { UpdateMetricSetRequestBodyTimestampColumn };
var UpdateMetricSetRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMetricSetRequestBody, _super);
    function UpdateMetricSetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DimensionList" }),
        __metadata("design:type", Array)
    ], UpdateMetricSetRequestBody.prototype, "dimensionList", void 0);
    __decorate([
        Metadata({ data: "json, name=MetricList", elemType: shared.Metric }),
        __metadata("design:type", Array)
    ], UpdateMetricSetRequestBody.prototype, "metricList", void 0);
    __decorate([
        Metadata({ data: "json, name=MetricSetArn" }),
        __metadata("design:type", String)
    ], UpdateMetricSetRequestBody.prototype, "metricSetArn", void 0);
    __decorate([
        Metadata({ data: "json, name=MetricSetDescription" }),
        __metadata("design:type", String)
    ], UpdateMetricSetRequestBody.prototype, "metricSetDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=MetricSetFrequency" }),
        __metadata("design:type", String)
    ], UpdateMetricSetRequestBody.prototype, "metricSetFrequency", void 0);
    __decorate([
        Metadata({ data: "json, name=MetricSource" }),
        __metadata("design:type", UpdateMetricSetRequestBodyMetricSource)
    ], UpdateMetricSetRequestBody.prototype, "metricSource", void 0);
    __decorate([
        Metadata({ data: "json, name=Offset" }),
        __metadata("design:type", Number)
    ], UpdateMetricSetRequestBody.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "json, name=TimestampColumn" }),
        __metadata("design:type", UpdateMetricSetRequestBodyTimestampColumn)
    ], UpdateMetricSetRequestBody.prototype, "timestampColumn", void 0);
    return UpdateMetricSetRequestBody;
}(SpeakeasyBase));
export { UpdateMetricSetRequestBody };
var UpdateMetricSetRequest = /** @class */ (function (_super) {
    __extends(UpdateMetricSetRequest, _super);
    function UpdateMetricSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateMetricSetHeaders)
    ], UpdateMetricSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMetricSetRequestBody)
    ], UpdateMetricSetRequest.prototype, "request", void 0);
    return UpdateMetricSetRequest;
}(SpeakeasyBase));
export { UpdateMetricSetRequest };
var UpdateMetricSetResponse = /** @class */ (function (_super) {
    __extends(UpdateMetricSetResponse, _super);
    function UpdateMetricSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMetricSetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateMetricSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMetricSetResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMetricSetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateMetricSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMetricSetResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateMetricSetResponse)
    ], UpdateMetricSetResponse.prototype, "updateMetricSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMetricSetResponse.prototype, "validationException", void 0);
    return UpdateMetricSetResponse;
}(SpeakeasyBase));
export { UpdateMetricSetResponse };
