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
export var ProjectRequestColorEnum;
(function (ProjectRequestColorEnum) {
    ProjectRequestColorEnum["DarkPink"] = "dark-pink";
    ProjectRequestColorEnum["DarkGreen"] = "dark-green";
    ProjectRequestColorEnum["DarkBlue"] = "dark-blue";
    ProjectRequestColorEnum["DarkRed"] = "dark-red";
    ProjectRequestColorEnum["DarkTeal"] = "dark-teal";
    ProjectRequestColorEnum["DarkBrown"] = "dark-brown";
    ProjectRequestColorEnum["DarkOrange"] = "dark-orange";
    ProjectRequestColorEnum["DarkPurple"] = "dark-purple";
    ProjectRequestColorEnum["DarkWarmGray"] = "dark-warm-gray";
    ProjectRequestColorEnum["LightPink"] = "light-pink";
    ProjectRequestColorEnum["LightGreen"] = "light-green";
    ProjectRequestColorEnum["LightBlue"] = "light-blue";
    ProjectRequestColorEnum["LightRed"] = "light-red";
    ProjectRequestColorEnum["LightTeal"] = "light-teal";
    ProjectRequestColorEnum["LightBrown"] = "light-brown";
    ProjectRequestColorEnum["LightOrange"] = "light-orange";
    ProjectRequestColorEnum["LightPurple"] = "light-purple";
    ProjectRequestColorEnum["LightWarmGray"] = "light-warm-gray";
})(ProjectRequestColorEnum || (ProjectRequestColorEnum = {}));
export var ProjectRequestCurrentStatusColorEnum;
(function (ProjectRequestCurrentStatusColorEnum) {
    ProjectRequestCurrentStatusColorEnum["Green"] = "green";
    ProjectRequestCurrentStatusColorEnum["Yellow"] = "yellow";
    ProjectRequestCurrentStatusColorEnum["Red"] = "red";
    ProjectRequestCurrentStatusColorEnum["Blue"] = "blue";
})(ProjectRequestCurrentStatusColorEnum || (ProjectRequestCurrentStatusColorEnum = {}));
var ProjectRequestCurrentStatusInput = /** @class */ (function (_super) {
    __extends(ProjectRequestCurrentStatusInput, _super);
    function ProjectRequestCurrentStatusInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", UserCompactInput)
    ], ProjectRequestCurrentStatusInput.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", UserCompactInput)
    ], ProjectRequestCurrentStatusInput.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_text" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "htmlText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProjectRequestCurrentStatusInput.prototype, "title", void 0);
    return ProjectRequestCurrentStatusInput;
}(SpeakeasyBase));
export { ProjectRequestCurrentStatusInput };
export var ProjectRequestDefaultViewEnum;
(function (ProjectRequestDefaultViewEnum) {
    ProjectRequestDefaultViewEnum["List"] = "list";
    ProjectRequestDefaultViewEnum["Board"] = "board";
    ProjectRequestDefaultViewEnum["Calendar"] = "calendar";
    ProjectRequestDefaultViewEnum["Timeline"] = "timeline";
})(ProjectRequestDefaultViewEnum || (ProjectRequestDefaultViewEnum = {}));
var ProjectRequestWorkspaceInput = /** @class */ (function (_super) {
    __extends(ProjectRequestWorkspaceInput, _super);
    function ProjectRequestWorkspaceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectRequestWorkspaceInput.prototype, "name", void 0);
    return ProjectRequestWorkspaceInput;
}(SpeakeasyBase));
export { ProjectRequestWorkspaceInput };
var ProjectRequestInput = /** @class */ (function (_super) {
    __extends(ProjectRequestInput, _super);
    function ProjectRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], ProjectRequestInput.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_status" }),
        __metadata("design:type", ProjectRequestCurrentStatusInput)
    ], ProjectRequestInput.prototype, "currentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], ProjectRequestInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_view" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "defaultView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], ProjectRequestInput.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], ProjectRequestInput.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "htmlNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], ProjectRequestInput.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ProjectRequestInput.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", Date)
    ], ProjectRequestInput.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], ProjectRequestInput.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", ProjectRequestWorkspaceInput)
    ], ProjectRequestInput.prototype, "workspace", void 0);
    return ProjectRequestInput;
}(SpeakeasyBase));
export { ProjectRequestInput };
