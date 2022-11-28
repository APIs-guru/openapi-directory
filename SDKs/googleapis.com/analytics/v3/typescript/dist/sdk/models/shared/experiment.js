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
// ExperimentParentLink
/**
 * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
**/
var ExperimentParentLink = /** @class */ (function (_super) {
    __extends(ExperimentParentLink, _super);
    function ExperimentParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ExperimentParentLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ExperimentParentLink.prototype, "type", void 0);
    return ExperimentParentLink;
}(SpeakeasyBase));
export { ExperimentParentLink };
var ExperimentVariations = /** @class */ (function (_super) {
    __extends(ExperimentVariations, _super);
    function ExperimentVariations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ExperimentVariations.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ExperimentVariations.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ExperimentVariations.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], ExperimentVariations.prototype, "weight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=won" }),
        __metadata("design:type", Boolean)
    ], ExperimentVariations.prototype, "won", void 0);
    return ExperimentVariations;
}(SpeakeasyBase));
export { ExperimentVariations };
// Experiment
/**
 * JSON template for Analytics experiment resource.
**/
var Experiment = /** @class */ (function (_super) {
    __extends(Experiment, _super);
    function Experiment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Experiment.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editableInGaUi" }),
        __metadata("design:type", Boolean)
    ], Experiment.prototype, "editableInGaUi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], Experiment.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalWeighting" }),
        __metadata("design:type", Boolean)
    ], Experiment.prototype, "equalWeighting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumExperimentLengthInDays" }),
        __metadata("design:type", Number)
    ], Experiment.prototype, "minimumExperimentLengthInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectiveMetric" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "objectiveMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationType" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "optimizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", ExperimentParentLink)
    ], Experiment.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasonExperimentEnded" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "reasonExperimentEnded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rewriteVariationUrlsAsOriginal" }),
        __metadata("design:type", Boolean)
    ], Experiment.prototype, "rewriteVariationUrlsAsOriginal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingFramework" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "servingFramework", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippet" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "snippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], Experiment.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficCoverage" }),
        __metadata("design:type", Number)
    ], Experiment.prototype, "trafficCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Experiment.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variations", elemType: ExperimentVariations }),
        __metadata("design:type", Array)
    ], Experiment.prototype, "variations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "webPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=winnerConfidenceLevel" }),
        __metadata("design:type", Number)
    ], Experiment.prototype, "winnerConfidenceLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=winnerFound" }),
        __metadata("design:type", Boolean)
    ], Experiment.prototype, "winnerFound", void 0);
    return Experiment;
}(SpeakeasyBase));
export { Experiment };
