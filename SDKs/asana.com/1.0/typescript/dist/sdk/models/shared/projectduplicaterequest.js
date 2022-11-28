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
export var ProjectDuplicateRequestIncludeEnum;
(function (ProjectDuplicateRequestIncludeEnum) {
    ProjectDuplicateRequestIncludeEnum["Members"] = "members";
    ProjectDuplicateRequestIncludeEnum["Notes"] = "notes";
    ProjectDuplicateRequestIncludeEnum["Forms"] = "forms";
    ProjectDuplicateRequestIncludeEnum["TaskNotes"] = "task_notes";
    ProjectDuplicateRequestIncludeEnum["TaskAssignee"] = "task_assignee";
    ProjectDuplicateRequestIncludeEnum["TaskSubtasks"] = "task_subtasks";
    ProjectDuplicateRequestIncludeEnum["TaskAttachments"] = "task_attachments";
    ProjectDuplicateRequestIncludeEnum["TaskDates"] = "task_dates";
    ProjectDuplicateRequestIncludeEnum["TaskDependencies"] = "task_dependencies";
    ProjectDuplicateRequestIncludeEnum["TaskFollowers"] = "task_followers";
    ProjectDuplicateRequestIncludeEnum["TaskTags"] = "task_tags";
    ProjectDuplicateRequestIncludeEnum["TaskProjects"] = "task_projects";
})(ProjectDuplicateRequestIncludeEnum || (ProjectDuplicateRequestIncludeEnum = {}));
// ProjectDuplicateRequestScheduleDates
/**
 * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
**/
var ProjectDuplicateRequestScheduleDates = /** @class */ (function (_super) {
    __extends(ProjectDuplicateRequestScheduleDates, _super);
    function ProjectDuplicateRequestScheduleDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", String)
    ], ProjectDuplicateRequestScheduleDates.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=should_skip_weekends" }),
        __metadata("design:type", Boolean)
    ], ProjectDuplicateRequestScheduleDates.prototype, "shouldSkipWeekends", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", String)
    ], ProjectDuplicateRequestScheduleDates.prototype, "startOn", void 0);
    return ProjectDuplicateRequestScheduleDates;
}(SpeakeasyBase));
export { ProjectDuplicateRequestScheduleDates };
var ProjectDuplicateRequest = /** @class */ (function (_super) {
    __extends(ProjectDuplicateRequest, _super);
    function ProjectDuplicateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=include" }),
        __metadata("design:type", String)
    ], ProjectDuplicateRequest.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectDuplicateRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_dates" }),
        __metadata("design:type", ProjectDuplicateRequestScheduleDates)
    ], ProjectDuplicateRequest.prototype, "scheduleDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], ProjectDuplicateRequest.prototype, "team", void 0);
    return ProjectDuplicateRequest;
}(SpeakeasyBase));
export { ProjectDuplicateRequest };
