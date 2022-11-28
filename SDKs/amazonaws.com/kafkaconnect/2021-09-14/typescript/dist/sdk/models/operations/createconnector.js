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
var CreateConnectorHeaders = /** @class */ (function (_super) {
    __extends(CreateConnectorHeaders, _super);
    function CreateConnectorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateConnectorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateConnectorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateConnectorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateConnectorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateConnectorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateConnectorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateConnectorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateConnectorHeaders;
}(SpeakeasyBase));
export { CreateConnectorHeaders };
// CreateConnectorRequestBodyCapacity
/**
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
**/
var CreateConnectorRequestBodyCapacity = /** @class */ (function (_super) {
    __extends(CreateConnectorRequestBodyCapacity, _super);
    function CreateConnectorRequestBodyCapacity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoScaling" }),
        __metadata("design:type", shared.AutoScaling)
    ], CreateConnectorRequestBodyCapacity.prototype, "autoScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisionedCapacity" }),
        __metadata("design:type", shared.ProvisionedCapacity)
    ], CreateConnectorRequestBodyCapacity.prototype, "provisionedCapacity", void 0);
    return CreateConnectorRequestBodyCapacity;
}(SpeakeasyBase));
export { CreateConnectorRequestBodyCapacity };
// CreateConnectorRequestBodyKafkaCluster
/**
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
var CreateConnectorRequestBodyKafkaCluster = /** @class */ (function (_super) {
    __extends(CreateConnectorRequestBodyKafkaCluster, _super);
    function CreateConnectorRequestBodyKafkaCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apacheKafkaCluster" }),
        __metadata("design:type", shared.ApacheKafkaCluster)
    ], CreateConnectorRequestBodyKafkaCluster.prototype, "apacheKafkaCluster", void 0);
    return CreateConnectorRequestBodyKafkaCluster;
}(SpeakeasyBase));
export { CreateConnectorRequestBodyKafkaCluster };
// CreateConnectorRequestBodyKafkaClusterClientAuthentication
/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
var CreateConnectorRequestBodyKafkaClusterClientAuthentication = /** @class */ (function (_super) {
    __extends(CreateConnectorRequestBodyKafkaClusterClientAuthentication, _super);
    function CreateConnectorRequestBodyKafkaClusterClientAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticationType" }),
        __metadata("design:type", String)
    ], CreateConnectorRequestBodyKafkaClusterClientAuthentication.prototype, "authenticationType", void 0);
    return CreateConnectorRequestBodyKafkaClusterClientAuthentication;
}(SpeakeasyBase));
export { CreateConnectorRequestBodyKafkaClusterClientAuthentication };
// CreateConnectorRequestBodyKafkaClusterEncryptionInTransit
/**
 * Details of encryption in transit to the Apache Kafka cluster.
**/
var CreateConnectorRequestBodyKafkaClusterEncryptionInTransit = /** @class */ (function (_super) {
    __extends(CreateConnectorRequestBodyKafkaClusterEncryptionInTransit, _super);
    function CreateConnectorRequestBodyKafkaClusterEncryptionInTransit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionType" }),
        __metadata("design:type", String)
    ], CreateConnectorRequestBodyKafkaClusterEncryptionInTransit.prototype, "encryptionType", void 0);
    return CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;
}(SpeakeasyBase));
export { CreateConnectorRequestBodyKafkaClusterEncryptionInTransit };
// CreateConnectorRequestBodyLogDelivery
/**
 * Details about log delivery.
**/
var CreateConnectorRequestBodyLogDelivery = /** @class */ (function (_super) {
    __extends(CreateConnectorRequestBodyLogDelivery, _super);
    function CreateConnectorRequestBodyLogDelivery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerLogDelivery" }),
        __metadata("design:type", shared.WorkerLogDelivery)
    ], CreateConnectorRequestBodyLogDelivery.prototype, "workerLogDelivery", void 0);
    return CreateConnectorRequestBodyLogDelivery;
}(SpeakeasyBase));
export { CreateConnectorRequestBodyLogDelivery };
// CreateConnectorRequestBodyWorkerConfiguration
/**
 * The configuration of the workers, which are the processes that run the connector logic.
**/
var CreateConnectorRequestBodyWorkerConfiguration = /** @class */ (function (_super) {
    __extends(CreateConnectorRequestBodyWorkerConfiguration, _super);
    function CreateConnectorRequestBodyWorkerConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], CreateConnectorRequestBodyWorkerConfiguration.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfigurationArn" }),
        __metadata("design:type", String)
    ], CreateConnectorRequestBodyWorkerConfiguration.prototype, "workerConfigurationArn", void 0);
    return CreateConnectorRequestBodyWorkerConfiguration;
}(SpeakeasyBase));
export { CreateConnectorRequestBodyWorkerConfiguration };
var CreateConnectorRequestBody = /** @class */ (function (_super) {
    __extends(CreateConnectorRequestBody, _super);
    function CreateConnectorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", CreateConnectorRequestBodyCapacity)
    ], CreateConnectorRequestBody.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorConfiguration" }),
        __metadata("design:type", Map)
    ], CreateConnectorRequestBody.prototype, "connectorConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorDescription" }),
        __metadata("design:type", String)
    ], CreateConnectorRequestBody.prototype, "connectorDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorName" }),
        __metadata("design:type", String)
    ], CreateConnectorRequestBody.prototype, "connectorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaCluster" }),
        __metadata("design:type", CreateConnectorRequestBodyKafkaCluster)
    ], CreateConnectorRequestBody.prototype, "kafkaCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaClusterClientAuthentication" }),
        __metadata("design:type", CreateConnectorRequestBodyKafkaClusterClientAuthentication)
    ], CreateConnectorRequestBody.prototype, "kafkaClusterClientAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaClusterEncryptionInTransit" }),
        __metadata("design:type", CreateConnectorRequestBodyKafkaClusterEncryptionInTransit)
    ], CreateConnectorRequestBody.prototype, "kafkaClusterEncryptionInTransit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaConnectVersion" }),
        __metadata("design:type", String)
    ], CreateConnectorRequestBody.prototype, "kafkaConnectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logDelivery" }),
        __metadata("design:type", CreateConnectorRequestBodyLogDelivery)
    ], CreateConnectorRequestBody.prototype, "logDelivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plugins", elemType: shared.Plugin }),
        __metadata("design:type", Array)
    ], CreateConnectorRequestBody.prototype, "plugins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceExecutionRoleArn" }),
        __metadata("design:type", String)
    ], CreateConnectorRequestBody.prototype, "serviceExecutionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfiguration" }),
        __metadata("design:type", CreateConnectorRequestBodyWorkerConfiguration)
    ], CreateConnectorRequestBody.prototype, "workerConfiguration", void 0);
    return CreateConnectorRequestBody;
}(SpeakeasyBase));
export { CreateConnectorRequestBody };
var CreateConnectorRequest = /** @class */ (function (_super) {
    __extends(CreateConnectorRequest, _super);
    function CreateConnectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConnectorHeaders)
    ], CreateConnectorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateConnectorRequestBody)
    ], CreateConnectorRequest.prototype, "request", void 0);
    return CreateConnectorRequest;
}(SpeakeasyBase));
export { CreateConnectorRequest };
var CreateConnectorResponse = /** @class */ (function (_super) {
    __extends(CreateConnectorResponse, _super);
    function CreateConnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConnectorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateConnectorResponse)
    ], CreateConnectorResponse.prototype, "createConnectorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConnectorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorResponse.prototype, "unauthorizedException", void 0);
    return CreateConnectorResponse;
}(SpeakeasyBase));
export { CreateConnectorResponse };
