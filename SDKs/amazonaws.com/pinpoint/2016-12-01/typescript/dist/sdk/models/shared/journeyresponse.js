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
import { Activity } from "./activity";
import { JourneyLimits } from "./journeylimits";
import { QuietTime } from "./quiettime";
import { JourneySchedule } from "./journeyschedule";
import { StartCondition } from "./startcondition";
import { StateEnum } from "./stateenum";
// JourneyResponse
/**
 * Provides information about the status, configuration, and other settings for a journey.
**/
var JourneyResponse = /** @class */ (function (_super) {
    __extends(JourneyResponse, _super);
    function JourneyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Activities", elemType: Activity }),
        __metadata("design:type", Map)
    ], JourneyResponse.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limits" }),
        __metadata("design:type", JourneyLimits)
    ], JourneyResponse.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalTime" }),
        __metadata("design:type", Boolean)
    ], JourneyResponse.prototype, "localTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuietTime" }),
        __metadata("design:type", QuietTime)
    ], JourneyResponse.prototype, "quietTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshFrequency" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "refreshFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshOnSegmentUpdate" }),
        __metadata("design:type", Boolean)
    ], JourneyResponse.prototype, "refreshOnSegmentUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", JourneySchedule)
    ], JourneyResponse.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartActivity" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "startActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartCondition" }),
        __metadata("design:type", StartCondition)
    ], JourneyResponse.prototype, "startCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], JourneyResponse.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WaitForQuietTime" }),
        __metadata("design:type", Boolean)
    ], JourneyResponse.prototype, "waitForQuietTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], JourneyResponse.prototype, "tags", void 0);
    return JourneyResponse;
}(SpeakeasyBase));
export { JourneyResponse };
