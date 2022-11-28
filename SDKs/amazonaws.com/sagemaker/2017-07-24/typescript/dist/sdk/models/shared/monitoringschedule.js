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
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { Tag } from "./tag";
// MonitoringSchedule
/**
 * A schedule for a model monitoring job. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
**/
var MonitoringSchedule = /** @class */ (function (_super) {
    __extends(MonitoringSchedule, _super);
    function MonitoringSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], MonitoringSchedule.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointName" }),
        __metadata("design:type", String)
    ], MonitoringSchedule.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], MonitoringSchedule.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], MonitoringSchedule.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastMonitoringExecutionSummary" }),
        __metadata("design:type", MonitoringExecutionSummary)
    ], MonitoringSchedule.prototype, "lastMonitoringExecutionSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringScheduleArn" }),
        __metadata("design:type", String)
    ], MonitoringSchedule.prototype, "monitoringScheduleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringScheduleConfig" }),
        __metadata("design:type", MonitoringScheduleConfig)
    ], MonitoringSchedule.prototype, "monitoringScheduleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" }),
        __metadata("design:type", String)
    ], MonitoringSchedule.prototype, "monitoringScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringScheduleStatus" }),
        __metadata("design:type", String)
    ], MonitoringSchedule.prototype, "monitoringScheduleStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringType" }),
        __metadata("design:type", String)
    ], MonitoringSchedule.prototype, "monitoringType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], MonitoringSchedule.prototype, "tags", void 0);
    return MonitoringSchedule;
}(SpeakeasyBase));
export { MonitoringSchedule };
