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
import { HitReviewStatusEnum } from "./hitreviewstatusenum";
import { HitStatusEnum } from "./hitstatusenum";
import { QualificationRequirement } from "./qualificationrequirement";
// Hit
/**
 *  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
**/
var Hit = /** @class */ (function (_super) {
    __extends(Hit, _super);
    function Hit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssignmentDurationInSeconds" }),
        __metadata("design:type", Number)
    ], Hit.prototype, "assignmentDurationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoApprovalDelayInSeconds" }),
        __metadata("design:type", Number)
    ], Hit.prototype, "autoApprovalDelayInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], Hit.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Hit.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Expiration" }),
        __metadata("design:type", Date)
    ], Hit.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITGroupId" }),
        __metadata("design:type", String)
    ], Hit.prototype, "hitGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITId" }),
        __metadata("design:type", String)
    ], Hit.prototype, "hitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITLayoutId" }),
        __metadata("design:type", String)
    ], Hit.prototype, "hitLayoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITReviewStatus" }),
        __metadata("design:type", String)
    ], Hit.prototype, "hitReviewStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITStatus" }),
        __metadata("design:type", String)
    ], Hit.prototype, "hitStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITTypeId" }),
        __metadata("design:type", String)
    ], Hit.prototype, "hitTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keywords" }),
        __metadata("design:type", String)
    ], Hit.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAssignments" }),
        __metadata("design:type", Number)
    ], Hit.prototype, "maxAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfAssignmentsAvailable" }),
        __metadata("design:type", Number)
    ], Hit.prototype, "numberOfAssignmentsAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfAssignmentsCompleted" }),
        __metadata("design:type", Number)
    ], Hit.prototype, "numberOfAssignmentsCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfAssignmentsPending" }),
        __metadata("design:type", Number)
    ], Hit.prototype, "numberOfAssignmentsPending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QualificationRequirements", elemType: QualificationRequirement }),
        __metadata("design:type", Array)
    ], Hit.prototype, "qualificationRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Question" }),
        __metadata("design:type", String)
    ], Hit.prototype, "question", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequesterAnnotation" }),
        __metadata("design:type", String)
    ], Hit.prototype, "requesterAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reward" }),
        __metadata("design:type", String)
    ], Hit.prototype, "reward", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], Hit.prototype, "title", void 0);
    return Hit;
}(SpeakeasyBase));
export { Hit };
