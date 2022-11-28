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
import { RootAccessEnum } from "./rootaccessenum";
import { Tag } from "./tag";
var CreateNotebookInstanceInput = /** @class */ (function (_super) {
    __extends(CreateNotebookInstanceInput, _super);
    function CreateNotebookInstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceleratorTypes" }),
        __metadata("design:type", Array)
    ], CreateNotebookInstanceInput.prototype, "acceleratorTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositories" }),
        __metadata("design:type", Array)
    ], CreateNotebookInstanceInput.prototype, "additionalCodeRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultCodeRepository" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "defaultCodeRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectInternetAccess" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "directInternetAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LifecycleConfigName" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "lifecycleConfigName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "notebookInstanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformIdentifier" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "platformIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootAccess" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "rootAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateNotebookInstanceInput.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], CreateNotebookInstanceInput.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateNotebookInstanceInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" }),
        __metadata("design:type", Number)
    ], CreateNotebookInstanceInput.prototype, "volumeSizeInGb", void 0);
    return CreateNotebookInstanceInput;
}(SpeakeasyBase));
export { CreateNotebookInstanceInput };
