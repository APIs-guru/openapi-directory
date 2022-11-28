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
// CreateUserScheduleRequest
/**
 * The type that defines the fields for the createSchedule method.
**/
var CreateUserScheduleRequest = /** @class */ (function (_super) {
    __extends(CreateUserScheduleRequest, _super);
    function CreateUserScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedType" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "feedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfMonth" }),
        __metadata("design:type", Number)
    ], CreateUserScheduleRequest.prototype, "preferredTriggerDayOfMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredTriggerDayOfWeek" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "preferredTriggerDayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredTriggerHour" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "preferredTriggerHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleEndDate" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "scheduleEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleName" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "scheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleStartDate" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "scheduleStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleTemplateId" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "scheduleTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaVersion" }),
        __metadata("design:type", String)
    ], CreateUserScheduleRequest.prototype, "schemaVersion", void 0);
    return CreateUserScheduleRequest;
}(SpeakeasyBase));
export { CreateUserScheduleRequest };
