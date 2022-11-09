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
import { DeadLetterConfig } from "./deadletterconfig";
import { EnvironmentResponse } from "./environmentresponse";
import { ImageConfigResponse } from "./imageconfigresponse";
import { LastUpdateStatusEnum } from "./lastupdatestatusenum";
import { LastUpdateStatusReasonCodeEnum } from "./lastupdatestatusreasoncodeenum";
import { PackageTypeEnum } from "./packagetypeenum";
import { RuntimeEnum } from "./runtimeenum";
import { StateEnum } from "./stateenum";
import { StateReasonCodeEnum } from "./statereasoncodeenum";
import { TracingConfigResponse } from "./tracingconfigresponse";
import { VpcConfigResponse } from "./vpcconfigresponse";
// FunctionConfiguration
/**
 * Details about a function's configuration.
**/
var FunctionConfiguration = /** @class */ (function (_super) {
    __extends(FunctionConfiguration, _super);
    function FunctionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CodeSha256" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "codeSha256", void 0);
    __decorate([
        Metadata({ data: "json, name=CodeSize" }),
        __metadata("design:type", Number)
    ], FunctionConfiguration.prototype, "codeSize", void 0);
    __decorate([
        Metadata({ data: "json, name=DeadLetterConfig" }),
        __metadata("design:type", DeadLetterConfig)
    ], FunctionConfiguration.prototype, "deadLetterConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Environment" }),
        __metadata("design:type", EnvironmentResponse)
    ], FunctionConfiguration.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig }),
        __metadata("design:type", Array)
    ], FunctionConfiguration.prototype, "fileSystemConfigs", void 0);
    __decorate([
        Metadata({ data: "json, name=FunctionArn" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "functionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "functionName", void 0);
    __decorate([
        Metadata({ data: "json, name=Handler" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "handler", void 0);
    __decorate([
        Metadata({ data: "json, name=ImageConfigResponse" }),
        __metadata("design:type", ImageConfigResponse)
    ], FunctionConfiguration.prototype, "imageConfigResponse", void 0);
    __decorate([
        Metadata({ data: "json, name=KMSKeyArn" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "kmsKeyArn", void 0);
    __decorate([
        Metadata({ data: "json, name=LastModified" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "lastModified", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdateStatus" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "lastUpdateStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdateStatusReason" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "lastUpdateStatusReason", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdateStatusReasonCode" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "lastUpdateStatusReasonCode", void 0);
    __decorate([
        Metadata({ data: "json, name=Layers", elemType: shared.Layer }),
        __metadata("design:type", Array)
    ], FunctionConfiguration.prototype, "layers", void 0);
    __decorate([
        Metadata({ data: "json, name=MasterArn" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "masterArn", void 0);
    __decorate([
        Metadata({ data: "json, name=MemorySize" }),
        __metadata("design:type", Number)
    ], FunctionConfiguration.prototype, "memorySize", void 0);
    __decorate([
        Metadata({ data: "json, name=PackageType" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "packageType", void 0);
    __decorate([
        Metadata({ data: "json, name=RevisionId" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "revisionId", void 0);
    __decorate([
        Metadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "json, name=Runtime" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "runtime", void 0);
    __decorate([
        Metadata({ data: "json, name=SigningJobArn" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "signingJobArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SigningProfileVersionArn" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "signingProfileVersionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=StateReason" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "stateReason", void 0);
    __decorate([
        Metadata({ data: "json, name=StateReasonCode" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "stateReasonCode", void 0);
    __decorate([
        Metadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], FunctionConfiguration.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=TracingConfig" }),
        __metadata("design:type", TracingConfigResponse)
    ], FunctionConfiguration.prototype, "tracingConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfigResponse)
    ], FunctionConfiguration.prototype, "vpcConfig", void 0);
    return FunctionConfiguration;
}(SpeakeasyBase));
export { FunctionConfiguration };
