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
import { BiEngineStatistics } from "./bienginestatistics";
import { TableReference } from "./tablereference";
import { DatasetReference } from "./datasetreference";
import { RoutineReference } from "./routinereference";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";
import { DmlStatistics } from "./dmlstatistics";
import { MlStatistics } from "./mlstatistics";
import { BigQueryModelTraining } from "./bigquerymodeltraining";
import { ExplainQueryStage } from "./explainquerystage";
import { TableSchema } from "./tableschema";
import { SearchStatistics } from "./searchstatistics";
import { SparkStatistics } from "./sparkstatistics";
import { QueryTimelineSample } from "./querytimelinesample";
import { QueryParameter } from "./queryparameter";
var JobStatistics2ReservationUsage = /** @class */ (function (_super) {
    __extends(JobStatistics2ReservationUsage, _super);
    function JobStatistics2ReservationUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], JobStatistics2ReservationUsage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotMs" }),
        __metadata("design:type", String)
    ], JobStatistics2ReservationUsage.prototype, "slotMs", void 0);
    return JobStatistics2ReservationUsage;
}(SpeakeasyBase));
export { JobStatistics2ReservationUsage };
var JobStatistics2 = /** @class */ (function (_super) {
    __extends(JobStatistics2, _super);
    function JobStatistics2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=biEngineStatistics" }),
        __metadata("design:type", BiEngineStatistics)
    ], JobStatistics2.prototype, "biEngineStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingTier" }),
        __metadata("design:type", Number)
    ], JobStatistics2.prototype, "billingTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheHit" }),
        __metadata("design:type", Boolean)
    ], JobStatistics2.prototype, "cacheHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddlAffectedRowAccessPolicyCount" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "ddlAffectedRowAccessPolicyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddlDestinationTable" }),
        __metadata("design:type", TableReference)
    ], JobStatistics2.prototype, "ddlDestinationTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddlOperationPerformed" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "ddlOperationPerformed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddlTargetDataset" }),
        __metadata("design:type", DatasetReference)
    ], JobStatistics2.prototype, "ddlTargetDataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddlTargetRoutine" }),
        __metadata("design:type", RoutineReference)
    ], JobStatistics2.prototype, "ddlTargetRoutine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddlTargetRowAccessPolicy" }),
        __metadata("design:type", RowAccessPolicyReference)
    ], JobStatistics2.prototype, "ddlTargetRowAccessPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddlTargetTable" }),
        __metadata("design:type", TableReference)
    ], JobStatistics2.prototype, "ddlTargetTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dmlStats" }),
        __metadata("design:type", DmlStatistics)
    ], JobStatistics2.prototype, "dmlStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedBytesProcessed" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "estimatedBytesProcessed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mlStatistics" }),
        __metadata("design:type", MlStatistics)
    ], JobStatistics2.prototype, "mlStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelTraining" }),
        __metadata("design:type", BigQueryModelTraining)
    ], JobStatistics2.prototype, "modelTraining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelTrainingCurrentIteration" }),
        __metadata("design:type", Number)
    ], JobStatistics2.prototype, "modelTrainingCurrentIteration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelTrainingExpectedTotalIteration" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "modelTrainingExpectedTotalIteration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numDmlAffectedRows" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "numDmlAffectedRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryPlan", elemType: ExplainQueryStage }),
        __metadata("design:type", Array)
    ], JobStatistics2.prototype, "queryPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referencedRoutines", elemType: RoutineReference }),
        __metadata("design:type", Array)
    ], JobStatistics2.prototype, "referencedRoutines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referencedTables", elemType: TableReference }),
        __metadata("design:type", Array)
    ], JobStatistics2.prototype, "referencedTables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservationUsage", elemType: JobStatistics2ReservationUsage }),
        __metadata("design:type", Array)
    ], JobStatistics2.prototype, "reservationUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", TableSchema)
    ], JobStatistics2.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchStatistics" }),
        __metadata("design:type", SearchStatistics)
    ], JobStatistics2.prototype, "searchStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkStatistics" }),
        __metadata("design:type", SparkStatistics)
    ], JobStatistics2.prototype, "sparkStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statementType" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "statementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeline", elemType: QueryTimelineSample }),
        __metadata("design:type", Array)
    ], JobStatistics2.prototype, "timeline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalBytesBilled" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "totalBytesBilled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalBytesProcessed" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "totalBytesProcessed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalBytesProcessedAccuracy" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "totalBytesProcessedAccuracy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPartitionsProcessed" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "totalPartitionsProcessed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSlotMs" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "totalSlotMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferredBytes" }),
        __metadata("design:type", String)
    ], JobStatistics2.prototype, "transferredBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=undeclaredQueryParameters", elemType: QueryParameter }),
        __metadata("design:type", Array)
    ], JobStatistics2.prototype, "undeclaredQueryParameters", void 0);
    return JobStatistics2;
}(SpeakeasyBase));
export { JobStatistics2 };
