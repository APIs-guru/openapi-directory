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
import { DirectInternetAccessEnum } from "./directinternetaccessenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
import { RootAccessEnum } from "./rootaccessenum";
var DescribeNotebookInstanceOutput = /** @class */ (function (_super) {
    __extends(DescribeNotebookInstanceOutput, _super);
    function DescribeNotebookInstanceOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceleratorTypes" }),
        __metadata("design:type", Array)
    ], DescribeNotebookInstanceOutput.prototype, "acceleratorTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositories" }),
        __metadata("design:type", Array)
    ], DescribeNotebookInstanceOutput.prototype, "additionalCodeRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeNotebookInstanceOutput.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultCodeRepository" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "defaultCodeRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectInternetAccess" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "directInternetAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribeNotebookInstanceOutput.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceArn" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "notebookInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "notebookInstanceLifecycleConfigName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "notebookInstanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceStatus" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "notebookInstanceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformIdentifier" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "platformIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootAccess" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "rootAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], DescribeNotebookInstanceOutput.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Url" }),
        __metadata("design:type", String)
    ], DescribeNotebookInstanceOutput.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" }),
        __metadata("design:type", Number)
    ], DescribeNotebookInstanceOutput.prototype, "volumeSizeInGb", void 0);
    return DescribeNotebookInstanceOutput;
}(SpeakeasyBase));
export { DescribeNotebookInstanceOutput };
