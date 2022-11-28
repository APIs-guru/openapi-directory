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
import { MetricNameEnum } from "./metricnameenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";
var PutAlarmRequest = /** @class */ (function (_super) {
    __extends(PutAlarmRequest, _super);
    function PutAlarmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmName" }),
        __metadata("design:type", String)
    ], PutAlarmRequest.prototype, "alarmName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonOperator" }),
        __metadata("design:type", String)
    ], PutAlarmRequest.prototype, "comparisonOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactProtocols" }),
        __metadata("design:type", Array)
    ], PutAlarmRequest.prototype, "contactProtocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapointsToAlarm" }),
        __metadata("design:type", Number)
    ], PutAlarmRequest.prototype, "datapointsToAlarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationPeriods" }),
        __metadata("design:type", Number)
    ], PutAlarmRequest.prototype, "evaluationPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricName" }),
        __metadata("design:type", String)
    ], PutAlarmRequest.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoredResourceName" }),
        __metadata("design:type", String)
    ], PutAlarmRequest.prototype, "monitoredResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationEnabled" }),
        __metadata("design:type", Boolean)
    ], PutAlarmRequest.prototype, "notificationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationTriggers" }),
        __metadata("design:type", Array)
    ], PutAlarmRequest.prototype, "notificationTriggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threshold" }),
        __metadata("design:type", Number)
    ], PutAlarmRequest.prototype, "threshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treatMissingData" }),
        __metadata("design:type", String)
    ], PutAlarmRequest.prototype, "treatMissingData", void 0);
    return PutAlarmRequest;
}(SpeakeasyBase));
export { PutAlarmRequest };
