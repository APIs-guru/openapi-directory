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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
export var ActivityShowAsEnum;
(function (ActivityShowAsEnum) {
    ActivityShowAsEnum["Free"] = "free";
    ActivityShowAsEnum["Busy"] = "busy";
})(ActivityShowAsEnum || (ActivityShowAsEnum = {}));
export var ActivityTypeEnum;
(function (ActivityTypeEnum) {
    ActivityTypeEnum["Call"] = "call";
    ActivityTypeEnum["Meeting"] = "meeting";
    ActivityTypeEnum["Email"] = "email";
    ActivityTypeEnum["Note"] = "note";
    ActivityTypeEnum["Task"] = "task";
    ActivityTypeEnum["Deadline"] = "deadline";
    ActivityTypeEnum["SendLetter"] = "send-letter";
    ActivityTypeEnum["SendQuote"] = "send-quote";
    ActivityTypeEnum["Other"] = "other";
})(ActivityTypeEnum || (ActivityTypeEnum = {}));
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=activity_date" }),
        __metadata("design:type", String)
    ], Activity.prototype, "activityDate", void 0);
    __decorate([
        Metadata({ data: "json, name=activity_datetime" }),
        __metadata("design:type", String)
    ], Activity.prototype, "activityDatetime", void 0);
    __decorate([
        Metadata({ data: "json, name=all_day_event" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "allDayEvent", void 0);
    __decorate([
        Metadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "archived", void 0);
    __decorate([
        Metadata({ data: "json, name=asset_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "assetId", void 0);
    __decorate([
        Metadata({ data: "json, name=attendees", elemType: shared.ActivityAttendee }),
        __metadata("design:type", Array)
    ], Activity.prototype, "attendees", void 0);
    __decorate([
        Metadata({ data: "json, name=campaign_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "campaignId", void 0);
    __decorate([
        Metadata({ data: "json, name=case_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "caseId", void 0);
    __decorate([
        Metadata({ data: "json, name=child" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "child", void 0);
    __decorate([
        Metadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "companyId", void 0);
    __decorate([
        Metadata({ data: "json, name=contact_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "contactId", void 0);
    __decorate([
        Metadata({ data: "json, name=contract_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "contractId", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], Activity.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Activity.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=custom_fields", elemType: shared.CustomField }),
        __metadata("design:type", Array)
    ], Activity.prototype, "customFields", void 0);
    __decorate([
        Metadata({ data: "json, name=custom_object_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "customObjectId", void 0);
    __decorate([
        Metadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "deleted", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Activity.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=done" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "done", void 0);
    __decorate([
        Metadata({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "downstreamId", void 0);
    __decorate([
        Metadata({ data: "json, name=duration_minutes" }),
        __metadata("design:type", Number)
    ], Activity.prototype, "durationMinutes", void 0);
    __decorate([
        Metadata({ data: "json, name=duration_seconds" }),
        __metadata("design:type", Number)
    ], Activity.prototype, "durationSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], Activity.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "json, name=end_datetime" }),
        __metadata("design:type", String)
    ], Activity.prototype, "endDatetime", void 0);
    __decorate([
        Metadata({ data: "json, name=event_sub_type" }),
        __metadata("design:type", String)
    ], Activity.prototype, "eventSubType", void 0);
    __decorate([
        Metadata({ data: "json, name=group_event" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "groupEvent", void 0);
    __decorate([
        Metadata({ data: "json, name=group_event_type" }),
        __metadata("design:type", String)
    ], Activity.prototype, "groupEventType", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=lead_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "leadId", void 0);
    __decorate([
        Metadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Activity.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "json, name=location_address" }),
        __metadata("design:type", Address)
    ], Activity.prototype, "locationAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Activity.prototype, "note", void 0);
    __decorate([
        Metadata({ data: "json, name=opportunity_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "opportunityId", void 0);
    __decorate([
        Metadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "ownerId", void 0);
    __decorate([
        Metadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "private", void 0);
    __decorate([
        Metadata({ data: "json, name=product_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "productId", void 0);
    __decorate([
        Metadata({ data: "json, name=recurrent" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "recurrent", void 0);
    __decorate([
        Metadata({ data: "json, name=reminder_datetime" }),
        __metadata("design:type", String)
    ], Activity.prototype, "reminderDatetime", void 0);
    __decorate([
        Metadata({ data: "json, name=reminder_set" }),
        __metadata("design:type", Boolean)
    ], Activity.prototype, "reminderSet", void 0);
    __decorate([
        Metadata({ data: "json, name=show_as" }),
        __metadata("design:type", String)
    ], Activity.prototype, "showAs", void 0);
    __decorate([
        Metadata({ data: "json, name=solution_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "solutionId", void 0);
    __decorate([
        Metadata({ data: "json, name=start_datetime" }),
        __metadata("design:type", String)
    ], Activity.prototype, "startDatetime", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Activity.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Activity.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Activity.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Activity.prototype, "updatedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "userId", void 0);
    __decorate([
        Metadata({ data: "json, name=video_conference_id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "videoConferenceId", void 0);
    __decorate([
        Metadata({ data: "json, name=video_conference_url" }),
        __metadata("design:type", String)
    ], Activity.prototype, "videoConferenceUrl", void 0);
    return Activity;
}(SpeakeasyBase));
export { Activity };
