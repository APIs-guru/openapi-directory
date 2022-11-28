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
// WeeklyAutoScalingSchedule
/**
 * <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p>
**/
var WeeklyAutoScalingSchedule = /** @class */ (function (_super) {
    __extends(WeeklyAutoScalingSchedule, _super);
    function WeeklyAutoScalingSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Friday" }),
        __metadata("design:type", Map)
    ], WeeklyAutoScalingSchedule.prototype, "friday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Monday" }),
        __metadata("design:type", Map)
    ], WeeklyAutoScalingSchedule.prototype, "monday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Saturday" }),
        __metadata("design:type", Map)
    ], WeeklyAutoScalingSchedule.prototype, "saturday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sunday" }),
        __metadata("design:type", Map)
    ], WeeklyAutoScalingSchedule.prototype, "sunday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Thursday" }),
        __metadata("design:type", Map)
    ], WeeklyAutoScalingSchedule.prototype, "thursday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tuesday" }),
        __metadata("design:type", Map)
    ], WeeklyAutoScalingSchedule.prototype, "tuesday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wednesday" }),
        __metadata("design:type", Map)
    ], WeeklyAutoScalingSchedule.prototype, "wednesday", void 0);
    return WeeklyAutoScalingSchedule;
}(SpeakeasyBase));
export { WeeklyAutoScalingSchedule };
