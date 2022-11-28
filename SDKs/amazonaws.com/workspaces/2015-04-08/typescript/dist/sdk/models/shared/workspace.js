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
import { ModificationState } from "./modificationstate";
import { WorkspaceStateEnum } from "./workspacestateenum";
import { WorkspaceProperties } from "./workspaceproperties";
// Workspace
/**
 * Describes a WorkSpace.
**/
var Workspace = /** @class */ (function (_super) {
    __extends(Workspace, _super);
    function Workspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BundleId" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComputerName" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "computerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryId" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "directoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorCode" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorMessage" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddress" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModificationStates", elemType: ModificationState }),
        __metadata("design:type", Array)
    ], Workspace.prototype, "modificationStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootVolumeEncryptionEnabled" }),
        __metadata("design:type", Boolean)
    ], Workspace.prototype, "rootVolumeEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserName" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserVolumeEncryptionEnabled" }),
        __metadata("design:type", Boolean)
    ], Workspace.prototype, "userVolumeEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeEncryptionKey" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "volumeEncryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkspaceId" }),
        __metadata("design:type", String)
    ], Workspace.prototype, "workspaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkspaceProperties" }),
        __metadata("design:type", WorkspaceProperties)
    ], Workspace.prototype, "workspaceProperties", void 0);
    return Workspace;
}(SpeakeasyBase));
export { Workspace };
