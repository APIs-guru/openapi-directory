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
import * as shared from "../shared";
var UpdateReplicationConfigurationTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationTemplateHeaders, _super);
    function UpdateReplicationConfigurationTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateReplicationConfigurationTemplateHeaders;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationTemplateHeaders };
export var UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
(function (UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum) {
    UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum["PrivateIp"] = "PRIVATE_IP";
    UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum["PublicIp"] = "PUBLIC_IP";
})(UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum || (UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = {}));
export var UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
(function (UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum) {
    UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum["Gp2"] = "GP2";
    UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum["St1"] = "ST1";
})(UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum || (UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = {}));
export var UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
(function (UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum) {
    UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum["Default"] = "DEFAULT";
    UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum["Custom"] = "CUSTOM";
})(UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum || (UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = {}));
var UpdateReplicationConfigurationTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationTemplateRequestBody, _super);
    function UpdateReplicationConfigurationTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associateDefaultSecurityGroup" }),
        __metadata("design:type", Boolean)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "associateDefaultSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthThrottling" }),
        __metadata("design:type", Number)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "bandwidthThrottling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createPublicIP" }),
        __metadata("design:type", Boolean)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "createPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPlaneRouting" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "dataPlaneRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLargeStagingDiskType" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "defaultLargeStagingDiskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebsEncryption" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "ebsEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebsEncryptionKeyArn" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "ebsEncryptionKeyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationConfigurationTemplateID" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "replicationConfigurationTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationServerInstanceType" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "replicationServerInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationServersSecurityGroupsIDs" }),
        __metadata("design:type", Array)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "replicationServersSecurityGroupsIDs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stagingAreaSubnetId" }),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "stagingAreaSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stagingAreaTags" }),
        __metadata("design:type", Map)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "stagingAreaTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useDedicatedReplicationServer" }),
        __metadata("design:type", Boolean)
    ], UpdateReplicationConfigurationTemplateRequestBody.prototype, "useDedicatedReplicationServer", void 0);
    return UpdateReplicationConfigurationTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationTemplateRequestBody };
var UpdateReplicationConfigurationTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationTemplateRequest, _super);
    function UpdateReplicationConfigurationTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateReplicationConfigurationTemplateHeaders)
    ], UpdateReplicationConfigurationTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateReplicationConfigurationTemplateRequestBody)
    ], UpdateReplicationConfigurationTemplateRequest.prototype, "request", void 0);
    return UpdateReplicationConfigurationTemplateRequest;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationTemplateRequest };
var UpdateReplicationConfigurationTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationTemplateResponse, _super);
    function UpdateReplicationConfigurationTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationTemplateResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateReplicationConfigurationTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReplicationConfigurationTemplate)
    ], UpdateReplicationConfigurationTemplateResponse.prototype, "replicationConfigurationTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationTemplateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateReplicationConfigurationTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationTemplateResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateReplicationConfigurationTemplateResponse.prototype, "validationException", void 0);
    return UpdateReplicationConfigurationTemplateResponse;
}(SpeakeasyBase));
export { UpdateReplicationConfigurationTemplateResponse };
