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
import { CompilationJobStatusEnum } from "./compilationjobstatusenum";
import { InputConfig } from "./inputconfig";
import { ModelArtifacts } from "./modelartifacts";
import { ModelDigests } from "./modeldigests";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { NeoVpcConfig } from "./neovpcconfig";
var DescribeCompilationJobResponse = /** @class */ (function (_super) {
    __extends(DescribeCompilationJobResponse, _super);
    function DescribeCompilationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompilationEndTime" }),
        __metadata("design:type", Date)
    ], DescribeCompilationJobResponse.prototype, "compilationEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompilationJobArn" }),
        __metadata("design:type", String)
    ], DescribeCompilationJobResponse.prototype, "compilationJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompilationJobName" }),
        __metadata("design:type", String)
    ], DescribeCompilationJobResponse.prototype, "compilationJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompilationJobStatus" }),
        __metadata("design:type", String)
    ], DescribeCompilationJobResponse.prototype, "compilationJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompilationStartTime" }),
        __metadata("design:type", Date)
    ], DescribeCompilationJobResponse.prototype, "compilationStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeCompilationJobResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribeCompilationJobResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InferenceImage" }),
        __metadata("design:type", String)
    ], DescribeCompilationJobResponse.prototype, "inferenceImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputConfig" }),
        __metadata("design:type", InputConfig)
    ], DescribeCompilationJobResponse.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribeCompilationJobResponse.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelArtifacts" }),
        __metadata("design:type", ModelArtifacts)
    ], DescribeCompilationJobResponse.prototype, "modelArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelDigests" }),
        __metadata("design:type", ModelDigests)
    ], DescribeCompilationJobResponse.prototype, "modelDigests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputConfig" }),
        __metadata("design:type", OutputConfig)
    ], DescribeCompilationJobResponse.prototype, "outputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeCompilationJobResponse.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", StoppingCondition)
    ], DescribeCompilationJobResponse.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", NeoVpcConfig)
    ], DescribeCompilationJobResponse.prototype, "vpcConfig", void 0);
    return DescribeCompilationJobResponse;
}(SpeakeasyBase));
export { DescribeCompilationJobResponse };
