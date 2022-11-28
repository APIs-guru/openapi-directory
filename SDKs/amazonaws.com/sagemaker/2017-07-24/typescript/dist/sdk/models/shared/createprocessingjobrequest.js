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
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";
import { Tag } from "./tag";
var CreateProcessingJobRequest = /** @class */ (function (_super) {
    __extends(CreateProcessingJobRequest, _super);
    function CreateProcessingJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppSpecification" }),
        __metadata("design:type", AppSpecification)
    ], CreateProcessingJobRequest.prototype, "appSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", Map)
    ], CreateProcessingJobRequest.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExperimentConfig" }),
        __metadata("design:type", ExperimentConfig)
    ], CreateProcessingJobRequest.prototype, "experimentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], CreateProcessingJobRequest.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingInputs", elemType: ProcessingInput }),
        __metadata("design:type", Array)
    ], CreateProcessingJobRequest.prototype, "processingInputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingJobName" }),
        __metadata("design:type", String)
    ], CreateProcessingJobRequest.prototype, "processingJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingOutputConfig" }),
        __metadata("design:type", ProcessingOutputConfig)
    ], CreateProcessingJobRequest.prototype, "processingOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingResources" }),
        __metadata("design:type", ProcessingResources)
    ], CreateProcessingJobRequest.prototype, "processingResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateProcessingJobRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", ProcessingStoppingCondition)
    ], CreateProcessingJobRequest.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateProcessingJobRequest.prototype, "tags", void 0);
    return CreateProcessingJobRequest;
}(SpeakeasyBase));
export { CreateProcessingJobRequest };
