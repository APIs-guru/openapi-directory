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
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";
var CreateTransformJobRequest = /** @class */ (function (_super) {
    __extends(CreateTransformJobRequest, _super);
    function CreateTransformJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchStrategy" }),
        __metadata("design:type", String)
    ], CreateTransformJobRequest.prototype, "batchStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataProcessing" }),
        __metadata("design:type", DataProcessing)
    ], CreateTransformJobRequest.prototype, "dataProcessing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", Map)
    ], CreateTransformJobRequest.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExperimentConfig" }),
        __metadata("design:type", ExperimentConfig)
    ], CreateTransformJobRequest.prototype, "experimentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrentTransforms" }),
        __metadata("design:type", Number)
    ], CreateTransformJobRequest.prototype, "maxConcurrentTransforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxPayloadInMB" }),
        __metadata("design:type", Number)
    ], CreateTransformJobRequest.prototype, "maxPayloadInMb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelClientConfig" }),
        __metadata("design:type", ModelClientConfig)
    ], CreateTransformJobRequest.prototype, "modelClientConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelName" }),
        __metadata("design:type", String)
    ], CreateTransformJobRequest.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateTransformJobRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformInput" }),
        __metadata("design:type", TransformInput)
    ], CreateTransformJobRequest.prototype, "transformInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformJobName" }),
        __metadata("design:type", String)
    ], CreateTransformJobRequest.prototype, "transformJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformOutput" }),
        __metadata("design:type", TransformOutput)
    ], CreateTransformJobRequest.prototype, "transformOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformResources" }),
        __metadata("design:type", TransformResources)
    ], CreateTransformJobRequest.prototype, "transformResources", void 0);
    return CreateTransformJobRequest;
}(SpeakeasyBase));
export { CreateTransformJobRequest };
