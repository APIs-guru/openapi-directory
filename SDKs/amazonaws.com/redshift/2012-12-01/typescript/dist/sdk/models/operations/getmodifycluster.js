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
export var GetModifyClusterActionEnum;
(function (GetModifyClusterActionEnum) {
    GetModifyClusterActionEnum["ModifyCluster"] = "ModifyCluster";
})(GetModifyClusterActionEnum || (GetModifyClusterActionEnum = {}));
export var GetModifyClusterVersionEnum;
(function (GetModifyClusterVersionEnum) {
    GetModifyClusterVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifyClusterVersionEnum || (GetModifyClusterVersionEnum = {}));
var GetModifyClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyClusterQueryParams, _super);
    function GetModifyClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AllowVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetModifyClusterQueryParams.prototype, "allowVersionUpgrade", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutomatedSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetModifyClusterQueryParams.prototype, "automatedSnapshotRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZoneRelocation" }),
        __metadata("design:type", Boolean)
    ], GetModifyClusterQueryParams.prototype, "availabilityZoneRelocation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterParameterGroupName" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "clusterParameterGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroups" }),
        __metadata("design:type", Array)
    ], GetModifyClusterQueryParams.prototype, "clusterSecurityGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterType" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "clusterType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterVersion" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "clusterVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ElasticIp" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "elasticIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], GetModifyClusterQueryParams.prototype, "encrypted", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnhancedVpcRouting" }),
        __metadata("design:type", Boolean)
    ], GetModifyClusterQueryParams.prototype, "enhancedVpcRouting", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "hsmClientCertificateIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "hsmConfigurationIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaintenanceTrackName" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "maintenanceTrackName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetModifyClusterQueryParams.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "masterUserPassword", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NewClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "newClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NodeType" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "nodeType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NumberOfNodes" }),
        __metadata("design:type", Number)
    ], GetModifyClusterQueryParams.prototype, "numberOfNodes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Port" }),
        __metadata("design:type", Number)
    ], GetModifyClusterQueryParams.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], GetModifyClusterQueryParams.prototype, "publiclyAccessible", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyClusterQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], GetModifyClusterQueryParams.prototype, "vpcSecurityGroupIds", void 0);
    return GetModifyClusterQueryParams;
}(SpeakeasyBase));
export { GetModifyClusterQueryParams };
var GetModifyClusterHeaders = /** @class */ (function (_super) {
    __extends(GetModifyClusterHeaders, _super);
    function GetModifyClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyClusterHeaders;
}(SpeakeasyBase));
export { GetModifyClusterHeaders };
var GetModifyClusterRequest = /** @class */ (function (_super) {
    __extends(GetModifyClusterRequest, _super);
    function GetModifyClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClusterQueryParams)
    ], GetModifyClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClusterHeaders)
    ], GetModifyClusterRequest.prototype, "headers", void 0);
    return GetModifyClusterRequest;
}(SpeakeasyBase));
export { GetModifyClusterRequest };
var GetModifyClusterResponse = /** @class */ (function (_super) {
    __extends(GetModifyClusterResponse, _super);
    function GetModifyClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyClusterResponse.prototype, "statusCode", void 0);
    return GetModifyClusterResponse;
}(SpeakeasyBase));
export { GetModifyClusterResponse };
