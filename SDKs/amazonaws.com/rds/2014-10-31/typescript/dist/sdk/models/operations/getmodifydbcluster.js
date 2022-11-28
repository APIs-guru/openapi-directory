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
export var GetModifyDbClusterActionEnum;
(function (GetModifyDbClusterActionEnum) {
    GetModifyDbClusterActionEnum["ModifyDbCluster"] = "ModifyDBCluster";
})(GetModifyDbClusterActionEnum || (GetModifyDbClusterActionEnum = {}));
// GetModifyDbClusterCloudwatchLogsExportConfiguration
/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.</p> <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
var GetModifyDbClusterCloudwatchLogsExportConfiguration = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterCloudwatchLogsExportConfiguration, _super);
    function GetModifyDbClusterCloudwatchLogsExportConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=DisableLogTypes" }),
        __metadata("design:type", Array)
    ], GetModifyDbClusterCloudwatchLogsExportConfiguration.prototype, "disableLogTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=EnableLogTypes" }),
        __metadata("design:type", Array)
    ], GetModifyDbClusterCloudwatchLogsExportConfiguration.prototype, "enableLogTypes", void 0);
    return GetModifyDbClusterCloudwatchLogsExportConfiguration;
}(SpeakeasyBase));
export { GetModifyDbClusterCloudwatchLogsExportConfiguration };
// GetModifyDbClusterScalingConfiguration
/**
 * <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
var GetModifyDbClusterScalingConfiguration = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterScalingConfiguration, _super);
    function GetModifyDbClusterScalingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=AutoPause" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterScalingConfiguration.prototype, "autoPause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=MaxCapacity" }),
        __metadata("design:type", Number)
    ], GetModifyDbClusterScalingConfiguration.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=MinCapacity" }),
        __metadata("design:type", Number)
    ], GetModifyDbClusterScalingConfiguration.prototype, "minCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=SecondsBeforeTimeout" }),
        __metadata("design:type", Number)
    ], GetModifyDbClusterScalingConfiguration.prototype, "secondsBeforeTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=SecondsUntilAutoPause" }),
        __metadata("design:type", Number)
    ], GetModifyDbClusterScalingConfiguration.prototype, "secondsUntilAutoPause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=TimeoutAction" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterScalingConfiguration.prototype, "timeoutAction", void 0);
    return GetModifyDbClusterScalingConfiguration;
}(SpeakeasyBase));
export { GetModifyDbClusterScalingConfiguration };
export var GetModifyDbClusterVersionEnum;
(function (GetModifyDbClusterVersionEnum) {
    GetModifyDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyDbClusterVersionEnum || (GetModifyDbClusterVersionEnum = {}));
var GetModifyDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterQueryParams, _super);
    function GetModifyDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowMajorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterQueryParams.prototype, "allowMajorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterQueryParams.prototype, "applyImmediately", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BacktrackWindow" }),
        __metadata("design:type", Number)
    ], GetModifyDbClusterQueryParams.prototype, "backtrackWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetModifyDbClusterQueryParams.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CloudwatchLogsExportConfiguration" }),
        __metadata("design:type", GetModifyDbClusterCloudwatchLogsExportConfiguration)
    ], GetModifyDbClusterQueryParams.prototype, "cloudwatchLogsExportConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CopyTagsToSnapshot" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterQueryParams.prototype, "copyTagsToSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterParameterGroupName" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "dbClusterParameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceParameterGroupName" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "dbInstanceParameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterQueryParams.prototype, "deletionProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Domain" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainIAMRoleName" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "domainIamRoleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableGlobalWriteForwarding" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterQueryParams.prototype, "enableGlobalWriteForwarding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableHttpEndpoint" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterQueryParams.prototype, "enableHttpEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableIAMDatabaseAuthentication" }),
        __metadata("design:type", Boolean)
    ], GetModifyDbClusterQueryParams.prototype, "enableIamDatabaseAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "masterUserPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewDBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "newDbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" }),
        __metadata("design:type", Number)
    ], GetModifyDbClusterQueryParams.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "preferredBackupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScalingConfiguration" }),
        __metadata("design:type", GetModifyDbClusterScalingConfiguration)
    ], GetModifyDbClusterQueryParams.prototype, "scalingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], GetModifyDbClusterQueryParams.prototype, "vpcSecurityGroupIds", void 0);
    return GetModifyDbClusterQueryParams;
}(SpeakeasyBase));
export { GetModifyDbClusterQueryParams };
var GetModifyDbClusterHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterHeaders, _super);
    function GetModifyDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDbClusterHeaders;
}(SpeakeasyBase));
export { GetModifyDbClusterHeaders };
var GetModifyDbClusterRequest = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterRequest, _super);
    function GetModifyDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbClusterQueryParams)
    ], GetModifyDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbClusterHeaders)
    ], GetModifyDbClusterRequest.prototype, "headers", void 0);
    return GetModifyDbClusterRequest;
}(SpeakeasyBase));
export { GetModifyDbClusterRequest };
var GetModifyDbClusterResponse = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterResponse, _super);
    function GetModifyDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDbClusterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyDbClusterResponse.prototype, "statusCode", void 0);
    return GetModifyDbClusterResponse;
}(SpeakeasyBase));
export { GetModifyDbClusterResponse };
