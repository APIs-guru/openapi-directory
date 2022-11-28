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
export var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Queued"] = "queued";
    JobStatusEnum["InProgress"] = "in_progress";
    JobStatusEnum["Completed"] = "completed";
})(JobStatusEnum || (JobStatusEnum = {}));
export var JobStepsStatusEnum;
(function (JobStepsStatusEnum) {
    JobStepsStatusEnum["Queued"] = "queued";
    JobStepsStatusEnum["InProgress"] = "in_progress";
    JobStepsStatusEnum["Completed"] = "completed";
})(JobStepsStatusEnum || (JobStepsStatusEnum = {}));
var JobSteps = /** @class */ (function (_super) {
    __extends(JobSteps, _super);
    function JobSteps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], JobSteps.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusion" }),
        __metadata("design:type", String)
    ], JobSteps.prototype, "conclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], JobSteps.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], JobSteps.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], JobSteps.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], JobSteps.prototype, "status", void 0);
    return JobSteps;
}(SpeakeasyBase));
export { JobSteps };
// Job
/**
 * Information of a job execution in a workflow run
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_run_url" }),
        __metadata("design:type", String)
    ], Job.prototype, "checkRunUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], Job.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusion" }),
        __metadata("design:type", String)
    ], Job.prototype, "conclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_sha" }),
        __metadata("design:type", String)
    ], Job.prototype, "headSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Job.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Job.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Job.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], Job.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_id" }),
        __metadata("design:type", Number)
    ], Job.prototype, "runId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_url" }),
        __metadata("design:type", String)
    ], Job.prototype, "runUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], Job.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Job.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steps", elemType: JobSteps }),
        __metadata("design:type", Array)
    ], Job.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Job.prototype, "url", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
