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
var OperationsLog = /** @class */ (function (_super) {
    __extends(OperationsLog, _super);
    function OperationsLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], OperationsLog.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], OperationsLog.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_committee_id" }),
        __metadata("design:type", String)
    ], OperationsLog.prototype, "candidateCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], OperationsLog.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_start_date" }),
        __metadata("design:type", Date)
    ], OperationsLog.prototype, "coverageStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ending_image_number" }),
        __metadata("design:type", String)
    ], OperationsLog.prototype, "endingImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_type" }),
        __metadata("design:type", String)
    ], OperationsLog.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_date" }),
        __metadata("design:type", Date)
    ], OperationsLog.prototype, "receiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], OperationsLog.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], OperationsLog.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_num" }),
        __metadata("design:type", Number)
    ], OperationsLog.prototype, "statusNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", Number)
    ], OperationsLog.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary_data_complete_date" }),
        __metadata("design:type", Date)
    ], OperationsLog.prototype, "summaryDataCompleteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary_data_verification_date" }),
        __metadata("design:type", Date)
    ], OperationsLog.prototype, "summaryDataVerificationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_data_complete_date" }),
        __metadata("design:type", Date)
    ], OperationsLog.prototype, "transactionDataCompleteDate", void 0);
    return OperationsLog;
}(SpeakeasyBase));
export { OperationsLog };
