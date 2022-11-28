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
import { Address } from "./address";
import { Department } from "./department";
import { CurrencyEnum } from "./currencyenum";
import { JobStatusEnum } from "./jobstatusenum";
// JobBranch
/**
 * Details of the branch for which the job is created.
**/
var JobBranch = /** @class */ (function (_super) {
    __extends(JobBranch, _super);
    function JobBranch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], JobBranch.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], JobBranch.prototype, "name", void 0);
    return JobBranch;
}(SpeakeasyBase));
export { JobBranch };
export var JobEmploymentTermsEnum;
(function (JobEmploymentTermsEnum) {
    JobEmploymentTermsEnum["FullTime"] = "full-time";
    JobEmploymentTermsEnum["PartTime"] = "part-time";
    JobEmploymentTermsEnum["Intership"] = "intership";
    JobEmploymentTermsEnum["Contractor"] = "contractor";
    JobEmploymentTermsEnum["Employee"] = "employee";
    JobEmploymentTermsEnum["Freelance"] = "freelance";
    JobEmploymentTermsEnum["Temp"] = "temp";
    JobEmploymentTermsEnum["Seasonal"] = "seasonal";
    JobEmploymentTermsEnum["Volunteer"] = "volunteer";
    JobEmploymentTermsEnum["Other"] = "other";
})(JobEmploymentTermsEnum || (JobEmploymentTermsEnum = {}));
var JobSalary = /** @class */ (function (_super) {
    __extends(JobSalary, _super);
    function JobSalary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], JobSalary.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], JobSalary.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=min" }),
        __metadata("design:type", Number)
    ], JobSalary.prototype, "min", void 0);
    return JobSalary;
}(SpeakeasyBase));
export { JobSalary };
export var JobVisibilityEnum;
(function (JobVisibilityEnum) {
    JobVisibilityEnum["Public"] = "public";
    JobVisibilityEnum["Internal"] = "internal";
})(JobVisibilityEnum || (JobVisibilityEnum = {}));
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], Job.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_to_employees" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "availableToEmployees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocks" }),
        __metadata("design:type", Array)
    ], Job.prototype, "blocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", JobBranch)
    ], Job.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closing" }),
        __metadata("design:type", String)
    ], Job.prototype, "closing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closing_date" }),
        __metadata("design:type", Date)
    ], Job.prototype, "closingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closing_html" }),
        __metadata("design:type", String)
    ], Job.prototype, "closingHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Job.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidential" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "confidential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Job.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Job.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", Department)
    ], Job.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Job.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_html" }),
        __metadata("design:type", String)
    ], Job.prototype, "descriptionHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_terms" }),
        __metadata("design:type", String)
    ], Job.prototype, "employmentTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experience" }),
        __metadata("design:type", String)
    ], Job.prototype, "experience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", Array)
    ], Job.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiring_managers" }),
        __metadata("design:type", Array)
    ], Job.prototype, "hiringManagers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Job.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job_portal_url" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobPortalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Job.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Job.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_at" }),
        __metadata("design:type", Date)
    ], Job.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record_url" }),
        __metadata("design:type", String)
    ], Job.prototype, "recordUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recruiters" }),
        __metadata("design:type", Array)
    ], Job.prototype, "recruiters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remote" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "remote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requisition_id" }),
        __metadata("design:type", String)
    ], Job.prototype, "requisitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salary" }),
        __metadata("design:type", JobSalary)
    ], Job.prototype, "salary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], Job.prototype, "sequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Job.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Job.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Job.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Job.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Job.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Job.prototype, "updatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Job.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], Job.prototype, "visibility", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
