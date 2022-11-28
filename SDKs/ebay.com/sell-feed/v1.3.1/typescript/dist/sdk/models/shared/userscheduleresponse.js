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
// UserScheduleResponse
/**
 * The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
var UserScheduleResponse = /** @class */ (function (_super) {
    __extends(UserScheduleResponse, _super);
    function UserScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedType" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "feedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfMonth" }),
        __metadata("design:type", Number)
    ], UserScheduleResponse.prototype, "preferredTriggerDayOfMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfWeek" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "preferredTriggerDayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredTriggerHour" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "preferredTriggerHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleEndDate" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "scheduleEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleId" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "scheduleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleName" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "scheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleStartDate" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "scheduleStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleTemplateId" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "scheduleTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaVersion" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "schemaVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusReason" }),
        __metadata("design:type", String)
    ], UserScheduleResponse.prototype, "statusReason", void 0);
    return UserScheduleResponse;
}(SpeakeasyBase));
export { UserScheduleResponse };
