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
var ScheduleWorkPatternEvenWeeks = /** @class */ (function (_super) {
    __extends(ScheduleWorkPatternEvenWeeks, _super);
    function ScheduleWorkPatternEvenWeeks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_friday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternEvenWeeks.prototype, "hoursFriday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_monday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternEvenWeeks.prototype, "hoursMonday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_saturday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternEvenWeeks.prototype, "hoursSaturday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_sunday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternEvenWeeks.prototype, "hoursSunday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_thursday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternEvenWeeks.prototype, "hoursThursday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_tuesday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternEvenWeeks.prototype, "hoursTuesday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_wednesday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternEvenWeeks.prototype, "hoursWednesday", void 0);
    return ScheduleWorkPatternEvenWeeks;
}(SpeakeasyBase));
export { ScheduleWorkPatternEvenWeeks };
var ScheduleWorkPatternOddWeeks = /** @class */ (function (_super) {
    __extends(ScheduleWorkPatternOddWeeks, _super);
    function ScheduleWorkPatternOddWeeks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_friday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternOddWeeks.prototype, "hoursFriday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_monday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternOddWeeks.prototype, "hoursMonday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_saturday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternOddWeeks.prototype, "hoursSaturday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_sunday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternOddWeeks.prototype, "hoursSunday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_thursday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternOddWeeks.prototype, "hoursThursday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_tuesday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternOddWeeks.prototype, "hoursTuesday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours_wednesday" }),
        __metadata("design:type", Number)
    ], ScheduleWorkPatternOddWeeks.prototype, "hoursWednesday", void 0);
    return ScheduleWorkPatternOddWeeks;
}(SpeakeasyBase));
export { ScheduleWorkPatternOddWeeks };
var ScheduleWorkPattern = /** @class */ (function (_super) {
    __extends(ScheduleWorkPattern, _super);
    function ScheduleWorkPattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=even_weeks" }),
        __metadata("design:type", ScheduleWorkPatternEvenWeeks)
    ], ScheduleWorkPattern.prototype, "evenWeeks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=odd_weeks" }),
        __metadata("design:type", ScheduleWorkPatternOddWeeks)
    ], ScheduleWorkPattern.prototype, "oddWeeks", void 0);
    return ScheduleWorkPattern;
}(SpeakeasyBase));
export { ScheduleWorkPattern };
var Schedule = /** @class */ (function (_super) {
    __extends(Schedule, _super);
    function Schedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=work_pattern" }),
        __metadata("design:type", ScheduleWorkPattern)
    ], Schedule.prototype, "workPattern", void 0);
    return Schedule;
}(SpeakeasyBase));
export { Schedule };
