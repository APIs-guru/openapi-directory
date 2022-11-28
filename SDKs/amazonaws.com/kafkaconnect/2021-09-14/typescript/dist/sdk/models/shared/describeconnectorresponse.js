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
import { CapacityDescription } from "./capacitydescription";
import { ConnectorStateEnum } from "./connectorstateenum";
import { KafkaClusterDescription } from "./kafkaclusterdescription";
import { KafkaClusterClientAuthenticationDescription } from "./kafkaclusterclientauthenticationdescription";
import { KafkaClusterEncryptionInTransitDescription } from "./kafkaclusterencryptionintransitdescription";
import { LogDeliveryDescription } from "./logdeliverydescription";
import { PluginDescription } from "./plugindescription";
import { WorkerConfigurationDescription } from "./workerconfigurationdescription";
var DescribeConnectorResponse = /** @class */ (function (_super) {
    __extends(DescribeConnectorResponse, _super);
    function DescribeConnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", CapacityDescription)
    ], DescribeConnectorResponse.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorArn" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorConfiguration" }),
        __metadata("design:type", Map)
    ], DescribeConnectorResponse.prototype, "connectorConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorDescription" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorName" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorState" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], DescribeConnectorResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentVersion" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "currentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaCluster" }),
        __metadata("design:type", KafkaClusterDescription)
    ], DescribeConnectorResponse.prototype, "kafkaCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaClusterClientAuthentication" }),
        __metadata("design:type", KafkaClusterClientAuthenticationDescription)
    ], DescribeConnectorResponse.prototype, "kafkaClusterClientAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaClusterEncryptionInTransit" }),
        __metadata("design:type", KafkaClusterEncryptionInTransitDescription)
    ], DescribeConnectorResponse.prototype, "kafkaClusterEncryptionInTransit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafkaConnectVersion" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "kafkaConnectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logDelivery" }),
        __metadata("design:type", LogDeliveryDescription)
    ], DescribeConnectorResponse.prototype, "logDelivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plugins", elemType: PluginDescription }),
        __metadata("design:type", Array)
    ], DescribeConnectorResponse.prototype, "plugins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceExecutionRoleArn" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "serviceExecutionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfiguration" }),
        __metadata("design:type", WorkerConfigurationDescription)
    ], DescribeConnectorResponse.prototype, "workerConfiguration", void 0);
    return DescribeConnectorResponse;
}(SpeakeasyBase));
export { DescribeConnectorResponse };
