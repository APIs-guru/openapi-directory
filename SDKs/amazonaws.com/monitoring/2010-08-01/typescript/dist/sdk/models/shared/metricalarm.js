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
import { Dimension } from "./dimension";
import { MetricDataQuery } from "./metricdataquery";
import { StateValueEnum } from "./statevalueenum";
import { StatisticEnum } from "./statisticenum";
import { StandardUnitEnum } from "./standardunitenum";
// MetricAlarm
/**
 * The details about a metric alarm.
**/
var MetricAlarm = /** @class */ (function (_super) {
    __extends(MetricAlarm, _super);
    function MetricAlarm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], MetricAlarm.prototype, "actionsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], MetricAlarm.prototype, "alarmActions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "alarmArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], MetricAlarm.prototype, "alarmConfigurationUpdatedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "alarmDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "alarmName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "comparisonOperator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetricAlarm.prototype, "datapointsToAlarm", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Dimension }),
        __metadata("design:type", Array)
    ], MetricAlarm.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "evaluateLowSampleCountPercentile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetricAlarm.prototype, "evaluationPeriods", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "extendedStatistic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], MetricAlarm.prototype, "insufficientDataActions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: MetricDataQuery }),
        __metadata("design:type", Array)
    ], MetricAlarm.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "namespace", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], MetricAlarm.prototype, "okActions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetricAlarm.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "stateReason", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "stateReasonData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], MetricAlarm.prototype, "stateUpdatedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "stateValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "statistic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetricAlarm.prototype, "threshold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "thresholdMetricId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "treatMissingData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetricAlarm.prototype, "unit", void 0);
    return MetricAlarm;
}(SpeakeasyBase));
export { MetricAlarm };
