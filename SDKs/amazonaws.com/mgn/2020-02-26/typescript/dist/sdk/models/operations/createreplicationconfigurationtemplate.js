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
var CreateReplicationConfigurationTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateReplicationConfigurationTemplateHeaders, _super);
    function CreateReplicationConfigurationTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateReplicationConfigurationTemplateHeaders;
}(SpeakeasyBase));
export { CreateReplicationConfigurationTemplateHeaders };
export var CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
(function (CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum) {
    CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum["PrivateIp"] = "PRIVATE_IP";
    CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum["PublicIp"] = "PUBLIC_IP";
})(CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum || (CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = {}));
export var CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
(function (CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum) {
    CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum["Gp2"] = "GP2";
    CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum["St1"] = "ST1";
})(CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum || (CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = {}));
export var CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
(function (CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum) {
    CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum["Default"] = "DEFAULT";
    CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum["Custom"] = "CUSTOM";
})(CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum || (CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = {}));
var CreateReplicationConfigurationTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateReplicationConfigurationTemplateRequestBody, _super);
    function CreateReplicationConfigurationTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associateDefaultSecurityGroup" }),
        __metadata("design:type", Boolean)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "associateDefaultSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthThrottling" }),
        __metadata("design:type", Number)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "bandwidthThrottling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createPublicIP" }),
        __metadata("design:type", Boolean)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "createPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPlaneRouting" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "dataPlaneRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLargeStagingDiskType" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "defaultLargeStagingDiskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebsEncryption" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "ebsEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebsEncryptionKeyArn" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "ebsEncryptionKeyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationServerInstanceType" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "replicationServerInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationServersSecurityGroupsIDs" }),
        __metadata("design:type", Array)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "replicationServersSecurityGroupsIDs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stagingAreaSubnetId" }),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "stagingAreaSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stagingAreaTags" }),
        __metadata("design:type", Map)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "stagingAreaTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useDedicatedReplicationServer" }),
        __metadata("design:type", Boolean)
    ], CreateReplicationConfigurationTemplateRequestBody.prototype, "useDedicatedReplicationServer", void 0);
    return CreateReplicationConfigurationTemplateRequestBody;
}(SpeakeasyBase));
export { CreateReplicationConfigurationTemplateRequestBody };
var CreateReplicationConfigurationTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateReplicationConfigurationTemplateRequest, _super);
    function CreateReplicationConfigurationTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateReplicationConfigurationTemplateHeaders)
    ], CreateReplicationConfigurationTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateReplicationConfigurationTemplateRequestBody)
    ], CreateReplicationConfigurationTemplateRequest.prototype, "request", void 0);
    return CreateReplicationConfigurationTemplateRequest;
}(SpeakeasyBase));
export { CreateReplicationConfigurationTemplateRequest };
var CreateReplicationConfigurationTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateReplicationConfigurationTemplateResponse, _super);
    function CreateReplicationConfigurationTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationConfigurationTemplateResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateReplicationConfigurationTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReplicationConfigurationTemplate)
    ], CreateReplicationConfigurationTemplateResponse.prototype, "replicationConfigurationTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateReplicationConfigurationTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationConfigurationTemplateResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateReplicationConfigurationTemplateResponse.prototype, "validationException", void 0);
    return CreateReplicationConfigurationTemplateResponse;
}(SpeakeasyBase));
export { CreateReplicationConfigurationTemplateResponse };
