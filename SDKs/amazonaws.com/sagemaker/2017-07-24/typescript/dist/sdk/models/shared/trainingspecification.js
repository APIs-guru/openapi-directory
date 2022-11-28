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
import { MetricDefinition } from "./metricdefinition";
import { HyperParameterSpecification } from "./hyperparameterspecification";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { ChannelSpecification } from "./channelspecification";
// TrainingSpecification
/**
 * Defines how the algorithm is used for a training job.
**/
var TrainingSpecification = /** @class */ (function (_super) {
    __extends(TrainingSpecification, _super);
    function TrainingSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricDefinitions", elemType: MetricDefinition }),
        __metadata("design:type", Array)
    ], TrainingSpecification.prototype, "metricDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedHyperParameters", elemType: HyperParameterSpecification }),
        __metadata("design:type", Array)
    ], TrainingSpecification.prototype, "supportedHyperParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedTrainingInstanceTypes" }),
        __metadata("design:type", Array)
    ], TrainingSpecification.prototype, "supportedTrainingInstanceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedTuningJobObjectiveMetrics", elemType: HyperParameterTuningJobObjective }),
        __metadata("design:type", Array)
    ], TrainingSpecification.prototype, "supportedTuningJobObjectiveMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsDistributedTraining" }),
        __metadata("design:type", Boolean)
    ], TrainingSpecification.prototype, "supportsDistributedTraining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingChannels", elemType: ChannelSpecification }),
        __metadata("design:type", Array)
    ], TrainingSpecification.prototype, "trainingChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingImage" }),
        __metadata("design:type", String)
    ], TrainingSpecification.prototype, "trainingImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingImageDigest" }),
        __metadata("design:type", String)
    ], TrainingSpecification.prototype, "trainingImageDigest", void 0);
    return TrainingSpecification;
}(SpeakeasyBase));
export { TrainingSpecification };
