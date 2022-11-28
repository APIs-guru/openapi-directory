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
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";
// LoggingConfiguration
/**
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
var LoggingConfiguration = /** @class */ (function (_super) {
    __extends(LoggingConfiguration, _super);
    function LoggingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DagProcessingLogs" }),
        __metadata("design:type", ModuleLoggingConfiguration)
    ], LoggingConfiguration.prototype, "dagProcessingLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchedulerLogs" }),
        __metadata("design:type", ModuleLoggingConfiguration)
    ], LoggingConfiguration.prototype, "schedulerLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskLogs" }),
        __metadata("design:type", ModuleLoggingConfiguration)
    ], LoggingConfiguration.prototype, "taskLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebserverLogs" }),
        __metadata("design:type", ModuleLoggingConfiguration)
    ], LoggingConfiguration.prototype, "webserverLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerLogs" }),
        __metadata("design:type", ModuleLoggingConfiguration)
    ], LoggingConfiguration.prototype, "workerLogs", void 0);
    return LoggingConfiguration;
}(SpeakeasyBase));
export { LoggingConfiguration };
