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
import { SimpleCommit } from "./simplecommit";
import { MinimalRepository } from "./minimalrepository";
import { PullRequestMinimal } from "./pullrequestminimal";
// WorkflowRun
/**
 * An invocation of a workflow
**/
var WorkflowRun = /** @class */ (function (_super) {
    __extends(WorkflowRun, _super);
    function WorkflowRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifacts_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "artifactsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancel_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "cancelUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_suite_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "checkSuiteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusion" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "conclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], WorkflowRun.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_branch" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "headBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_commit" }),
        __metadata("design:type", SimpleCommit)
    ], WorkflowRun.prototype, "headCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_repository" }),
        __metadata("design:type", MinimalRepository)
    ], WorkflowRun.prototype, "headRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_repository_id" }),
        __metadata("design:type", Number)
    ], WorkflowRun.prototype, "headRepositoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_sha" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "headSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], WorkflowRun.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "jobsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logs_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "logsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_requests", elemType: PullRequestMinimal }),
        __metadata("design:type", Array)
    ], WorkflowRun.prototype, "pullRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", MinimalRepository)
    ], WorkflowRun.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rerun_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "rerunUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_number" }),
        __metadata("design:type", Number)
    ], WorkflowRun.prototype, "runNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], WorkflowRun.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflow_id" }),
        __metadata("design:type", Number)
    ], WorkflowRun.prototype, "workflowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflow_url" }),
        __metadata("design:type", String)
    ], WorkflowRun.prototype, "workflowUrl", void 0);
    return WorkflowRun;
}(SpeakeasyBase));
export { WorkflowRun };
