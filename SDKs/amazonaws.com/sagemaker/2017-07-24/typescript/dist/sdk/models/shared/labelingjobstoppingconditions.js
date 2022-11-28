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
// LabelingJobStoppingConditions
/**
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note>
**/
var LabelingJobStoppingConditions = /** @class */ (function (_super) {
    __extends(LabelingJobStoppingConditions, _super);
    function LabelingJobStoppingConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxHumanLabeledObjectCount" }),
        __metadata("design:type", Number)
    ], LabelingJobStoppingConditions.prototype, "maxHumanLabeledObjectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxPercentageOfInputDatasetLabeled" }),
        __metadata("design:type", Number)
    ], LabelingJobStoppingConditions.prototype, "maxPercentageOfInputDatasetLabeled", void 0);
    return LabelingJobStoppingConditions;
}(SpeakeasyBase));
export { LabelingJobStoppingConditions };
