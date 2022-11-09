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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ApplicantSocialLinks = /** @class */ (function (_super) {
    __extends(ApplicantSocialLinks, _super);
    function ApplicantSocialLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApplicantSocialLinks.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ApplicantSocialLinks.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ApplicantSocialLinks.prototype, "url", void 0);
    return ApplicantSocialLinks;
}(SpeakeasyBase));
export { ApplicantSocialLinks };
export var ApplicantWebsitesTypeEnum;
(function (ApplicantWebsitesTypeEnum) {
    ApplicantWebsitesTypeEnum["Primary"] = "primary";
    ApplicantWebsitesTypeEnum["Secondary"] = "secondary";
    ApplicantWebsitesTypeEnum["Work"] = "work";
    ApplicantWebsitesTypeEnum["Personal"] = "personal";
    ApplicantWebsitesTypeEnum["Other"] = "other";
})(ApplicantWebsitesTypeEnum || (ApplicantWebsitesTypeEnum = {}));
var ApplicantWebsites = /** @class */ (function (_super) {
    __extends(ApplicantWebsites, _super);
    function ApplicantWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApplicantWebsites.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ApplicantWebsites.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ApplicantWebsites.prototype, "url", void 0);
    return ApplicantWebsites;
}(SpeakeasyBase));
export { ApplicantWebsites };
var Applicant = /** @class */ (function (_super) {
    __extends(Applicant, _super);
    function Applicant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addresses", elemType: shared.Address }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "addresses", void 0);
    __decorate([
        Metadata({ data: "json, name=anonymized" }),
        __metadata("design:type", Boolean)
    ], Applicant.prototype, "anonymized", void 0);
    __decorate([
        Metadata({ data: "json, name=applications" }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "applications", void 0);
    __decorate([
        Metadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Applicant.prototype, "archived", void 0);
    __decorate([
        Metadata({ data: "json, name=birthday" }),
        __metadata("design:type", Date)
    ], Applicant.prototype, "birthday", void 0);
    __decorate([
        Metadata({ data: "json, name=confidential" }),
        __metadata("design:type", Boolean)
    ], Applicant.prototype, "confidential", void 0);
    __decorate([
        Metadata({ data: "json, name=coordinator_id" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "coordinatorId", void 0);
    __decorate([
        Metadata({ data: "json, name=cover_letter" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "coverLetter", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Applicant.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=cv_url" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "cvUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Applicant.prototype, "deleted", void 0);
    __decorate([
        Metadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", Date)
    ], Applicant.prototype, "deletedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=deleted_by" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "deletedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=emails", elemType: shared.Email }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "emails", void 0);
    __decorate([
        Metadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "json, name=followers" }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "followers", void 0);
    __decorate([
        Metadata({ data: "json, name=headline" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "headline", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=initials" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "initials", void 0);
    __decorate([
        Metadata({ data: "json, name=job_url" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "jobUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=last_interaction_at" }),
        __metadata("design:type", Date)
    ], Applicant.prototype, "lastInteractionAt", void 0);
    __decorate([
        Metadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "middleName", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "ownerId", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "phoneNumbers", void 0);
    __decorate([
        Metadata({ data: "json, name=photo_url" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "photoUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=position_id" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "positionId", void 0);
    __decorate([
        Metadata({ data: "json, name=record_url" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "recordUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=recruiter_id" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "recruiterId", void 0);
    __decorate([
        Metadata({ data: "json, name=rejected_at" }),
        __metadata("design:type", Date)
    ], Applicant.prototype, "rejectedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=social_links", elemType: shared.ApplicantSocialLinks }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "socialLinks", void 0);
    __decorate([
        Metadata({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "sourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=sourced_by" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "sourcedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=sources" }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "sources", void 0);
    __decorate([
        Metadata({ data: "json, name=stage_id" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "stageId", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Applicant.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Applicant.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=websites", elemType: shared.ApplicantWebsites }),
        __metadata("design:type", Array)
    ], Applicant.prototype, "websites", void 0);
    return Applicant;
}(SpeakeasyBase));
export { Applicant };
