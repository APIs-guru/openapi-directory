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
import { BatchInferenceJobConfig } from "./batchinferencejobconfig";
import { BatchInferenceJobInput } from "./batchinferencejobinput";
import { BatchInferenceJobOutput } from "./batchinferencejoboutput";
var CreateBatchInferenceJobRequest = /** @class */ (function (_super) {
    __extends(CreateBatchInferenceJobRequest, _super);
    function CreateBatchInferenceJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchInferenceJobConfig" }),
        __metadata("design:type", BatchInferenceJobConfig)
    ], CreateBatchInferenceJobRequest.prototype, "batchInferenceJobConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterArn" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobRequest.prototype, "filterArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobInput" }),
        __metadata("design:type", BatchInferenceJobInput)
    ], CreateBatchInferenceJobRequest.prototype, "jobInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobName" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobRequest.prototype, "jobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobOutput" }),
        __metadata("design:type", BatchInferenceJobOutput)
    ], CreateBatchInferenceJobRequest.prototype, "jobOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numResults" }),
        __metadata("design:type", Number)
    ], CreateBatchInferenceJobRequest.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionVersionArn" }),
        __metadata("design:type", String)
    ], CreateBatchInferenceJobRequest.prototype, "solutionVersionArn", void 0);
    return CreateBatchInferenceJobRequest;
}(SpeakeasyBase));
export { CreateBatchInferenceJobRequest };
