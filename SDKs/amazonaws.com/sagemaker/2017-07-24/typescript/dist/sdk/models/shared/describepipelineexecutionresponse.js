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
import { UserContext } from "./usercontext";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";
var DescribePipelineExecutionResponse = /** @class */ (function (_super) {
    __extends(DescribePipelineExecutionResponse, _super);
    function DescribePipelineExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", UserContext)
    ], DescribePipelineExecutionResponse.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribePipelineExecutionResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribePipelineExecutionResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedBy" }),
        __metadata("design:type", UserContext)
    ], DescribePipelineExecutionResponse.prototype, "lastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribePipelineExecutionResponse.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineArn" }),
        __metadata("design:type", String)
    ], DescribePipelineExecutionResponse.prototype, "pipelineArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" }),
        __metadata("design:type", String)
    ], DescribePipelineExecutionResponse.prototype, "pipelineExecutionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineExecutionDescription" }),
        __metadata("design:type", String)
    ], DescribePipelineExecutionResponse.prototype, "pipelineExecutionDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineExecutionDisplayName" }),
        __metadata("design:type", String)
    ], DescribePipelineExecutionResponse.prototype, "pipelineExecutionDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineExecutionStatus" }),
        __metadata("design:type", String)
    ], DescribePipelineExecutionResponse.prototype, "pipelineExecutionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineExperimentConfig" }),
        __metadata("design:type", PipelineExperimentConfig)
    ], DescribePipelineExecutionResponse.prototype, "pipelineExperimentConfig", void 0);
    return DescribePipelineExecutionResponse;
}(SpeakeasyBase));
export { DescribePipelineExecutionResponse };
