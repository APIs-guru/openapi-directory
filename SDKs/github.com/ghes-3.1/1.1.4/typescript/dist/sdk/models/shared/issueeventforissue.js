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
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
// IssueEventForIssue
/**
 * Issue Event for Issue
**/
var IssueEventForIssue = /** @class */ (function (_super) {
    __extends(IssueEventForIssue, _super);
    function IssueEventForIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actor" }),
        __metadata("design:type", SimpleUser)
    ], IssueEventForIssue.prototype, "actor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_association" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "authorAssociation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_html" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "bodyHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body_text" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "bodyText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_id" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "commitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_url" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "commitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssueEventForIssue.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_url" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "issueUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lock_reason" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "lockReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request_url" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "pullRequestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submitted_at" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "submittedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IssueEventForIssue.prototype, "url", void 0);
    return IssueEventForIssue;
}(SpeakeasyBase));
export { IssueEventForIssue };
