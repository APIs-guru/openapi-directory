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
import { AwsRdsDbInstanceAssociatedRole } from "./awsrdsdbinstanceassociatedrole";
import { AwsRdsDbParameterGroup } from "./awsrdsdbparametergroup";
import { AwsRdsDbSubnetGroup } from "./awsrdsdbsubnetgroup";
import { AwsRdsDbDomainMembership } from "./awsrdsdbdomainmembership";
import { AwsRdsDbInstanceEndpoint } from "./awsrdsdbinstanceendpoint";
import { AwsRdsDbOptionGroupMembership } from "./awsrdsdboptiongroupmembership";
import { AwsRdsDbPendingModifiedValues } from "./awsrdsdbpendingmodifiedvalues";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
import { AwsRdsDbStatusInfo } from "./awsrdsdbstatusinfo";
import { AwsRdsDbInstanceVpcSecurityGroup } from "./awsrdsdbinstancevpcsecuritygroup";
// AwsRdsDbInstanceDetails
/**
 * Contains the details of an Amazon RDS DB instance.
**/
var AwsRdsDbInstanceDetails = /** @class */ (function (_super) {
    __extends(AwsRdsDbInstanceDetails, _super);
    function AwsRdsDbInstanceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociatedRoles", elemType: AwsRdsDbInstanceAssociatedRole }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "associatedRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CACertificateIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "caCertificateIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CharacterSetName" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "characterSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyTagsToSnapshot" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "copyTagsToSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DBName" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "dbName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbInstancePort" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "dbInstancePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbInstanceStatus" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "dbInstanceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbParameterGroups", elemType: AwsRdsDbParameterGroup }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "dbParameterGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbSecurityGroups" }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "dbSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbSubnetGroup" }),
        __metadata("design:type", AwsRdsDbSubnetGroup)
    ], AwsRdsDbInstanceDetails.prototype, "dbSubnetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbiResourceId" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "dbiResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletionProtection" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "deletionProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainMemberships", elemType: AwsRdsDbDomainMembership }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "domainMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledCloudWatchLogsExports" }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "enabledCloudWatchLogsExports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Endpoint" }),
        __metadata("design:type", AwsRdsDbInstanceEndpoint)
    ], AwsRdsDbInstanceDetails.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnhancedMonitoringResourceArn" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "enhancedMonitoringResourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IAMDatabaseAuthenticationEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceCreateTime" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "instanceCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Iops" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestRestorableTime" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "latestRestorableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseModel" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListenerEndpoint" }),
        __metadata("design:type", AwsRdsDbInstanceEndpoint)
    ], AwsRdsDbInstanceDetails.prototype, "listenerEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterUsername" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAllocatedStorage" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "maxAllocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringInterval" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "monitoringInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringRoleArn" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "monitoringRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAz" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptionGroupMemberships", elemType: AwsRdsDbOptionGroupMembership }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "optionGroupMemberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingModifiedValues" }),
        __metadata("design:type", AwsRdsDbPendingModifiedValues)
    ], AwsRdsDbInstanceDetails.prototype, "pendingModifiedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerformanceInsightsEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "performanceInsightsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerformanceInsightsKmsKeyId" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "performanceInsightsKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerformanceInsightsRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "performanceInsightsRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "preferredBackupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessorFeatures", elemType: AwsRdsDbProcessorFeature }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "processorFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionTier" }),
        __metadata("design:type", Number)
    ], AwsRdsDbInstanceDetails.prototype, "promotionTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadReplicaDBClusterIdentifiers" }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "readReplicaDbClusterIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadReplicaDBInstanceIdentifiers" }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "readReplicaDbInstanceIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadReplicaSourceDBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "readReplicaSourceDbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryAvailabilityZone" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "secondaryAvailabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusInfos", elemType: AwsRdsDbStatusInfo }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "statusInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageEncrypted" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbInstanceDetails.prototype, "storageEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageType" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TdeCredentialArn" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "tdeCredentialArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timezone" }),
        __metadata("design:type", String)
    ], AwsRdsDbInstanceDetails.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: AwsRdsDbInstanceVpcSecurityGroup }),
        __metadata("design:type", Array)
    ], AwsRdsDbInstanceDetails.prototype, "vpcSecurityGroups", void 0);
    return AwsRdsDbInstanceDetails;
}(SpeakeasyBase));
export { AwsRdsDbInstanceDetails };
