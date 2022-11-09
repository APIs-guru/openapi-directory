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
import { BackupTypeEnum } from "./backuptypeenum";
import { BackupStatusEnum } from "./backupstatusenum";
// Backup
/**
 * Describes a single backup.
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=BackupArn" }),
        __metadata("design:type", String)
    ], Backup.prototype, "backupArn", void 0);
    __decorate([
        Metadata({ data: "json, name=BackupId" }),
        __metadata("design:type", String)
    ], Backup.prototype, "backupId", void 0);
    __decorate([
        Metadata({ data: "json, name=BackupType" }),
        __metadata("design:type", String)
    ], Backup.prototype, "backupType", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Backup.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], Backup.prototype, "engine", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineModel" }),
        __metadata("design:type", String)
    ], Backup.prototype, "engineModel", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], Backup.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=InstanceProfileArn" }),
        __metadata("design:type", String)
    ], Backup.prototype, "instanceProfileArn", void 0);
    __decorate([
        Metadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], Backup.prototype, "instanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=KeyPair" }),
        __metadata("design:type", String)
    ], Backup.prototype, "keyPair", void 0);
    __decorate([
        Metadata({ data: "json, name=PreferredBackupWindow" }),
        __metadata("design:type", String)
    ], Backup.prototype, "preferredBackupWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], Backup.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=S3DataSize" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "s3DataSize", void 0);
    __decorate([
        Metadata({ data: "json, name=S3DataUrl" }),
        __metadata("design:type", String)
    ], Backup.prototype, "s3DataUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=S3LogUrl" }),
        __metadata("design:type", String)
    ], Backup.prototype, "s3LogUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], Backup.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], Backup.prototype, "serverName", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], Backup.prototype, "serviceRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Backup.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusDescription" }),
        __metadata("design:type", String)
    ], Backup.prototype, "statusDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], Backup.prototype, "subnetIds", void 0);
    __decorate([
        Metadata({ data: "json, name=ToolsVersion" }),
        __metadata("design:type", String)
    ], Backup.prototype, "toolsVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=UserArn" }),
        __metadata("design:type", String)
    ], Backup.prototype, "userArn", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
