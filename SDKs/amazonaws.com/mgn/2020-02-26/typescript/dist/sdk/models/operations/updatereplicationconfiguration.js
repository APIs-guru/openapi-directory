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
var UpdateReplicationConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationHeaders, _super);
    function UpdateReplicationConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateReplicationConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationHeaders };
export var UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;
(function (UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum) {
    UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum["PrivateIp"] = "PRIVATE_IP";
    UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum["PublicIp"] = "PUBLIC_IP";
})(UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum || (UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum = {}));
export var UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;
(function (UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum) {
    UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum["Gp2"] = "GP2";
    UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum["St1"] = "ST1";
})(UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum || (UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum = {}));
export var UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;
(function (UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum) {
    UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum["Default"] = "DEFAULT";
    UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum["Custom"] = "CUSTOM";
})(UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum || (UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum = {}));
var UpdateReplicationConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationRequestBody, _super);
    function UpdateReplicationConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=associateDefaultSecurityGroup" }),
        __metadata("design:type", Boolean)
    ], UpdateReplicationConfigurationRequestBody.prototype, "associateDefaultSecurityGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=bandwidthThrottling" }),
        __metadata("design:type", Number)
    ], UpdateReplicationConfigurationRequestBody.prototype, "bandwidthThrottling", void 0);
    __decorate([
        Metadata({ data: "json, name=createPublicIP" }),
        __metadata("design:type", Boolean)
    ], UpdateReplicationConfigurationRequestBody.prototype, "createPublicIp", void 0);
    __decorate([
        Metadata({ data: "json, name=dataPlaneRouting" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "dataPlaneRouting", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultLargeStagingDiskType" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "defaultLargeStagingDiskType", void 0);
    __decorate([
        Metadata({ data: "json, name=ebsEncryption" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "ebsEncryption", void 0);
    __decorate([
        Metadata({ data: "json, name=ebsEncryptionKeyArn" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "ebsEncryptionKeyArn", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=replicatedDisks", elemType: shared.ReplicationConfigurationReplicatedDisk }),
        __metadata("design:type", Array)
    ], UpdateReplicationConfigurationRequestBody.prototype, "replicatedDisks", void 0);
    __decorate([
        Metadata({ data: "json, name=replicationServerInstanceType" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "replicationServerInstanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=replicationServersSecurityGroupsIDs" }),
        __metadata("design:type", Array)
    ], UpdateReplicationConfigurationRequestBody.prototype, "replicationServersSecurityGroupsIDs", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceServerID" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "sourceServerId", void 0);
    __decorate([
        Metadata({ data: "json, name=stagingAreaSubnetId" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationRequestBody.prototype, "stagingAreaSubnetId", void 0);
    __decorate([
        Metadata({ data: "json, name=stagingAreaTags" }),
        __metadata("design:type", Map)
    ], UpdateReplicationConfigurationRequestBody.prototype, "stagingAreaTags", void 0);
    __decorate([
        Metadata({ data: "json, name=useDedicatedReplicationServer" }),
        __metadata("design:type", Boolean)
    ], UpdateReplicationConfigurationRequestBody.prototype, "useDedicatedReplicationServer", void 0);
    return UpdateReplicationConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationRequestBody };
var UpdateReplicationConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationRequest, _super);
    function UpdateReplicationConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateReplicationConfigurationHeaders)
    ], UpdateReplicationConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateReplicationConfigurationRequestBody)
    ], UpdateReplicationConfigurationRequest.prototype, "request", void 0);
    return UpdateReplicationConfigurationRequest;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationRequest };
var UpdateReplicationConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationResponse, _super);
    function UpdateReplicationConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ReplicationConfiguration)
    ], UpdateReplicationConfigurationResponse.prototype, "replicationConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateReplicationConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationResponse.prototype, "validationException", void 0);
    return UpdateReplicationConfigurationResponse;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationResponse };
