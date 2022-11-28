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
import { LastUpdate } from "./lastupdate";
import { LoggingConfiguration } from "./loggingconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { EnvironmentStatusEnum } from "./environmentstatusenum";
import { WebserverAccessModeEnum } from "./webserveraccessmodeenum";
// Environment
/**
 * The Amazon Managed Workflows for Apache Airflow (MWAA) environment.
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirflowConfigurationOptions" }),
        __metadata("design:type", Map)
    ], Environment.prototype, "airflowConfigurationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AirflowVersion" }),
        __metadata("design:type", String)
    ], Environment.prototype, "airflowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], Environment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DagS3Path" }),
        __metadata("design:type", String)
    ], Environment.prototype, "dagS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentClass" }),
        __metadata("design:type", String)
    ], Environment.prototype, "environmentClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKey" }),
        __metadata("design:type", String)
    ], Environment.prototype, "kmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdate" }),
        __metadata("design:type", LastUpdate)
    ], Environment.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" }),
        __metadata("design:type", LoggingConfiguration)
    ], Environment.prototype, "loggingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxWorkers" }),
        __metadata("design:type", Number)
    ], Environment.prototype, "maxWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinWorkers" }),
        __metadata("design:type", Number)
    ], Environment.prototype, "minWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], Environment.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], Environment.prototype, "pluginsS3ObjectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginsS3Path" }),
        __metadata("design:type", String)
    ], Environment.prototype, "pluginsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequirementsS3ObjectVersion" }),
        __metadata("design:type", String)
    ], Environment.prototype, "requirementsS3ObjectVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequirementsS3Path" }),
        __metadata("design:type", String)
    ], Environment.prototype, "requirementsS3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedulers" }),
        __metadata("design:type", Number)
    ], Environment.prototype, "schedulers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceBucketArn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "sourceBucketArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Environment.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], Environment.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebserverAccessMode" }),
        __metadata("design:type", String)
    ], Environment.prototype, "webserverAccessMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebserverUrl" }),
        __metadata("design:type", String)
    ], Environment.prototype, "webserverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceWindowStart" }),
        __metadata("design:type", String)
    ], Environment.prototype, "weeklyMaintenanceWindowStart", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
