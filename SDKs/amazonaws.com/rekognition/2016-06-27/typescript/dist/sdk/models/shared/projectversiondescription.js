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
import { EvaluationResult } from "./evaluationresult";
import { GroundTruthManifest } from "./groundtruthmanifest";
import { OutputConfig } from "./outputconfig";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";
import { TestingDataResult } from "./testingdataresult";
import { TrainingDataResult } from "./trainingdataresult";
// ProjectVersionDescription
/**
 * The description of a version of a model.
**/
var ProjectVersionDescription = /** @class */ (function (_super) {
    __extends(ProjectVersionDescription, _super);
    function ProjectVersionDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillableTrainingTimeInSeconds" }),
        __metadata("design:type", Number)
    ], ProjectVersionDescription.prototype, "billableTrainingTimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTimestamp" }),
        __metadata("design:type", Date)
    ], ProjectVersionDescription.prototype, "creationTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationResult" }),
        __metadata("design:type", EvaluationResult)
    ], ProjectVersionDescription.prototype, "evaluationResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], ProjectVersionDescription.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManifestSummary" }),
        __metadata("design:type", GroundTruthManifest)
    ], ProjectVersionDescription.prototype, "manifestSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinInferenceUnits" }),
        __metadata("design:type", Number)
    ], ProjectVersionDescription.prototype, "minInferenceUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputConfig" }),
        __metadata("design:type", OutputConfig)
    ], ProjectVersionDescription.prototype, "outputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProjectVersionArn" }),
        __metadata("design:type", String)
    ], ProjectVersionDescription.prototype, "projectVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ProjectVersionDescription.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], ProjectVersionDescription.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TestingDataResult" }),
        __metadata("design:type", TestingDataResult)
    ], ProjectVersionDescription.prototype, "testingDataResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingDataResult" }),
        __metadata("design:type", TrainingDataResult)
    ], ProjectVersionDescription.prototype, "trainingDataResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingEndTimestamp" }),
        __metadata("design:type", Date)
    ], ProjectVersionDescription.prototype, "trainingEndTimestamp", void 0);
    return ProjectVersionDescription;
}(SpeakeasyBase));
export { ProjectVersionDescription };
