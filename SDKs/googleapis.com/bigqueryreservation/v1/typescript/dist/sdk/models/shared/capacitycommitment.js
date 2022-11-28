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
import { Status } from "./status";
export var CapacityCommitmentPlanEnum;
(function (CapacityCommitmentPlanEnum) {
    CapacityCommitmentPlanEnum["CommitmentPlanUnspecified"] = "COMMITMENT_PLAN_UNSPECIFIED";
    CapacityCommitmentPlanEnum["Flex"] = "FLEX";
    CapacityCommitmentPlanEnum["Trial"] = "TRIAL";
    CapacityCommitmentPlanEnum["Monthly"] = "MONTHLY";
    CapacityCommitmentPlanEnum["Annual"] = "ANNUAL";
})(CapacityCommitmentPlanEnum || (CapacityCommitmentPlanEnum = {}));
export var CapacityCommitmentRenewalPlanEnum;
(function (CapacityCommitmentRenewalPlanEnum) {
    CapacityCommitmentRenewalPlanEnum["CommitmentPlanUnspecified"] = "COMMITMENT_PLAN_UNSPECIFIED";
    CapacityCommitmentRenewalPlanEnum["Flex"] = "FLEX";
    CapacityCommitmentRenewalPlanEnum["Trial"] = "TRIAL";
    CapacityCommitmentRenewalPlanEnum["Monthly"] = "MONTHLY";
    CapacityCommitmentRenewalPlanEnum["Annual"] = "ANNUAL";
})(CapacityCommitmentRenewalPlanEnum || (CapacityCommitmentRenewalPlanEnum = {}));
export var CapacityCommitmentStateEnum;
(function (CapacityCommitmentStateEnum) {
    CapacityCommitmentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CapacityCommitmentStateEnum["Pending"] = "PENDING";
    CapacityCommitmentStateEnum["Active"] = "ACTIVE";
    CapacityCommitmentStateEnum["Failed"] = "FAILED";
})(CapacityCommitmentStateEnum || (CapacityCommitmentStateEnum = {}));
// CapacityCommitment
/**
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
var CapacityCommitment = /** @class */ (function (_super) {
    __extends(CapacityCommitment, _super);
    function CapacityCommitment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitmentEndTime" }),
        __metadata("design:type", String)
    ], CapacityCommitment.prototype, "commitmentEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitmentStartTime" }),
        __metadata("design:type", String)
    ], CapacityCommitment.prototype, "commitmentStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureStatus" }),
        __metadata("design:type", Status)
    ], CapacityCommitment.prototype, "failureStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" }),
        __metadata("design:type", Boolean)
    ], CapacityCommitment.prototype, "multiRegionAuxiliary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CapacityCommitment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan" }),
        __metadata("design:type", String)
    ], CapacityCommitment.prototype, "plan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewalPlan" }),
        __metadata("design:type", String)
    ], CapacityCommitment.prototype, "renewalPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotCount" }),
        __metadata("design:type", String)
    ], CapacityCommitment.prototype, "slotCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CapacityCommitment.prototype, "state", void 0);
    return CapacityCommitment;
}(SpeakeasyBase));
export { CapacityCommitment };
// CapacityCommitmentInput
/**
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
var CapacityCommitmentInput = /** @class */ (function (_super) {
    __extends(CapacityCommitmentInput, _super);
    function CapacityCommitmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureStatus" }),
        __metadata("design:type", Status)
    ], CapacityCommitmentInput.prototype, "failureStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" }),
        __metadata("design:type", Boolean)
    ], CapacityCommitmentInput.prototype, "multiRegionAuxiliary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan" }),
        __metadata("design:type", String)
    ], CapacityCommitmentInput.prototype, "plan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewalPlan" }),
        __metadata("design:type", String)
    ], CapacityCommitmentInput.prototype, "renewalPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotCount" }),
        __metadata("design:type", String)
    ], CapacityCommitmentInput.prototype, "slotCount", void 0);
    return CapacityCommitmentInput;
}(SpeakeasyBase));
export { CapacityCommitmentInput };
