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
import { CandidateProperties } from "./candidateproperties";
import { CandidateStatusEnum } from "./candidatestatusenum";
import { AutoMlCandidateStep } from "./automlcandidatestep";
import { FinalAutoMlJobObjectiveMetric } from "./finalautomljobobjectivemetric";
import { AutoMlContainerDefinition } from "./automlcontainerdefinition";
import { ObjectiveStatusEnum } from "./objectivestatusenum";
// AutoMlCandidate
/**
 * Information about a candidate produced by an AutoML training job, including its status, steps, and other properties.
**/
var AutoMlCandidate = /** @class */ (function (_super) {
    __extends(AutoMlCandidate, _super);
    function AutoMlCandidate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CandidateName" }),
        __metadata("design:type", String)
    ], AutoMlCandidate.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CandidateProperties" }),
        __metadata("design:type", CandidateProperties)
    ], AutoMlCandidate.prototype, "candidateProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CandidateStatus" }),
        __metadata("design:type", String)
    ], AutoMlCandidate.prototype, "candidateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CandidateSteps", elemType: AutoMlCandidateStep }),
        __metadata("design:type", Array)
    ], AutoMlCandidate.prototype, "candidateSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], AutoMlCandidate.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], AutoMlCandidate.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], AutoMlCandidate.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalAutoMLJobObjectiveMetric" }),
        __metadata("design:type", FinalAutoMlJobObjectiveMetric)
    ], AutoMlCandidate.prototype, "finalAutoMlJobObjectiveMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InferenceContainers", elemType: AutoMlContainerDefinition }),
        __metadata("design:type", Array)
    ], AutoMlCandidate.prototype, "inferenceContainers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], AutoMlCandidate.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectiveStatus" }),
        __metadata("design:type", String)
    ], AutoMlCandidate.prototype, "objectiveStatus", void 0);
    return AutoMlCandidate;
}(SpeakeasyBase));
export { AutoMlCandidate };
