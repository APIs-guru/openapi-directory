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
import { DataPreProcessingConfiguration } from "./datapreprocessingconfiguration";
import { LabelsInputConfiguration } from "./labelsinputconfiguration";
import { ModelStatusEnum } from "./modelstatusenum";
var DescribeModelResponse = /** @class */ (function (_super) {
    __extends(DescribeModelResponse, _super);
    function DescribeModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataPreProcessingConfiguration" }),
        __metadata("design:type", DataPreProcessingConfiguration)
    ], DescribeModelResponse.prototype, "dataPreProcessingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatasetArn" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "datasetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatasetName" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "datasetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationDataEndTime" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "evaluationDataEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationDataStartTime" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "evaluationDataStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailedReason" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "failedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelsInputConfiguration" }),
        __metadata("design:type", LabelsInputConfiguration)
    ], DescribeModelResponse.prototype, "labelsInputConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "lastUpdatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelArn" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "modelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelMetrics" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "modelMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelName" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OffCondition" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "offCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schema" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerSideKmsKeyId" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "serverSideKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribeModelResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingDataEndTime" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "trainingDataEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingDataStartTime" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "trainingDataStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingExecutionEndTime" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "trainingExecutionEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingExecutionStartTime" }),
        __metadata("design:type", Date)
    ], DescribeModelResponse.prototype, "trainingExecutionStartTime", void 0);
    return DescribeModelResponse;
}(SpeakeasyBase));
export { DescribeModelResponse };
