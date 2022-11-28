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
import { EntityStatusEnum } from "./entitystatusenum";
// GetBatchPredictionOutput
/**
 * Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.
**/
var GetBatchPredictionOutput = /** @class */ (function (_super) {
    __extends(GetBatchPredictionOutput, _super);
    function GetBatchPredictionOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchPredictionDataSourceId" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "batchPredictionDataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchPredictionId" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "batchPredictionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComputeTime" }),
        __metadata("design:type", Number)
    ], GetBatchPredictionOutput.prototype, "computeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], GetBatchPredictionOutput.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedByIamUser" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "createdByIamUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinishedAt" }),
        __metadata("design:type", Date)
    ], GetBatchPredictionOutput.prototype, "finishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataLocationS3" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "inputDataLocationS3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvalidRecordCount" }),
        __metadata("design:type", Number)
    ], GetBatchPredictionOutput.prototype, "invalidRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], GetBatchPredictionOutput.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogUri" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "logUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MLModelId" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "mlModelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputUri" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "outputUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartedAt" }),
        __metadata("design:type", Date)
    ], GetBatchPredictionOutput.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], GetBatchPredictionOutput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalRecordCount" }),
        __metadata("design:type", Number)
    ], GetBatchPredictionOutput.prototype, "totalRecordCount", void 0);
    return GetBatchPredictionOutput;
}(SpeakeasyBase));
export { GetBatchPredictionOutput };
