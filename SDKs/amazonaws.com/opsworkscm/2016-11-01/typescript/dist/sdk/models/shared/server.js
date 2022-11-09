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
import { MaintenanceStatusEnum } from "./maintenancestatusenum";
import { ServerStatusEnum } from "./serverstatusenum";
// Server
/**
 * Describes a configuration management server.
**/
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AssociatePublicIpAddress" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "associatePublicIpAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=BackupRetentionCount" }),
        __metadata("design:type", Number)
    ], Server.prototype, "backupRetentionCount", void 0);
    __decorate([
        Metadata({ data: "json, name=CloudFormationStackArn" }),
        __metadata("design:type", String)
    ], Server.prototype, "cloudFormationStackArn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], Server.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=CustomDomain" }),
        __metadata("design:type", String)
    ], Server.prototype, "customDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=DisableAutomatedBackup" }),
        __metadata("design:type", Boolean)
    ], Server.prototype, "disableAutomatedBackup", void 0);
    __decorate([
        Metadata({ data: "json, name=Endpoint" }),
        __metadata("design:type", String)
    ], Server.prototype, "endpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], Server.prototype, "engine", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineAttributes", elemType: shared.EngineAttribute }),
        __metadata("design:type", Array)
    ], Server.prototype, "engineAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineModel" }),
        __metadata("design:type", String)
    ], Server.prototype, "engineModel", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], Server.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=InstanceProfileArn" }),
        __metadata("design:type", String)
    ], Server.prototype, "instanceProfileArn", void 0);
    __decorate([
        Metadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], Server.prototype, "instanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=KeyPair" }),
        __metadata("design:type", String)
    ], Server.prototype, "keyPair", void 0);
    __decorate([
        Metadata({ data: "json, name=MaintenanceStatus" }),
        __metadata("design:type", String)
    ], Server.prototype, "maintenanceStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=PreferredBackupWindow" }),
        __metadata("design:type", String)
    ], Server.prototype, "preferredBackupWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], Server.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], Server.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerArn" }),
        __metadata("design:type", String)
    ], Server.prototype, "serverArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], Server.prototype, "serverName", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], Server.prototype, "serviceRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Server.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusReason" }),
        __metadata("design:type", String)
    ], Server.prototype, "statusReason", void 0);
    __decorate([
        Metadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], Server.prototype, "subnetIds", void 0);
    return Server;
}(SpeakeasyBase));
export { Server };
