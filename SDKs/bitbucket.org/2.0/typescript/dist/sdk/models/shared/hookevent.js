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
export var HookEventEventEnum;
(function (HookEventEventEnum) {
    HookEventEventEnum["PullrequestUnapproved"] = "pullrequest:unapproved";
    HookEventEventEnum["IssueCommentCreated"] = "issue:comment_created";
    HookEventEventEnum["RepoImported"] = "repo:imported";
    HookEventEventEnum["RepoCreated"] = "repo:created";
    HookEventEventEnum["RepoCommitCommentCreated"] = "repo:commit_comment_created";
    HookEventEventEnum["PullrequestApproved"] = "pullrequest:approved";
    HookEventEventEnum["PullrequestCommentUpdated"] = "pullrequest:comment_updated";
    HookEventEventEnum["IssueUpdated"] = "issue:updated";
    HookEventEventEnum["ProjectUpdated"] = "project:updated";
    HookEventEventEnum["RepoDeleted"] = "repo:deleted";
    HookEventEventEnum["PullrequestChangesRequestCreated"] = "pullrequest:changes_request_created";
    HookEventEventEnum["PullrequestCommentCreated"] = "pullrequest:comment_created";
    HookEventEventEnum["RepoCommitStatusUpdated"] = "repo:commit_status_updated";
    HookEventEventEnum["PullrequestUpdated"] = "pullrequest:updated";
    HookEventEventEnum["IssueCreated"] = "issue:created";
    HookEventEventEnum["RepoFork"] = "repo:fork";
    HookEventEventEnum["PullrequestCommentDeleted"] = "pullrequest:comment_deleted";
    HookEventEventEnum["RepoCommitStatusCreated"] = "repo:commit_status_created";
    HookEventEventEnum["RepoUpdated"] = "repo:updated";
    HookEventEventEnum["PullrequestRejected"] = "pullrequest:rejected";
    HookEventEventEnum["PullrequestFulfilled"] = "pullrequest:fulfilled";
    HookEventEventEnum["PullrequestCreated"] = "pullrequest:created";
    HookEventEventEnum["PullrequestChangesRequestRemoved"] = "pullrequest:changes_request_removed";
    HookEventEventEnum["RepoTransfer"] = "repo:transfer";
    HookEventEventEnum["RepoPush"] = "repo:push";
})(HookEventEventEnum || (HookEventEventEnum = {}));
// HookEvent
/**
 * An event, associated with a resource or subject type.
**/
var HookEvent = /** @class */ (function (_super) {
    __extends(HookEvent, _super);
    function HookEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], HookEvent.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], HookEvent.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], HookEvent.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], HookEvent.prototype, "label", void 0);
    return HookEvent;
}(SpeakeasyBase));
export { HookEvent };
