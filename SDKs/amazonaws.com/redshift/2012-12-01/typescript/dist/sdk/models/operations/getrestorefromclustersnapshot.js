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
export var GetRestoreFromClusterSnapshotActionEnum;
(function (GetRestoreFromClusterSnapshotActionEnum) {
    GetRestoreFromClusterSnapshotActionEnum["RestoreFromClusterSnapshot"] = "RestoreFromClusterSnapshot";
})(GetRestoreFromClusterSnapshotActionEnum || (GetRestoreFromClusterSnapshotActionEnum = {}));
export var GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum;
(function (GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum) {
    GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum["Enabled"] = "enabled";
    GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum["Disabled"] = "disabled";
    GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum["Auto"] = "auto";
})(GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum || (GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum = {}));
export var GetRestoreFromClusterSnapshotVersionEnum;
(function (GetRestoreFromClusterSnapshotVersionEnum) {
    GetRestoreFromClusterSnapshotVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetRestoreFromClusterSnapshotVersionEnum || (GetRestoreFromClusterSnapshotVersionEnum = {}));
var GetRestoreFromClusterSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetRestoreFromClusterSnapshotQueryParams, _super);
    function GetRestoreFromClusterSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AdditionalInfo" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "additionalInfo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AllowVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "allowVersionUpgrade", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AquaConfigurationStatus" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "aquaConfigurationStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutomatedSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "automatedSnapshotRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZoneRelocation" }),
        __metadata("design:type", Boolean)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "availabilityZoneRelocation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterParameterGroupName" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "clusterParameterGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroups" }),
        __metadata("design:type", Array)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "clusterSecurityGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "clusterSubnetGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ElasticIp" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "elasticIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnhancedVpcRouting" }),
        __metadata("design:type", Boolean)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "enhancedVpcRouting", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "hsmClientCertificateIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "hsmConfigurationIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IamRoles" }),
        __metadata("design:type", Array)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "iamRoles", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaintenanceTrackName" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "maintenanceTrackName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NodeType" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "nodeType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NumberOfNodes" }),
        __metadata("design:type", Number)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "numberOfNodes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OwnerAccount" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "ownerAccount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Port" }),
        __metadata("design:type", Number)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "publiclyAccessible", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "snapshotClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "snapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotScheduleIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "snapshotScheduleIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], GetRestoreFromClusterSnapshotQueryParams.prototype, "vpcSecurityGroupIds", void 0);
    return GetRestoreFromClusterSnapshotQueryParams;
}(SpeakeasyBase));
export { GetRestoreFromClusterSnapshotQueryParams };
var GetRestoreFromClusterSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetRestoreFromClusterSnapshotHeaders, _super);
    function GetRestoreFromClusterSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRestoreFromClusterSnapshotHeaders;
}(SpeakeasyBase));
export { GetRestoreFromClusterSnapshotHeaders };
var GetRestoreFromClusterSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetRestoreFromClusterSnapshotRequest, _super);
    function GetRestoreFromClusterSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRestoreFromClusterSnapshotQueryParams)
    ], GetRestoreFromClusterSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRestoreFromClusterSnapshotHeaders)
    ], GetRestoreFromClusterSnapshotRequest.prototype, "headers", void 0);
    return GetRestoreFromClusterSnapshotRequest;
}(SpeakeasyBase));
export { GetRestoreFromClusterSnapshotRequest };
var GetRestoreFromClusterSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetRestoreFromClusterSnapshotResponse, _super);
    function GetRestoreFromClusterSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRestoreFromClusterSnapshotResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRestoreFromClusterSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRestoreFromClusterSnapshotResponse.prototype, "statusCode", void 0);
    return GetRestoreFromClusterSnapshotResponse;
}(SpeakeasyBase));
export { GetRestoreFromClusterSnapshotResponse };
