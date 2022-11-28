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
var TimeOffRequestNotes = /** @class */ (function (_super) {
    __extends(TimeOffRequestNotes, _super);
    function TimeOffRequestNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee" }),
        __metadata("design:type", String)
    ], TimeOffRequestNotes.prototype, "employee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manager" }),
        __metadata("design:type", String)
    ], TimeOffRequestNotes.prototype, "manager", void 0);
    return TimeOffRequestNotes;
}(SpeakeasyBase));
export { TimeOffRequestNotes };
export var TimeOffRequestRequestTypeEnum;
(function (TimeOffRequestRequestTypeEnum) {
    TimeOffRequestRequestTypeEnum["Vacation"] = "vacation";
    TimeOffRequestRequestTypeEnum["Sick"] = "sick";
    TimeOffRequestRequestTypeEnum["Personal"] = "personal";
    TimeOffRequestRequestTypeEnum["JuryDuty"] = "jury_duty";
    TimeOffRequestRequestTypeEnum["Volunteer"] = "volunteer";
    TimeOffRequestRequestTypeEnum["Bereavement"] = "bereavement";
    TimeOffRequestRequestTypeEnum["Other"] = "other";
})(TimeOffRequestRequestTypeEnum || (TimeOffRequestRequestTypeEnum = {}));
export var TimeOffRequestStatusEnum;
(function (TimeOffRequestStatusEnum) {
    TimeOffRequestStatusEnum["Requested"] = "requested";
    TimeOffRequestStatusEnum["Approved"] = "approved";
    TimeOffRequestStatusEnum["Declined"] = "declined";
    TimeOffRequestStatusEnum["Cancelled"] = "cancelled";
    TimeOffRequestStatusEnum["Deleted"] = "deleted";
    TimeOffRequestStatusEnum["Other"] = "other";
})(TimeOffRequestStatusEnum || (TimeOffRequestStatusEnum = {}));
export var TimeOffRequestUnitsEnum;
(function (TimeOffRequestUnitsEnum) {
    TimeOffRequestUnitsEnum["Days"] = "days";
    TimeOffRequestUnitsEnum["Hours"] = "hours";
    TimeOffRequestUnitsEnum["Other"] = "other";
})(TimeOffRequestUnitsEnum || (TimeOffRequestUnitsEnum = {}));
var TimeOffRequestInput = /** @class */ (function (_super) {
    __extends(TimeOffRequestInput, _super);
    function TimeOffRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], TimeOffRequestInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approval_date" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "approvalDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", TimeOffRequestNotes)
    ], TimeOffRequestInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy_id" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "policyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_date" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "requestDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_type" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], TimeOffRequestInput.prototype, "units", void 0);
    return TimeOffRequestInput;
}(SpeakeasyBase));
export { TimeOffRequestInput };
var TimeOffRequest = /** @class */ (function (_super) {
    __extends(TimeOffRequest, _super);
    function TimeOffRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], TimeOffRequest.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approval_date" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "approvalDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TimeOffRequest.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", TimeOffRequestNotes)
    ], TimeOffRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy_id" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "policyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_date" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "requestDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_type" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "units", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], TimeOffRequest.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], TimeOffRequest.prototype, "updatedBy", void 0);
    return TimeOffRequest;
}(SpeakeasyBase));
export { TimeOffRequest };
