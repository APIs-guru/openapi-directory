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
import { CurrencyEnum } from "./currencyenum";
import { PaymentUnitEnum } from "./paymentunitenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { GenderEnum } from "./genderenum";
import { PhoneNumber } from "./phonenumber";
export var EmployeeCompensationsFlsaStatusEnum;
(function (EmployeeCompensationsFlsaStatusEnum) {
    EmployeeCompensationsFlsaStatusEnum["Exempt"] = "exempt";
    EmployeeCompensationsFlsaStatusEnum["SalariedNonexempt"] = "salaried-nonexempt";
    EmployeeCompensationsFlsaStatusEnum["Nonexempt"] = "nonexempt";
    EmployeeCompensationsFlsaStatusEnum["Owner"] = "owner";
})(EmployeeCompensationsFlsaStatusEnum || (EmployeeCompensationsFlsaStatusEnum = {}));
var EmployeeCompensations = /** @class */ (function (_super) {
    __extends(EmployeeCompensations, _super);
    function EmployeeCompensations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], EmployeeCompensations.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effective_date" }),
        __metadata("design:type", String)
    ], EmployeeCompensations.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flsa_status" }),
        __metadata("design:type", String)
    ], EmployeeCompensations.prototype, "flsaStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EmployeeCompensations.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job_id" }),
        __metadata("design:type", String)
    ], EmployeeCompensations.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_unit" }),
        __metadata("design:type", String)
    ], EmployeeCompensations.prototype, "paymentUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], EmployeeCompensations.prototype, "rate", void 0);
    return EmployeeCompensations;
}(SpeakeasyBase));
export { EmployeeCompensations };
export var EmployeeEmploymentRoleSubTypeEnum;
(function (EmployeeEmploymentRoleSubTypeEnum) {
    EmployeeEmploymentRoleSubTypeEnum["FullTime"] = "full_time";
    EmployeeEmploymentRoleSubTypeEnum["PartTime"] = "part_time";
    EmployeeEmploymentRoleSubTypeEnum["Hourly"] = "hourly";
})(EmployeeEmploymentRoleSubTypeEnum || (EmployeeEmploymentRoleSubTypeEnum = {}));
export var EmployeeEmploymentRoleTypeEnum;
(function (EmployeeEmploymentRoleTypeEnum) {
    EmployeeEmploymentRoleTypeEnum["Contractor"] = "contractor";
    EmployeeEmploymentRoleTypeEnum["Employee"] = "employee";
    EmployeeEmploymentRoleTypeEnum["Freelance"] = "freelance";
    EmployeeEmploymentRoleTypeEnum["Temp"] = "temp";
    EmployeeEmploymentRoleTypeEnum["Intership"] = "intership";
    EmployeeEmploymentRoleTypeEnum["Other"] = "other";
})(EmployeeEmploymentRoleTypeEnum || (EmployeeEmploymentRoleTypeEnum = {}));
var EmployeeEmploymentRole = /** @class */ (function (_super) {
    __extends(EmployeeEmploymentRole, _super);
    function EmployeeEmploymentRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_type" }),
        __metadata("design:type", String)
    ], EmployeeEmploymentRole.prototype, "subType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EmployeeEmploymentRole.prototype, "type", void 0);
    return EmployeeEmploymentRole;
}(SpeakeasyBase));
export { EmployeeEmploymentRole };
export var EmployeeEmploymentStatusEnum;
(function (EmployeeEmploymentStatusEnum) {
    EmployeeEmploymentStatusEnum["Active"] = "active";
    EmployeeEmploymentStatusEnum["Inactive"] = "inactive";
    EmployeeEmploymentStatusEnum["Terminated"] = "terminated";
    EmployeeEmploymentStatusEnum["Other"] = "other";
})(EmployeeEmploymentStatusEnum || (EmployeeEmploymentStatusEnum = {}));
var EmployeeJobs = /** @class */ (function (_super) {
    __extends(EmployeeJobs, _super);
    function EmployeeJobs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensation_rate" }),
        __metadata("design:type", Number)
    ], EmployeeJobs.prototype, "compensationRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], EmployeeJobs.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], EmployeeJobs.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", Date)
    ], EmployeeJobs.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hired_at" }),
        __metadata("design:type", Date)
    ], EmployeeJobs.prototype, "hiredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EmployeeJobs.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_primary" }),
        __metadata("design:type", Boolean)
    ], EmployeeJobs.prototype, "isPrimary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Address)
    ], EmployeeJobs.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_unit" }),
        __metadata("design:type", String)
    ], EmployeeJobs.prototype, "paymentUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], EmployeeJobs.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", Date)
    ], EmployeeJobs.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EmployeeJobs.prototype, "title", void 0);
    return EmployeeJobs;
}(SpeakeasyBase));
export { EmployeeJobs };
var EmployeeManager = /** @class */ (function (_super) {
    __extends(EmployeeManager, _super);
    function EmployeeManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EmployeeManager.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], EmployeeManager.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EmployeeManager.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], EmployeeManager.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EmployeeManager.prototype, "name", void 0);
    return EmployeeManager;
}(SpeakeasyBase));
export { EmployeeManager };
var EmployeePartner = /** @class */ (function (_super) {
    __extends(EmployeePartner, _super);
    function EmployeePartner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthday" }),
        __metadata("design:type", Date)
    ], EmployeePartner.prototype, "birthday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deceased_on" }),
        __metadata("design:type", Date)
    ], EmployeePartner.prototype, "deceasedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], EmployeePartner.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], EmployeePartner.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EmployeePartner.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initials" }),
        __metadata("design:type", String)
    ], EmployeePartner.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], EmployeePartner.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], EmployeePartner.prototype, "middleName", void 0);
    return EmployeePartner;
}(SpeakeasyBase));
export { EmployeePartner };
var EmployeeSocialLinks = /** @class */ (function (_super) {
    __extends(EmployeeSocialLinks, _super);
    function EmployeeSocialLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EmployeeSocialLinks.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EmployeeSocialLinks.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EmployeeSocialLinks.prototype, "url", void 0);
    return EmployeeSocialLinks;
}(SpeakeasyBase));
export { EmployeeSocialLinks };
// EmployeeTeam
/**
 * The team the user is currently in.
**/
var EmployeeTeam = /** @class */ (function (_super) {
    __extends(EmployeeTeam, _super);
    function EmployeeTeam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EmployeeTeam.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EmployeeTeam.prototype, "name", void 0);
    return EmployeeTeam;
}(SpeakeasyBase));
export { EmployeeTeam };
var EmployeeCompensationsInput = /** @class */ (function (_super) {
    __extends(EmployeeCompensationsInput, _super);
    function EmployeeCompensationsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], EmployeeCompensationsInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effective_date" }),
        __metadata("design:type", String)
    ], EmployeeCompensationsInput.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flsa_status" }),
        __metadata("design:type", String)
    ], EmployeeCompensationsInput.prototype, "flsaStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_unit" }),
        __metadata("design:type", String)
    ], EmployeeCompensationsInput.prototype, "paymentUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], EmployeeCompensationsInput.prototype, "rate", void 0);
    return EmployeeCompensationsInput;
}(SpeakeasyBase));
export { EmployeeCompensationsInput };
var EmployeeJobsInput = /** @class */ (function (_super) {
    __extends(EmployeeJobsInput, _super);
    function EmployeeJobsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensation_rate" }),
        __metadata("design:type", Number)
    ], EmployeeJobsInput.prototype, "compensationRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], EmployeeJobsInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", Date)
    ], EmployeeJobsInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hired_at" }),
        __metadata("design:type", Date)
    ], EmployeeJobsInput.prototype, "hiredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_primary" }),
        __metadata("design:type", Boolean)
    ], EmployeeJobsInput.prototype, "isPrimary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Address)
    ], EmployeeJobsInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_unit" }),
        __metadata("design:type", String)
    ], EmployeeJobsInput.prototype, "paymentUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], EmployeeJobsInput.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", Date)
    ], EmployeeJobsInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EmployeeJobsInput.prototype, "title", void 0);
    return EmployeeJobsInput;
}(SpeakeasyBase));
export { EmployeeJobsInput };
var EmployeeManagerInput = /** @class */ (function (_super) {
    __extends(EmployeeManagerInput, _super);
    function EmployeeManagerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EmployeeManagerInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], EmployeeManagerInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], EmployeeManagerInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EmployeeManagerInput.prototype, "name", void 0);
    return EmployeeManagerInput;
}(SpeakeasyBase));
export { EmployeeManagerInput };
var EmployeePartnerInput = /** @class */ (function (_super) {
    __extends(EmployeePartnerInput, _super);
    function EmployeePartnerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthday" }),
        __metadata("design:type", Date)
    ], EmployeePartnerInput.prototype, "birthday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deceased_on" }),
        __metadata("design:type", Date)
    ], EmployeePartnerInput.prototype, "deceasedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], EmployeePartnerInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], EmployeePartnerInput.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initials" }),
        __metadata("design:type", String)
    ], EmployeePartnerInput.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], EmployeePartnerInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], EmployeePartnerInput.prototype, "middleName", void 0);
    return EmployeePartnerInput;
}(SpeakeasyBase));
export { EmployeePartnerInput };
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], Employee.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthday" }),
        __metadata("design:type", Date)
    ], Employee.prototype, "birthday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], Employee.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], Employee.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensations", elemType: EmployeeCompensations }),
        __metadata("design:type", Array)
    ], Employee.prototype, "compensations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_of_birth" }),
        __metadata("design:type", String)
    ], Employee.prototype, "countryOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Employee.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Employee.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], Employee.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deceased_on" }),
        __metadata("design:type", Date)
    ], Employee.prototype, "deceasedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Employee.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], Employee.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department_id" }),
        __metadata("design:type", String)
    ], Employee.prototype, "departmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Employee.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dietary_preference" }),
        __metadata("design:type", String)
    ], Employee.prototype, "dietaryPreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct_reports" }),
        __metadata("design:type", Array)
    ], Employee.prototype, "directReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], Employee.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=division" }),
        __metadata("design:type", String)
    ], Employee.prototype, "division", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], Employee.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_number" }),
        __metadata("design:type", String)
    ], Employee.prototype, "employeeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_end_date" }),
        __metadata("design:type", String)
    ], Employee.prototype, "employmentEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_role" }),
        __metadata("design:type", EmployeeEmploymentRole)
    ], Employee.prototype, "employmentRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_start_date" }),
        __metadata("design:type", String)
    ], Employee.prototype, "employmentStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_status" }),
        __metadata("design:type", String)
    ], Employee.prototype, "employmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Employee.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=food_allergies" }),
        __metadata("design:type", Array)
    ], Employee.prototype, "foodAllergies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Employee.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Employee.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initials" }),
        __metadata("design:type", String)
    ], Employee.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs", elemType: EmployeeJobs }),
        __metadata("design:type", Array)
    ], Employee.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], Employee.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Employee.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manager" }),
        __metadata("design:type", EmployeeManager)
    ], Employee.prototype, "manager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marital_status" }),
        __metadata("design:type", String)
    ], Employee.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], Employee.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nationalities" }),
        __metadata("design:type", Array)
    ], Employee.prototype, "nationalities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partner" }),
        __metadata("design:type", EmployeePartner)
    ], Employee.prototype, "partner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], Employee.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photo_url" }),
        __metadata("design:type", String)
    ], Employee.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], Employee.prototype, "preferredLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred_name" }),
        __metadata("design:type", String)
    ], Employee.prototype, "preferredName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pronouns" }),
        __metadata("design:type", String)
    ], Employee.prototype, "pronouns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record_url" }),
        __metadata("design:type", String)
    ], Employee.prototype, "recordUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], Employee.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salutation" }),
        __metadata("design:type", String)
    ], Employee.prototype, "salutation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_links", elemType: EmployeeSocialLinks }),
        __metadata("design:type", Array)
    ], Employee.prototype, "socialLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_security_number" }),
        __metadata("design:type", String)
    ], Employee.prototype, "socialSecurityNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Employee.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], Employee.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Employee.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], Employee.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_id" }),
        __metadata("design:type", String)
    ], Employee.prototype, "taxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", EmployeeTeam)
    ], Employee.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Employee.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Employee.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Employee.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Employee.prototype, "updatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=works_remote" }),
        __metadata("design:type", Boolean)
    ], Employee.prototype, "worksRemote", void 0);
    return Employee;
}(SpeakeasyBase));
export { Employee };
var EmployeeInput = /** @class */ (function (_super) {
    __extends(EmployeeInput, _super);
    function EmployeeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthday" }),
        __metadata("design:type", Date)
    ], EmployeeInput.prototype, "birthday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensations", elemType: EmployeeCompensationsInput }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "compensations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_of_birth" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "countryOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deceased_on" }),
        __metadata("design:type", Date)
    ], EmployeeInput.prototype, "deceasedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], EmployeeInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department_id" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "departmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dietary_preference" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "dietaryPreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct_reports" }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "directReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=division" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "division", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_number" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "employeeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_end_date" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "employmentEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_role" }),
        __metadata("design:type", EmployeeEmploymentRole)
    ], EmployeeInput.prototype, "employmentRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_start_date" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "employmentStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_status" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "employmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=food_allergies" }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "foodAllergies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initials" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs", elemType: EmployeeJobsInput }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manager" }),
        __metadata("design:type", EmployeeManagerInput)
    ], EmployeeInput.prototype, "manager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marital_status" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "maritalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nationalities" }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "nationalities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partner" }),
        __metadata("design:type", EmployeePartnerInput)
    ], EmployeeInput.prototype, "partner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photo_url" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "preferredLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred_name" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "preferredName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pronouns" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "pronouns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record_url" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "recordUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salutation" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "salutation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_links", elemType: EmployeeSocialLinks }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "socialLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_security_number" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "socialSecurityNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], EmployeeInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_id" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "taxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", EmployeeTeam)
    ], EmployeeInput.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EmployeeInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=works_remote" }),
        __metadata("design:type", Boolean)
    ], EmployeeInput.prototype, "worksRemote", void 0);
    return EmployeeInput;
}(SpeakeasyBase));
export { EmployeeInput };
