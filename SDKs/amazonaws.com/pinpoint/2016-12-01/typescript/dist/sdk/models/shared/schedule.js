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
import { CampaignEventFilter } from "./campaigneventfilter";
import { FrequencyEnum } from "./frequencyenum";
import { QuietTime } from "./quiettime";
// Schedule
/**
 * Specifies the schedule settings for a campaign.
**/
var Schedule = /** @class */ (function (_super) {
    __extends(Schedule, _super);
    function Schedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventFilter" }),
        __metadata("design:type", CampaignEventFilter)
    ], Schedule.prototype, "eventFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsLocalTime" }),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "isLocalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuietTime" }),
        __metadata("design:type", QuietTime)
    ], Schedule.prototype, "quietTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timezone" }),
        __metadata("design:type", String)
    ], Schedule.prototype, "timezone", void 0);
    return Schedule;
}(SpeakeasyBase));
export { Schedule };
