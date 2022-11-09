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
import { WorkloadEnvironmentEnum } from "./workloadenvironmentenum";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";
// Workload
/**
 * A workload return object.
**/
var Workload = /** @class */ (function (_super) {
    __extends(Workload, _super);
    function Workload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AccountIds" }),
        __metadata("design:type", Array)
    ], Workload.prototype, "accountIds", void 0);
    __decorate([
        Metadata({ data: "json, name=ArchitecturalDesign" }),
        __metadata("design:type", String)
    ], Workload.prototype, "architecturalDesign", void 0);
    __decorate([
        Metadata({ data: "json, name=AwsRegions" }),
        __metadata("design:type", Array)
    ], Workload.prototype, "awsRegions", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Workload.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Environment" }),
        __metadata("design:type", String)
    ], Workload.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=ImprovementStatus" }),
        __metadata("design:type", String)
    ], Workload.prototype, "improvementStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=Industry" }),
        __metadata("design:type", String)
    ], Workload.prototype, "industry", void 0);
    __decorate([
        Metadata({ data: "json, name=IndustryType" }),
        __metadata("design:type", String)
    ], Workload.prototype, "industryType", void 0);
    __decorate([
        Metadata({ data: "json, name=IsReviewOwnerUpdateAcknowledged" }),
        __metadata("design:type", Boolean)
    ], Workload.prototype, "isReviewOwnerUpdateAcknowledged", void 0);
    __decorate([
        Metadata({ data: "json, name=Lenses" }),
        __metadata("design:type", Array)
    ], Workload.prototype, "lenses", void 0);
    __decorate([
        Metadata({ data: "json, name=NonAwsRegions" }),
        __metadata("design:type", Array)
    ], Workload.prototype, "nonAwsRegions", void 0);
    __decorate([
        Metadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], Workload.prototype, "notes", void 0);
    __decorate([
        Metadata({ data: "json, name=Owner" }),
        __metadata("design:type", String)
    ], Workload.prototype, "owner", void 0);
    __decorate([
        Metadata({ data: "json, name=PillarPriorities" }),
        __metadata("design:type", Array)
    ], Workload.prototype, "pillarPriorities", void 0);
    __decorate([
        Metadata({ data: "json, name=ReviewOwner" }),
        __metadata("design:type", String)
    ], Workload.prototype, "reviewOwner", void 0);
    __decorate([
        Metadata({ data: "json, name=ReviewRestrictionDate" }),
        __metadata("design:type", Date)
    ], Workload.prototype, "reviewRestrictionDate", void 0);
    __decorate([
        Metadata({ data: "json, name=RiskCounts" }),
        __metadata("design:type", Map)
    ], Workload.prototype, "riskCounts", void 0);
    __decorate([
        Metadata({ data: "json, name=ShareInvitationId" }),
        __metadata("design:type", String)
    ], Workload.prototype, "shareInvitationId", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], Workload.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=UpdatedAt" }),
        __metadata("design:type", Date)
    ], Workload.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=WorkloadArn" }),
        __metadata("design:type", String)
    ], Workload.prototype, "workloadArn", void 0);
    __decorate([
        Metadata({ data: "json, name=WorkloadId" }),
        __metadata("design:type", String)
    ], Workload.prototype, "workloadId", void 0);
    __decorate([
        Metadata({ data: "json, name=WorkloadName" }),
        __metadata("design:type", String)
    ], Workload.prototype, "workloadName", void 0);
    return Workload;
}(SpeakeasyBase));
export { Workload };
