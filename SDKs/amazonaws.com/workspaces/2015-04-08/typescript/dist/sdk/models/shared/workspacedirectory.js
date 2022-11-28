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
import { WorkspaceDirectoryTypeEnum } from "./workspacedirectorytypeenum";
import { SelfservicePermissions } from "./selfservicepermissions";
import { WorkspaceDirectoryStateEnum } from "./workspacedirectorystateenum";
import { TenancyEnum } from "./tenancyenum";
import { WorkspaceAccessProperties } from "./workspaceaccessproperties";
import { DefaultWorkspaceCreationProperties } from "./defaultworkspacecreationproperties";
// WorkspaceDirectory
/**
 * Describes a directory that is used with Amazon WorkSpaces.
**/
var WorkspaceDirectory = /** @class */ (function (_super) {
    __extends(WorkspaceDirectory, _super);
    function WorkspaceDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Alias" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerUserName" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "customerUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryId" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "directoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryName" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "directoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryType" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "directoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsIpAddresses" }),
        __metadata("design:type", Array)
    ], WorkspaceDirectory.prototype, "dnsIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamRoleId" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "iamRoleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrationCode" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "registrationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SelfservicePermissions" }),
        __metadata("design:type", SelfservicePermissions)
    ], WorkspaceDirectory.prototype, "selfservicePermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], WorkspaceDirectory.prototype, "subnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tenancy" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "tenancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkspaceAccessProperties" }),
        __metadata("design:type", WorkspaceAccessProperties)
    ], WorkspaceDirectory.prototype, "workspaceAccessProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkspaceCreationProperties" }),
        __metadata("design:type", DefaultWorkspaceCreationProperties)
    ], WorkspaceDirectory.prototype, "workspaceCreationProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkspaceSecurityGroupId" }),
        __metadata("design:type", String)
    ], WorkspaceDirectory.prototype, "workspaceSecurityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipGroupIds" }),
        __metadata("design:type", Array)
    ], WorkspaceDirectory.prototype, "ipGroupIds", void 0);
    return WorkspaceDirectory;
}(SpeakeasyBase));
export { WorkspaceDirectory };
