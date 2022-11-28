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
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { ResourceLocation } from "./resourcelocation";
import { MetricNameEnum } from "./metricnameenum";
import { MonitoredResourceInfo } from "./monitoredresourceinfo";
import { AlarmStateEnum } from "./alarmstateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";
import { MetricUnitEnum } from "./metricunitenum";
// Alarm
/**
 * <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
**/
var Alarm = /** @class */ (function (_super) {
    __extends(Alarm, _super);
    function Alarm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonOperator" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "comparisonOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactProtocols" }),
        __metadata("design:type", Array)
    ], Alarm.prototype, "contactProtocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Alarm.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapointsToAlarm" }),
        __metadata("design:type", Number)
    ], Alarm.prototype, "datapointsToAlarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationPeriods" }),
        __metadata("design:type", Number)
    ], Alarm.prototype, "evaluationPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], Alarm.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricName" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoredResourceInfo" }),
        __metadata("design:type", MonitoredResourceInfo)
    ], Alarm.prototype, "monitoredResourceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationEnabled" }),
        __metadata("design:type", Boolean)
    ], Alarm.prototype, "notificationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationTriggers" }),
        __metadata("design:type", Array)
    ], Alarm.prototype, "notificationTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], Alarm.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistic" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "statistic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threshold" }),
        __metadata("design:type", Number)
    ], Alarm.prototype, "threshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treatMissingData" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "treatMissingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], Alarm.prototype, "unit", void 0);
    return Alarm;
}(SpeakeasyBase));
export { Alarm };
