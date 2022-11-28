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
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelCounters } from "./labelcounters";
import { LabelingJobOutput } from "./labelingjoboutput";
import { LabelingJobStatusEnum } from "./labelingjobstatusenum";
// LabelingJobSummary
/**
 * Provides summary information about a labeling job.
**/
var LabelingJobSummary = /** @class */ (function (_super) {
    __extends(LabelingJobSummary, _super);
    function LabelingJobSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnotationConsolidationLambdaArn" }),
        __metadata("design:type", String)
    ], LabelingJobSummary.prototype, "annotationConsolidationLambdaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], LabelingJobSummary.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], LabelingJobSummary.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputConfig" }),
        __metadata("design:type", LabelingJobInputConfig)
    ], LabelingJobSummary.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelCounters" }),
        __metadata("design:type", LabelCounters)
    ], LabelingJobSummary.prototype, "labelCounters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelingJobArn" }),
        __metadata("design:type", String)
    ], LabelingJobSummary.prototype, "labelingJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelingJobName" }),
        __metadata("design:type", String)
    ], LabelingJobSummary.prototype, "labelingJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelingJobOutput" }),
        __metadata("design:type", LabelingJobOutput)
    ], LabelingJobSummary.prototype, "labelingJobOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelingJobStatus" }),
        __metadata("design:type", String)
    ], LabelingJobSummary.prototype, "labelingJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], LabelingJobSummary.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreHumanTaskLambdaArn" }),
        __metadata("design:type", String)
    ], LabelingJobSummary.prototype, "preHumanTaskLambdaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkteamArn" }),
        __metadata("design:type", String)
    ], LabelingJobSummary.prototype, "workteamArn", void 0);
    return LabelingJobSummary;
}(SpeakeasyBase));
export { LabelingJobSummary };
