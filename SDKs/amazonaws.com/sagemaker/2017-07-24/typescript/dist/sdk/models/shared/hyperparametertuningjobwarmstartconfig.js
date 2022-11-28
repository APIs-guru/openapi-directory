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
import { ParentHyperParameterTuningJob } from "./parenthyperparametertuningjob";
import { HyperParameterTuningJobWarmStartTypeEnum } from "./hyperparametertuningjobwarmstarttypeenum";
// HyperParameterTuningJobWarmStartConfig
/**
 * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note>
**/
var HyperParameterTuningJobWarmStartConfig = /** @class */ (function (_super) {
    __extends(HyperParameterTuningJobWarmStartConfig, _super);
    function HyperParameterTuningJobWarmStartConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentHyperParameterTuningJobs", elemType: ParentHyperParameterTuningJob }),
        __metadata("design:type", Array)
    ], HyperParameterTuningJobWarmStartConfig.prototype, "parentHyperParameterTuningJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WarmStartType" }),
        __metadata("design:type", String)
    ], HyperParameterTuningJobWarmStartConfig.prototype, "warmStartType", void 0);
    return HyperParameterTuningJobWarmStartConfig;
}(SpeakeasyBase));
export { HyperParameterTuningJobWarmStartConfig };
