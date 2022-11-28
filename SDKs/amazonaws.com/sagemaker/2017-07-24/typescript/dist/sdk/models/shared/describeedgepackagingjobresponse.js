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
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { EdgePresetDeploymentOutput } from "./edgepresetdeploymentoutput";
var DescribeEdgePackagingJobResponse = /** @class */ (function (_super) {
    __extends(DescribeEdgePackagingJobResponse, _super);
    function DescribeEdgePackagingJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompilationJobName" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "compilationJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeEdgePackagingJobResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EdgePackagingJobArn" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "edgePackagingJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EdgePackagingJobName" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "edgePackagingJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EdgePackagingJobStatus" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "edgePackagingJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EdgePackagingJobStatusMessage" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "edgePackagingJobStatusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribeEdgePackagingJobResponse.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelArtifact" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "modelArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelName" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelSignature" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "modelSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelVersion" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "modelVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputConfig" }),
        __metadata("design:type", EdgeOutputConfig)
    ], DescribeEdgePackagingJobResponse.prototype, "outputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PresetDeploymentOutput" }),
        __metadata("design:type", EdgePresetDeploymentOutput)
    ], DescribeEdgePackagingJobResponse.prototype, "presetDeploymentOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceKey" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeEdgePackagingJobResponse.prototype, "roleArn", void 0);
    return DescribeEdgePackagingJobResponse;
}(SpeakeasyBase));
export { DescribeEdgePackagingJobResponse };
