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
import { PullRequestMinimal } from "./pullrequestminimal";
import { MinimalRepository } from "./minimalrepository";
export var CheckSuiteConclusionEnum;
(function (CheckSuiteConclusionEnum) {
    CheckSuiteConclusionEnum["Success"] = "success";
    CheckSuiteConclusionEnum["Failure"] = "failure";
    CheckSuiteConclusionEnum["Neutral"] = "neutral";
    CheckSuiteConclusionEnum["Cancelled"] = "cancelled";
    CheckSuiteConclusionEnum["Skipped"] = "skipped";
    CheckSuiteConclusionEnum["TimedOut"] = "timed_out";
    CheckSuiteConclusionEnum["ActionRequired"] = "action_required";
})(CheckSuiteConclusionEnum || (CheckSuiteConclusionEnum = {}));
export var CheckSuiteStatusEnum;
(function (CheckSuiteStatusEnum) {
    CheckSuiteStatusEnum["Queued"] = "queued";
    CheckSuiteStatusEnum["InProgress"] = "in_progress";
    CheckSuiteStatusEnum["Completed"] = "completed";
})(CheckSuiteStatusEnum || (CheckSuiteStatusEnum = {}));
// CheckSuite
/**
 * A suite of checks performed on the code of a given code change
**/
var CheckSuite = /** @class */ (function (_super) {
    __extends(CheckSuite, _super);
    function CheckSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=after" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app" }),
        __metadata("design:type", Map)
    ], CheckSuite.prototype, "app", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=before" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_runs_url" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "checkRunsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusion" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "conclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CheckSuite.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_branch" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "headBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_commit" }),
        __metadata("design:type", SimpleCommit)
    ], CheckSuite.prototype, "headCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_sha" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "headSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CheckSuite.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_check_runs_count" }),
        __metadata("design:type", Number)
    ], CheckSuite.prototype, "latestCheckRunsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_requests", elemType: PullRequestMinimal }),
        __metadata("design:type", Array)
    ], CheckSuite.prototype, "pullRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", MinimalRepository)
    ], CheckSuite.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], CheckSuite.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CheckSuite.prototype, "url", void 0);
    return CheckSuite;
}(SpeakeasyBase));
export { CheckSuite };
