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
import { PerformanceMetrics } from "./performancemetrics";
import { EntityStatusEnum } from "./entitystatusenum";
// Evaluation
/**
 * <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>
**/
var Evaluation = /** @class */ (function (_super) {
    __extends(Evaluation, _super);
    function Evaluation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ComputeTime" }),
        __metadata("design:type", Number)
    ], Evaluation.prototype, "computeTime", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], Evaluation.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedByIamUser" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "createdByIamUser", void 0);
    __decorate([
        Metadata({ data: "json, name=EvaluationDataSourceId" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "evaluationDataSourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=EvaluationId" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "evaluationId", void 0);
    __decorate([
        Metadata({ data: "json, name=FinishedAt" }),
        __metadata("design:type", Date)
    ], Evaluation.prototype, "finishedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=InputDataLocationS3" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "inputDataLocationS3", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], Evaluation.prototype, "lastUpdatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=MLModelId" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "mlModelId", void 0);
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=PerformanceMetrics" }),
        __metadata("design:type", PerformanceMetrics)
    ], Evaluation.prototype, "performanceMetrics", void 0);
    __decorate([
        Metadata({ data: "json, name=StartedAt" }),
        __metadata("design:type", Date)
    ], Evaluation.prototype, "startedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Evaluation.prototype, "status", void 0);
    return Evaluation;
}(SpeakeasyBase));
export { Evaluation };
