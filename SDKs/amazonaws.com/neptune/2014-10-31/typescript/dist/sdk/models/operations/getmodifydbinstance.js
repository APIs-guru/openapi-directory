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
export var GetModifyDbInstanceActionEnum;
(function (GetModifyDbInstanceActionEnum) {
    GetModifyDbInstanceActionEnum["ModifyDbInstance"] = "ModifyDBInstance";
})(GetModifyDbInstanceActionEnum || (GetModifyDbInstanceActionEnum = {}));
// GetModifyDbInstanceCloudwatchLogsExportConfiguration
/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
**/
var GetModifyDbInstanceCloudwatchLogsExportConfiguration = /** @class */ (function (_super) {
    __extends(GetModifyDbInstanceCloudwatchLogsExportConfiguration, _super);
    function GetModifyDbInstanceCloudwatchLogsExportConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=DisableLogTypes" }),
        __metadata("design:type", Array)
    ], GetModifyDbInstanceCloudwatchLogsExportConfiguration.prototype, "disableLogTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=EnableLogTypes" }),
        __metadata("design:type", Array)
    ], GetModifyDbInstanceCloudwatchLogsExportConfiguration.prototype, "enableLogTypes", void 0);
    return GetModifyDbInstanceCloudwatchLogsExportConfiguration;
}(SpeakeasyBase));
export { GetModifyDbInstanceCloudwatchLogsExportConfiguration };
export var GetModifyDbInstanceVersionEnum;
(function (GetModifyDbInstanceVersionEnum) {
    GetModifyDbInstanceVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyDbInstanceVersionEnum || (GetModifyDbInstanceVersionEnum = {}));
var GetModifyDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDbInstanceQueryParams, _super);
    function GetModifyDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], GetModifyDbInstanceQueryParams.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowMajorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "allowMajorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "applyImmediately", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetModifyDbInstanceQueryParams.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CACertificateIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "caCertificateIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CloudwatchLogsExportConfiguration" }),
        __metadata("design:type", GetModifyDbInstanceCloudwatchLogsExportConfiguration)
    ], GetModifyDbInstanceQueryParams.prototype, "cloudwatchLogsExportConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CopyTagsToSnapshot" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "copyTagsToSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "dbParameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBPortNumber" }),
        __metadata("design:type", Number)
    ], GetModifyDbInstanceQueryParams.prototype, "dbPortNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroups" }),
        __metadata("design:type", Array)
    ], GetModifyDbInstanceQueryParams.prototype, "dbSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "dbSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "deletionProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Domain" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainIAMRoleName" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "domainIamRoleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableIAMDatabaseAuthentication" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "enableIamDatabaseAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnablePerformanceInsights" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "enablePerformanceInsights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iops" }),
        __metadata("design:type", Number)
    ], GetModifyDbInstanceQueryParams.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "masterUserPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MonitoringInterval" }),
        __metadata("design:type", Number)
    ], GetModifyDbInstanceQueryParams.prototype, "monitoringInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MonitoringRoleArn" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "monitoringRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewDBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "newDbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PerformanceInsightsKMSKeyId" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "performanceInsightsKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "preferredBackupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PromotionTier" }),
        __metadata("design:type", Number)
    ], GetModifyDbInstanceQueryParams.prototype, "promotionTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbInstanceQueryParams.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StorageType" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TdeCredentialArn" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "tdeCredentialArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TdeCredentialPassword" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "tdeCredentialPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], GetModifyDbInstanceQueryParams.prototype, "vpcSecurityGroupIds", void 0);
    return GetModifyDbInstanceQueryParams;
}(SpeakeasyBase));
export { GetModifyDbInstanceQueryParams };
var GetModifyDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDbInstanceHeaders, _super);
    function GetModifyDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDbInstanceHeaders;
}(SpeakeasyBase));
export { GetModifyDbInstanceHeaders };
var GetModifyDbInstanceRequest = /** @class */ (function (_super) {
    __extends(GetModifyDbInstanceRequest, _super);
    function GetModifyDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbInstanceQueryParams)
    ], GetModifyDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbInstanceHeaders)
    ], GetModifyDbInstanceRequest.prototype, "headers", void 0);
    return GetModifyDbInstanceRequest;
}(SpeakeasyBase));
export { GetModifyDbInstanceRequest };
var GetModifyDbInstanceResponse = /** @class */ (function (_super) {
    __extends(GetModifyDbInstanceResponse, _super);
    function GetModifyDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyDbInstanceResponse.prototype, "statusCode", void 0);
    return GetModifyDbInstanceResponse;
}(SpeakeasyBase));
export { GetModifyDbInstanceResponse };
