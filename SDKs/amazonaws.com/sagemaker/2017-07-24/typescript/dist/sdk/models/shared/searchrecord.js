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
import { Endpoint } from "./endpoint";
import { Experiment } from "./experiment";
import { FeatureGroup } from "./featuregroup";
import { ModelPackage } from "./modelpackage";
import { ModelPackageGroup } from "./modelpackagegroup";
import { Pipeline } from "./pipeline";
import { PipelineExecution } from "./pipelineexecution";
import { Project } from "./project";
import { TrainingJob } from "./trainingjob";
import { Trial } from "./trial";
import { TrialComponent } from "./trialcomponent";
// SearchRecord
/**
 * A single resource returned as part of the <a>Search</a> API response.
**/
var SearchRecord = /** @class */ (function (_super) {
    __extends(SearchRecord, _super);
    function SearchRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Endpoint" }),
        __metadata("design:type", Endpoint)
    ], SearchRecord.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Experiment" }),
        __metadata("design:type", Experiment)
    ], SearchRecord.prototype, "experiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroup" }),
        __metadata("design:type", FeatureGroup)
    ], SearchRecord.prototype, "featureGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackage" }),
        __metadata("design:type", ModelPackage)
    ], SearchRecord.prototype, "modelPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageGroup" }),
        __metadata("design:type", ModelPackageGroup)
    ], SearchRecord.prototype, "modelPackageGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pipeline" }),
        __metadata("design:type", Pipeline)
    ], SearchRecord.prototype, "pipeline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineExecution" }),
        __metadata("design:type", PipelineExecution)
    ], SearchRecord.prototype, "pipelineExecution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Project" }),
        __metadata("design:type", Project)
    ], SearchRecord.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJob" }),
        __metadata("design:type", TrainingJob)
    ], SearchRecord.prototype, "trainingJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Trial" }),
        __metadata("design:type", Trial)
    ], SearchRecord.prototype, "trial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialComponent" }),
        __metadata("design:type", TrialComponent)
    ], SearchRecord.prototype, "trialComponent", void 0);
    return SearchRecord;
}(SpeakeasyBase));
export { SearchRecord };
