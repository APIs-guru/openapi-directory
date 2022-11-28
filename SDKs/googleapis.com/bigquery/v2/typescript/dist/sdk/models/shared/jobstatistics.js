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
import { JobStatistics5 } from "./jobstatistics5";
import { DataMaskingStatistics } from "./datamaskingstatistics";
import { JobStatistics4 } from "./jobstatistics4";
import { JobStatistics3 } from "./jobstatistics3";
import { JobStatistics2 } from "./jobstatistics2";
import { RowLevelSecurityStatistics } from "./rowlevelsecuritystatistics";
import { ScriptStatistics } from "./scriptstatistics";
import { SessionInfo } from "./sessioninfo";
import { TransactionInfo } from "./transactioninfo";
var JobStatisticsReservationUsage = /** @class */ (function (_super) {
    __extends(JobStatisticsReservationUsage, _super);
    function JobStatisticsReservationUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], JobStatisticsReservationUsage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotMs" }),
        __metadata("design:type", String)
    ], JobStatisticsReservationUsage.prototype, "slotMs", void 0);
    return JobStatisticsReservationUsage;
}(SpeakeasyBase));
export { JobStatisticsReservationUsage };
var JobStatistics = /** @class */ (function (_super) {
    __extends(JobStatistics, _super);
    function JobStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionRatio" }),
        __metadata("design:type", Number)
    ], JobStatistics.prototype, "completionRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copy" }),
        __metadata("design:type", JobStatistics5)
    ], JobStatistics.prototype, "copy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataMaskingStatistics" }),
        __metadata("design:type", DataMaskingStatistics)
    ], JobStatistics.prototype, "dataMaskingStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extract" }),
        __metadata("design:type", JobStatistics4)
    ], JobStatistics.prototype, "extract", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load" }),
        __metadata("design:type", JobStatistics3)
    ], JobStatistics.prototype, "load", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numChildJobs" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "numChildJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentJobId" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "parentJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", JobStatistics2)
    ], JobStatistics.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaDeferments" }),
        __metadata("design:type", Array)
    ], JobStatistics.prototype, "quotaDeferments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservationUsage", elemType: JobStatisticsReservationUsage }),
        __metadata("design:type", Array)
    ], JobStatistics.prototype, "reservationUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservation_id" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "reservationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowLevelSecurityStatistics" }),
        __metadata("design:type", RowLevelSecurityStatistics)
    ], JobStatistics.prototype, "rowLevelSecurityStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptStatistics" }),
        __metadata("design:type", ScriptStatistics)
    ], JobStatistics.prototype, "scriptStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionInfo" }),
        __metadata("design:type", SessionInfo)
    ], JobStatistics.prototype, "sessionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalBytesProcessed" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "totalBytesProcessed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSlotMs" }),
        __metadata("design:type", String)
    ], JobStatistics.prototype, "totalSlotMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionInfo" }),
        __metadata("design:type", TransactionInfo)
    ], JobStatistics.prototype, "transactionInfo", void 0);
    return JobStatistics;
}(SpeakeasyBase));
export { JobStatistics };
