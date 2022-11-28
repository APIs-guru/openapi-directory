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
import { AwsRdsDbClusterAssociatedRole } from "./awsrdsdbclusterassociatedrole";
import { AwsRdsDbClusterMember } from "./awsrdsdbclustermember";
import { AwsRdsDbClusterOptionGroupMembership } from "./awsrdsdbclusteroptiongroupmembership";
import { AwsRdsDbDomainMembership } from "./awsrdsdbdomainmembership";
import { AwsRdsDbInstanceVpcSecurityGroup } from "./awsrdsdbinstancevpcsecuritygroup";
// AwsRdsDbClusterDetails
/**
 * Information about an Amazon RDS DB cluster.
**/
var AwsRdsDbClusterDetails = /** @class */ (function (_super) {
    __extends(AwsRdsDbClusterDetails, _super);
    function AwsRdsDbClusterDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityStreamStatus" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "activityStreamStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], AwsRdsDbClusterDetails.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociatedRoles", elemType: AwsRdsDbClusterAssociatedRole }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "associatedRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZones" }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRdsDbClusterDetails.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterCreateTime" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "clusterCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyTagsToSnapshot" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterDetails.prototype, "copyTagsToSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CrossAccountClone" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterDetails.prototype, "crossAccountClone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomEndpoints" }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "customEndpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbClusterIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbClusterMembers", elemType: AwsRdsDbClusterMember }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "dbClusterMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbClusterOptionGroupMemberships", elemType: AwsRdsDbClusterOptionGroupMembership }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "dbClusterOptionGroupMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbClusterParameterGroup" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "dbClusterParameterGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbClusterResourceId" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "dbClusterResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbSubnetGroup" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "dbSubnetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletionProtection" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterDetails.prototype, "deletionProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainMemberships", elemType: AwsRdsDbDomainMembership }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "domainMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledCloudWatchLogsExports" }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "enabledCloudWatchLogsExports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Endpoint" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineMode" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "engineMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HostedZoneId" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "hostedZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpEndpointEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterDetails.prototype, "httpEndpointEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamDatabaseAuthenticationEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterDetails.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterUsername" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAz" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterDetails.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], AwsRdsDbClusterDetails.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "preferredBackupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadReplicaIdentifiers" }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "readReplicaIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReaderEndpoint" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "readerEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageEncrypted" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterDetails.prototype, "storageEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: AwsRdsDbInstanceVpcSecurityGroup }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterDetails.prototype, "vpcSecurityGroups", void 0);
    return AwsRdsDbClusterDetails;
}(SpeakeasyBase));
export { AwsRdsDbClusterDetails };
