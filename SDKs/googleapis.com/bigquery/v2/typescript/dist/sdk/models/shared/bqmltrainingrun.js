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
import { BqmlIterationResult } from "./bqmliterationresult";
// BqmlTrainingRunTrainingOptions
/**
 * [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
**/
var BqmlTrainingRunTrainingOptions = /** @class */ (function (_super) {
    __extends(BqmlTrainingRunTrainingOptions, _super);
    function BqmlTrainingRunTrainingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earlyStop" }),
        __metadata("design:type", Boolean)
    ], BqmlTrainingRunTrainingOptions.prototype, "earlyStop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l1Reg" }),
        __metadata("design:type", Number)
    ], BqmlTrainingRunTrainingOptions.prototype, "l1Reg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l2Reg" }),
        __metadata("design:type", Number)
    ], BqmlTrainingRunTrainingOptions.prototype, "l2Reg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnRate" }),
        __metadata("design:type", Number)
    ], BqmlTrainingRunTrainingOptions.prototype, "learnRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnRateStrategy" }),
        __metadata("design:type", String)
    ], BqmlTrainingRunTrainingOptions.prototype, "learnRateStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineSearchInitLearnRate" }),
        __metadata("design:type", Number)
    ], BqmlTrainingRunTrainingOptions.prototype, "lineSearchInitLearnRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxIteration" }),
        __metadata("design:type", String)
    ], BqmlTrainingRunTrainingOptions.prototype, "maxIteration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minRelProgress" }),
        __metadata("design:type", Number)
    ], BqmlTrainingRunTrainingOptions.prototype, "minRelProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warmStart" }),
        __metadata("design:type", Boolean)
    ], BqmlTrainingRunTrainingOptions.prototype, "warmStart", void 0);
    return BqmlTrainingRunTrainingOptions;
}(SpeakeasyBase));
export { BqmlTrainingRunTrainingOptions };
var BqmlTrainingRun = /** @class */ (function (_super) {
    __extends(BqmlTrainingRun, _super);
    function BqmlTrainingRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iterationResults", elemType: BqmlIterationResult }),
        __metadata("design:type", Array)
    ], BqmlTrainingRun.prototype, "iterationResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], BqmlTrainingRun.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], BqmlTrainingRun.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingOptions" }),
        __metadata("design:type", BqmlTrainingRunTrainingOptions)
    ], BqmlTrainingRun.prototype, "trainingOptions", void 0);
    return BqmlTrainingRun;
}(SpeakeasyBase));
export { BqmlTrainingRun };
