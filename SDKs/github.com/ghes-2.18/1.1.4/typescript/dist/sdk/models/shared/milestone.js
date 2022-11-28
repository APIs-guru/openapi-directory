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
var MilestoneSimpleUser = /** @class */ (function (_super) {
    __extends(MilestoneSimpleUser, _super);
    function MilestoneSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MilestoneSimpleUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], MilestoneSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MilestoneSimpleUser.prototype, "url", void 0);
    return MilestoneSimpleUser;
}(SpeakeasyBase));
export { MilestoneSimpleUser };
export var MilestoneStateEnum;
(function (MilestoneStateEnum) {
    MilestoneStateEnum["Open"] = "open";
    MilestoneStateEnum["Closed"] = "closed";
})(MilestoneStateEnum || (MilestoneStateEnum = {}));
// Milestone
/**
 * A collection of related issues and pull requests.
**/
var Milestone = /** @class */ (function (_super) {
    __extends(Milestone, _super);
    function Milestone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_at" }),
        __metadata("design:type", Date)
    ], Milestone.prototype, "closedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_issues" }),
        __metadata("design:type", Number)
    ], Milestone.prototype, "closedIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Milestone.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", MilestoneSimpleUser)
    ], Milestone.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Milestone.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], Milestone.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Milestone.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Milestone.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels_url" }),
        __metadata("design:type", String)
    ], Milestone.prototype, "labelsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], Milestone.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], Milestone.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open_issues" }),
        __metadata("design:type", Number)
    ], Milestone.prototype, "openIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Milestone.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Milestone.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Milestone.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Milestone.prototype, "url", void 0);
    return Milestone;
}(SpeakeasyBase));
export { Milestone };
