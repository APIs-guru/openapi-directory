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
import { UserCompactInput } from "./usercompact";
export var TaskRequestApprovalStatusEnum;
(function (TaskRequestApprovalStatusEnum) {
    TaskRequestApprovalStatusEnum["Pending"] = "pending";
    TaskRequestApprovalStatusEnum["Approved"] = "approved";
    TaskRequestApprovalStatusEnum["Rejected"] = "rejected";
    TaskRequestApprovalStatusEnum["ChangesRequested"] = "changes_requested";
})(TaskRequestApprovalStatusEnum || (TaskRequestApprovalStatusEnum = {}));
export var TaskRequestAssigneeStatusEnum;
(function (TaskRequestAssigneeStatusEnum) {
    TaskRequestAssigneeStatusEnum["Today"] = "today";
    TaskRequestAssigneeStatusEnum["Upcoming"] = "upcoming";
    TaskRequestAssigneeStatusEnum["Later"] = "later";
    TaskRequestAssigneeStatusEnum["New"] = "new";
    TaskRequestAssigneeStatusEnum["Inbox"] = "inbox";
})(TaskRequestAssigneeStatusEnum || (TaskRequestAssigneeStatusEnum = {}));
// TaskRequestExternal
/**
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
var TaskRequestExternal = /** @class */ (function (_super) {
    __extends(TaskRequestExternal, _super);
    function TaskRequestExternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], TaskRequestExternal.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskRequestExternal.prototype, "gid", void 0);
    return TaskRequestExternal;
}(SpeakeasyBase));
export { TaskRequestExternal };
export var TaskRequestResourceSubtypeEnum;
(function (TaskRequestResourceSubtypeEnum) {
    TaskRequestResourceSubtypeEnum["DefaultTask"] = "default_task";
    TaskRequestResourceSubtypeEnum["Milestone"] = "milestone";
    TaskRequestResourceSubtypeEnum["Section"] = "section";
    TaskRequestResourceSubtypeEnum["Approval"] = "approval";
})(TaskRequestResourceSubtypeEnum || (TaskRequestResourceSubtypeEnum = {}));
var TaskRequestInput = /** @class */ (function (_super) {
    __extends(TaskRequestInput, _super);
    function TaskRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approval_status" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "approvalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee_section" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "assigneeSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee_status" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "assigneeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed" }),
        __metadata("design:type", Boolean)
    ], TaskRequestInput.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_by" }),
        __metadata("design:type", UserCompactInput)
    ], TaskRequestInput.prototype, "completedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], TaskRequestInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_at" }),
        __metadata("design:type", Date)
    ], TaskRequestInput.prototype, "dueAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], TaskRequestInput.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external" }),
        __metadata("design:type", TaskRequestExternal)
    ], TaskRequestInput.prototype, "external", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", Array)
    ], TaskRequestInput.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "htmlNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], TaskRequestInput.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projects" }),
        __metadata("design:type", Array)
    ], TaskRequestInput.prototype, "projects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "resourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", Date)
    ], TaskRequestInput.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], TaskRequestInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", String)
    ], TaskRequestInput.prototype, "workspace", void 0);
    return TaskRequestInput;
}(SpeakeasyBase));
export { TaskRequestInput };
