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
import * as shared from "../shared";
var SearchTasksForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(SearchTasksForWorkspacePathParams, _super);
    function SearchTasksForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return SearchTasksForWorkspacePathParams;
}(SpeakeasyBase));
export { SearchTasksForWorkspacePathParams };
export var SearchTasksForWorkspaceResourceSubtypeEnum;
(function (SearchTasksForWorkspaceResourceSubtypeEnum) {
    SearchTasksForWorkspaceResourceSubtypeEnum["DefaultTask"] = "default_task";
    SearchTasksForWorkspaceResourceSubtypeEnum["Milestone"] = "milestone";
})(SearchTasksForWorkspaceResourceSubtypeEnum || (SearchTasksForWorkspaceResourceSubtypeEnum = {}));
export var SearchTasksForWorkspaceSortByEnum;
(function (SearchTasksForWorkspaceSortByEnum) {
    SearchTasksForWorkspaceSortByEnum["DueDate"] = "due_date";
    SearchTasksForWorkspaceSortByEnum["CreatedAt"] = "created_at";
    SearchTasksForWorkspaceSortByEnum["CompletedAt"] = "completed_at";
    SearchTasksForWorkspaceSortByEnum["Likes"] = "likes";
    SearchTasksForWorkspaceSortByEnum["ModifiedAt"] = "modified_at";
})(SearchTasksForWorkspaceSortByEnum || (SearchTasksForWorkspaceSortByEnum = {}));
var SearchTasksForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(SearchTasksForWorkspaceQueryParams, _super);
    function SearchTasksForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assigned_by.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "assignedByAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assigned_by.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "assignedByNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "assigneeAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignee.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "assigneeNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commented_on_by.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "commentedOnByAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commented_on_by.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "commentedOnByNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed" }),
        __metadata("design:type", Boolean)
    ], SearchTasksForWorkspaceQueryParams.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_at.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "completedAtAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_at.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "completedAtBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_on" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "completedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_on.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "completedOnAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_on.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "completedOnBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "createdAtAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "createdAtBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_by.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "createdByAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_by.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "createdByNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_on" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_on.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "createdOnAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_on.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "createdOnBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "dueAtAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "dueAtBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_on" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_on.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "dueOnAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_on.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "dueOnBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=followers.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "followersAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=followers.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "followersNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_attachment" }),
        __metadata("design:type", Boolean)
    ], SearchTasksForWorkspaceQueryParams.prototype, "hasAttachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_blocked" }),
        __metadata("design:type", Boolean)
    ], SearchTasksForWorkspaceQueryParams.prototype, "isBlocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_blocking" }),
        __metadata("design:type", Boolean)
    ], SearchTasksForWorkspaceQueryParams.prototype, "isBlocking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_subtask" }),
        __metadata("design:type", Boolean)
    ], SearchTasksForWorkspaceQueryParams.prototype, "isSubtask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liked_by.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "likedByAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liked_by.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "likedByNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_at.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "modifiedAtAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_at.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "modifiedAtBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_on" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "modifiedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_on.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "modifiedOnAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_on.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "modifiedOnBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], SearchTasksForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], SearchTasksForWorkspaceQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=portfolios.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "portfoliosAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects.all" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "projectsAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "projectsAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "projectsNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_subtype" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "resourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sections.all" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "sectionsAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sections.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "sectionsAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sections.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "sectionsNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_ascending" }),
        __metadata("design:type", Boolean)
    ], SearchTasksForWorkspaceQueryParams.prototype, "sortAscending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_on" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_on.after" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "startOnAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_on.before" }),
        __metadata("design:type", Date)
    ], SearchTasksForWorkspaceQueryParams.prototype, "startOnBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags.all" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "tagsAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "tagsAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags.not" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "tagsNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teams.any" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "teamsAny", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceQueryParams.prototype, "text", void 0);
    return SearchTasksForWorkspaceQueryParams;
}(SpeakeasyBase));
export { SearchTasksForWorkspaceQueryParams };
var SearchTasksForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchTasksForWorkspace200ApplicationJson, _super);
    function SearchTasksForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact }),
        __metadata("design:type", Array)
    ], SearchTasksForWorkspace200ApplicationJson.prototype, "data", void 0);
    return SearchTasksForWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { SearchTasksForWorkspace200ApplicationJson };
var SearchTasksForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(SearchTasksForWorkspaceRequest, _super);
    function SearchTasksForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchTasksForWorkspacePathParams)
    ], SearchTasksForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchTasksForWorkspaceQueryParams)
    ], SearchTasksForWorkspaceRequest.prototype, "queryParams", void 0);
    return SearchTasksForWorkspaceRequest;
}(SpeakeasyBase));
export { SearchTasksForWorkspaceRequest };
var SearchTasksForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(SearchTasksForWorkspaceResponse, _super);
    function SearchTasksForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchTasksForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], SearchTasksForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchTasksForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchTasksForWorkspace200ApplicationJson)
    ], SearchTasksForWorkspaceResponse.prototype, "searchTasksForWorkspace200ApplicationJsonObject", void 0);
    return SearchTasksForWorkspaceResponse;
}(SpeakeasyBase));
export { SearchTasksForWorkspaceResponse };
