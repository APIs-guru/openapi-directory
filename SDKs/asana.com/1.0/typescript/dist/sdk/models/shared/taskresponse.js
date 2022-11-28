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
import { UserCompact } from "./usercompact";
import { CustomFieldResponse } from "./customfieldresponse";
import { AsanaResource } from "./asanaresource";
import { Like } from "./like";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";
import { TagCompact } from "./tagcompact";
export var TaskResponseApprovalStatusEnum;
(function (TaskResponseApprovalStatusEnum) {
    TaskResponseApprovalStatusEnum["Pending"] = "pending";
    TaskResponseApprovalStatusEnum["Approved"] = "approved";
    TaskResponseApprovalStatusEnum["Rejected"] = "rejected";
    TaskResponseApprovalStatusEnum["ChangesRequested"] = "changes_requested";
})(TaskResponseApprovalStatusEnum || (TaskResponseApprovalStatusEnum = {}));
var TaskResponseAssignee = /** @class */ (function (_super) {
    __extends(TaskResponseAssignee, _super);
    function TaskResponseAssignee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseAssignee.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseAssignee.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseAssignee.prototype, "resourceType", void 0);
    return TaskResponseAssignee;
}(SpeakeasyBase));
export { TaskResponseAssignee };
var TaskResponseAssigneeSection = /** @class */ (function (_super) {
    __extends(TaskResponseAssigneeSection, _super);
    function TaskResponseAssigneeSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseAssigneeSection.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseAssigneeSection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseAssigneeSection.prototype, "resourceType", void 0);
    return TaskResponseAssigneeSection;
}(SpeakeasyBase));
export { TaskResponseAssigneeSection };
export var TaskResponseAssigneeStatusEnum;
(function (TaskResponseAssigneeStatusEnum) {
    TaskResponseAssigneeStatusEnum["Today"] = "today";
    TaskResponseAssigneeStatusEnum["Upcoming"] = "upcoming";
    TaskResponseAssigneeStatusEnum["Later"] = "later";
    TaskResponseAssigneeStatusEnum["New"] = "new";
    TaskResponseAssigneeStatusEnum["Inbox"] = "inbox";
})(TaskResponseAssigneeStatusEnum || (TaskResponseAssigneeStatusEnum = {}));
// TaskResponseExternal
/**
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
var TaskResponseExternal = /** @class */ (function (_super) {
    __extends(TaskResponseExternal, _super);
    function TaskResponseExternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], TaskResponseExternal.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseExternal.prototype, "gid", void 0);
    return TaskResponseExternal;
}(SpeakeasyBase));
export { TaskResponseExternal };
var TaskResponseMemberships = /** @class */ (function (_super) {
    __extends(TaskResponseMemberships, _super);
    function TaskResponseMemberships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", ProjectCompact)
    ], TaskResponseMemberships.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section" }),
        __metadata("design:type", SectionCompact)
    ], TaskResponseMemberships.prototype, "section", void 0);
    return TaskResponseMemberships;
}(SpeakeasyBase));
export { TaskResponseMemberships };
var TaskResponseParent = /** @class */ (function (_super) {
    __extends(TaskResponseParent, _super);
    function TaskResponseParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseParent.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseParent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseParent.prototype, "resourceType", void 0);
    return TaskResponseParent;
}(SpeakeasyBase));
export { TaskResponseParent };
export var TaskResponseResourceSubtypeEnum;
(function (TaskResponseResourceSubtypeEnum) {
    TaskResponseResourceSubtypeEnum["DefaultTask"] = "default_task";
    TaskResponseResourceSubtypeEnum["Milestone"] = "milestone";
    TaskResponseResourceSubtypeEnum["Section"] = "section";
    TaskResponseResourceSubtypeEnum["Approval"] = "approval";
})(TaskResponseResourceSubtypeEnum || (TaskResponseResourceSubtypeEnum = {}));
var TaskResponseWorkspace = /** @class */ (function (_super) {
    __extends(TaskResponseWorkspace, _super);
    function TaskResponseWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponseWorkspace.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponseWorkspace.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponseWorkspace.prototype, "resourceType", void 0);
    return TaskResponseWorkspace;
}(SpeakeasyBase));
export { TaskResponseWorkspace };
var TaskResponse = /** @class */ (function (_super) {
    __extends(TaskResponse, _super);
    function TaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approval_status" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "approvalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", TaskResponseAssignee)
    ], TaskResponse.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee_section" }),
        __metadata("design:type", TaskResponseAssigneeSection)
    ], TaskResponse.prototype, "assigneeSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee_status" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "assigneeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_by" }),
        __metadata("design:type", UserCompact)
    ], TaskResponse.prototype, "completedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomFieldResponse }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependencies", elemType: AsanaResource }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "dependencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependents", elemType: AsanaResource }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "dependents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "dueAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external" }),
        __metadata("design:type", TaskResponseExternal)
    ], TaskResponse.prototype, "external", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearted" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "hearted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearts", elemType: Like }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "hearts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "htmlNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_rendered_as_separator" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "isRenderedAsSeparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], TaskResponse.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes", elemType: Like }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberships", elemType: TaskResponseMemberships }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "memberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_at" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "modifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_hearts" }),
        __metadata("design:type", Number)
    ], TaskResponse.prototype, "numHearts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_likes" }),
        __metadata("design:type", Number)
    ], TaskResponse.prototype, "numLikes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_subtasks" }),
        __metadata("design:type", Number)
    ], TaskResponse.prototype, "numSubtasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", TaskResponseParent)
    ], TaskResponse.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "permalinkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectCompact }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "projects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "resourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", Date)
    ], TaskResponse.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: TagCompact }),
        __metadata("design:type", Array)
    ], TaskResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", TaskResponseWorkspace)
    ], TaskResponse.prototype, "workspace", void 0);
    return TaskResponse;
}(SpeakeasyBase));
export { TaskResponse };
