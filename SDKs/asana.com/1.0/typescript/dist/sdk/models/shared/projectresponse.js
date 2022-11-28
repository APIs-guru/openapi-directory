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
import { CustomFieldSettingCompact } from "./customfieldsettingcompact";
import { CustomFieldCompact } from "./customfieldcompact";
export var ProjectResponseColorEnum;
(function (ProjectResponseColorEnum) {
    ProjectResponseColorEnum["DarkPink"] = "dark-pink";
    ProjectResponseColorEnum["DarkGreen"] = "dark-green";
    ProjectResponseColorEnum["DarkBlue"] = "dark-blue";
    ProjectResponseColorEnum["DarkRed"] = "dark-red";
    ProjectResponseColorEnum["DarkTeal"] = "dark-teal";
    ProjectResponseColorEnum["DarkBrown"] = "dark-brown";
    ProjectResponseColorEnum["DarkOrange"] = "dark-orange";
    ProjectResponseColorEnum["DarkPurple"] = "dark-purple";
    ProjectResponseColorEnum["DarkWarmGray"] = "dark-warm-gray";
    ProjectResponseColorEnum["LightPink"] = "light-pink";
    ProjectResponseColorEnum["LightGreen"] = "light-green";
    ProjectResponseColorEnum["LightBlue"] = "light-blue";
    ProjectResponseColorEnum["LightRed"] = "light-red";
    ProjectResponseColorEnum["LightTeal"] = "light-teal";
    ProjectResponseColorEnum["LightBrown"] = "light-brown";
    ProjectResponseColorEnum["LightOrange"] = "light-orange";
    ProjectResponseColorEnum["LightPurple"] = "light-purple";
    ProjectResponseColorEnum["LightWarmGray"] = "light-warm-gray";
})(ProjectResponseColorEnum || (ProjectResponseColorEnum = {}));
export var ProjectResponseCurrentStatusColorEnum;
(function (ProjectResponseCurrentStatusColorEnum) {
    ProjectResponseCurrentStatusColorEnum["Green"] = "green";
    ProjectResponseCurrentStatusColorEnum["Yellow"] = "yellow";
    ProjectResponseCurrentStatusColorEnum["Red"] = "red";
    ProjectResponseCurrentStatusColorEnum["Blue"] = "blue";
})(ProjectResponseCurrentStatusColorEnum || (ProjectResponseCurrentStatusColorEnum = {}));
var ProjectResponseCurrentStatus = /** @class */ (function (_super) {
    __extends(ProjectResponseCurrentStatus, _super);
    function ProjectResponseCurrentStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", UserCompact)
    ], ProjectResponseCurrentStatus.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProjectResponseCurrentStatus.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ProjectResponseCurrentStatus.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", UserCompact)
    ], ProjectResponseCurrentStatus.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], ProjectResponseCurrentStatus.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_text" }),
        __metadata("design:type", String)
    ], ProjectResponseCurrentStatus.prototype, "htmlText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_at" }),
        __metadata("design:type", Date)
    ], ProjectResponseCurrentStatus.prototype, "modifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ProjectResponseCurrentStatus.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ProjectResponseCurrentStatus.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProjectResponseCurrentStatus.prototype, "title", void 0);
    return ProjectResponseCurrentStatus;
}(SpeakeasyBase));
export { ProjectResponseCurrentStatus };
export var ProjectResponseDefaultViewEnum;
(function (ProjectResponseDefaultViewEnum) {
    ProjectResponseDefaultViewEnum["List"] = "list";
    ProjectResponseDefaultViewEnum["Board"] = "board";
    ProjectResponseDefaultViewEnum["Calendar"] = "calendar";
    ProjectResponseDefaultViewEnum["Timeline"] = "timeline";
})(ProjectResponseDefaultViewEnum || (ProjectResponseDefaultViewEnum = {}));
export var ProjectResponseIconEnum;
(function (ProjectResponseIconEnum) {
    ProjectResponseIconEnum["List"] = "list";
    ProjectResponseIconEnum["Board"] = "board";
    ProjectResponseIconEnum["Timeline"] = "timeline";
    ProjectResponseIconEnum["Calendar"] = "calendar";
    ProjectResponseIconEnum["Rocket"] = "rocket";
    ProjectResponseIconEnum["People"] = "people";
    ProjectResponseIconEnum["Graph"] = "graph";
    ProjectResponseIconEnum["Star"] = "star";
    ProjectResponseIconEnum["Bug"] = "bug";
    ProjectResponseIconEnum["LightBulb"] = "light_bulb";
    ProjectResponseIconEnum["Globe"] = "globe";
    ProjectResponseIconEnum["Gear"] = "gear";
    ProjectResponseIconEnum["Notebook"] = "notebook";
    ProjectResponseIconEnum["Computer"] = "computer";
    ProjectResponseIconEnum["Check"] = "check";
    ProjectResponseIconEnum["Target"] = "target";
    ProjectResponseIconEnum["Html"] = "html";
    ProjectResponseIconEnum["Megaphone"] = "megaphone";
    ProjectResponseIconEnum["ChatBubbles"] = "chat_bubbles";
    ProjectResponseIconEnum["Briefcase"] = "briefcase";
    ProjectResponseIconEnum["PageLayout"] = "page_layout";
    ProjectResponseIconEnum["MountainFlag"] = "mountain_flag";
    ProjectResponseIconEnum["Puzzle"] = "puzzle";
    ProjectResponseIconEnum["Presentation"] = "presentation";
    ProjectResponseIconEnum["LineAndSymbols"] = "line_and_symbols";
    ProjectResponseIconEnum["SpeedDial"] = "speed_dial";
    ProjectResponseIconEnum["Ribbon"] = "ribbon";
    ProjectResponseIconEnum["Shoe"] = "shoe";
    ProjectResponseIconEnum["ShoppingBasket"] = "shopping_basket";
    ProjectResponseIconEnum["Map"] = "map";
    ProjectResponseIconEnum["Ticket"] = "ticket";
    ProjectResponseIconEnum["Coins"] = "coins";
})(ProjectResponseIconEnum || (ProjectResponseIconEnum = {}));
// ProjectResponseOwner
/**
 * The current owner of the project, may be null.
**/
var ProjectResponseOwner = /** @class */ (function (_super) {
    __extends(ProjectResponseOwner, _super);
    function ProjectResponseOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], ProjectResponseOwner.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectResponseOwner.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ProjectResponseOwner.prototype, "resourceType", void 0);
    return ProjectResponseOwner;
}(SpeakeasyBase));
export { ProjectResponseOwner };
var ProjectResponseTeam = /** @class */ (function (_super) {
    __extends(ProjectResponseTeam, _super);
    function ProjectResponseTeam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], ProjectResponseTeam.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectResponseTeam.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ProjectResponseTeam.prototype, "resourceType", void 0);
    return ProjectResponseTeam;
}(SpeakeasyBase));
export { ProjectResponseTeam };
var ProjectResponseWorkspace = /** @class */ (function (_super) {
    __extends(ProjectResponseWorkspace, _super);
    function ProjectResponseWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], ProjectResponseWorkspace.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectResponseWorkspace.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ProjectResponseWorkspace.prototype, "resourceType", void 0);
    return ProjectResponseWorkspace;
}(SpeakeasyBase));
export { ProjectResponseWorkspace };
var ProjectResponse = /** @class */ (function (_super) {
    __extends(ProjectResponse, _super);
    function ProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], ProjectResponse.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ProjectResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_status" }),
        __metadata("design:type", ProjectResponseCurrentStatus)
    ], ProjectResponse.prototype, "currentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_field_settings", elemType: CustomFieldSettingCompact }),
        __metadata("design:type", Array)
    ], ProjectResponse.prototype, "customFieldSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomFieldCompact }),
        __metadata("design:type", Array)
    ], ProjectResponse.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_view" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "defaultView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], ProjectResponse.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], ProjectResponse.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact }),
        __metadata("design:type", Array)
    ], ProjectResponse.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "htmlNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_template" }),
        __metadata("design:type", Boolean)
    ], ProjectResponse.prototype, "isTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: UserCompact }),
        __metadata("design:type", Array)
    ], ProjectResponse.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_at" }),
        __metadata("design:type", Date)
    ], ProjectResponse.prototype, "modifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", ProjectResponseOwner)
    ], ProjectResponse.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "permalinkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ProjectResponse.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], ProjectResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", Date)
    ], ProjectResponse.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", ProjectResponseTeam)
    ], ProjectResponse.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", ProjectResponseWorkspace)
    ], ProjectResponse.prototype, "workspace", void 0);
    return ProjectResponse;
}(SpeakeasyBase));
export { ProjectResponse };
