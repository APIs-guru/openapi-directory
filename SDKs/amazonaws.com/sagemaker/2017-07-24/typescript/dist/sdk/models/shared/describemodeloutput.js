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
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { VpcConfig } from "./vpcconfig";
var DescribeModelOutput = /** @class */ (function (_super) {
    __extends(DescribeModelOutput, _super);
    function DescribeModelOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Containers", elemType: ContainerDefinition }),
        __metadata("design:type", Array)
    ], DescribeModelOutput.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeModelOutput.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" }),
        __metadata("design:type", Boolean)
    ], DescribeModelOutput.prototype, "enableNetworkIsolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], DescribeModelOutput.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InferenceExecutionConfig" }),
        __metadata("design:type", InferenceExecutionConfig)
    ], DescribeModelOutput.prototype, "inferenceExecutionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelArn" }),
        __metadata("design:type", String)
    ], DescribeModelOutput.prototype, "modelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelName" }),
        __metadata("design:type", String)
    ], DescribeModelOutput.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryContainer" }),
        __metadata("design:type", ContainerDefinition)
    ], DescribeModelOutput.prototype, "primaryContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], DescribeModelOutput.prototype, "vpcConfig", void 0);
    return DescribeModelOutput;
}(SpeakeasyBase));
export { DescribeModelOutput };
