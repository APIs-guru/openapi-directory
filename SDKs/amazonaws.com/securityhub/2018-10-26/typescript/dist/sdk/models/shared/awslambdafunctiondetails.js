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
import { AwsLambdaFunctionCode } from "./awslambdafunctioncode";
import { AwsLambdaFunctionDeadLetterConfig } from "./awslambdafunctiondeadletterconfig";
import { AwsLambdaFunctionEnvironment } from "./awslambdafunctionenvironment";
import { AwsLambdaFunctionLayer } from "./awslambdafunctionlayer";
import { AwsLambdaFunctionTracingConfig } from "./awslambdafunctiontracingconfig";
import { AwsLambdaFunctionVpcConfig } from "./awslambdafunctionvpcconfig";
// AwsLambdaFunctionDetails
/**
 * Details about a function's configuration.
**/
var AwsLambdaFunctionDetails = /** @class */ (function (_super) {
    __extends(AwsLambdaFunctionDetails, _super);
    function AwsLambdaFunctionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", AwsLambdaFunctionCode)
    ], AwsLambdaFunctionDetails.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeSha256" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "codeSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" }),
        __metadata("design:type", AwsLambdaFunctionDeadLetterConfig)
    ], AwsLambdaFunctionDetails.prototype, "deadLetterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", AwsLambdaFunctionEnvironment)
    ], AwsLambdaFunctionDetails.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "functionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Handler" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "handler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyArn" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "kmsKeyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Layers", elemType: AwsLambdaFunctionLayer }),
        __metadata("design:type", Array)
    ], AwsLambdaFunctionDetails.prototype, "layers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterArn" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "masterArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemorySize" }),
        __metadata("design:type", Number)
    ], AwsLambdaFunctionDetails.prototype, "memorySize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RevisionId" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Runtime" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "runtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], AwsLambdaFunctionDetails.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TracingConfig" }),
        __metadata("design:type", AwsLambdaFunctionTracingConfig)
    ], AwsLambdaFunctionDetails.prototype, "tracingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], AwsLambdaFunctionDetails.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", AwsLambdaFunctionVpcConfig)
    ], AwsLambdaFunctionDetails.prototype, "vpcConfig", void 0);
    return AwsLambdaFunctionDetails;
}(SpeakeasyBase));
export { AwsLambdaFunctionDetails };
