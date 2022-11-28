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
import * as shared from "../shared";
export var GetOperationsLogStatusNumEnum;
(function (GetOperationsLogStatusNumEnum) {
    GetOperationsLogStatusNumEnum["Zero"] = "0";
    GetOperationsLogStatusNumEnum["One"] = "1";
})(GetOperationsLogStatusNumEnum || (GetOperationsLogStatusNumEnum = {}));
var GetOperationsLogQueryParams = /** @class */ (function (_super) {
    __extends(GetOperationsLogQueryParams, _super);
    function GetOperationsLogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetOperationsLogQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_committee_id" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "candidateCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_type" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_coverage_end_date" }),
        __metadata("design:type", Date)
    ], GetOperationsLogQueryParams.prototype, "maxCoverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" }),
        __metadata("design:type", Date)
    ], GetOperationsLogQueryParams.prototype, "maxReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_transaction_data_complete_date" }),
        __metadata("design:type", Date)
    ], GetOperationsLogQueryParams.prototype, "maxTransactionDataCompleteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_coverage_end_date" }),
        __metadata("design:type", Date)
    ], GetOperationsLogQueryParams.prototype, "minCoverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" }),
        __metadata("design:type", Date)
    ], GetOperationsLogQueryParams.prototype, "minReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_transaction_data_complete_date" }),
        __metadata("design:type", Date)
    ], GetOperationsLogQueryParams.prototype, "minTransactionDataCompleteDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetOperationsLogQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetOperationsLogQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_year" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetOperationsLogQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetOperationsLogQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetOperationsLogQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status_num" }),
        __metadata("design:type", Array)
    ], GetOperationsLogQueryParams.prototype, "statusNum", void 0);
    return GetOperationsLogQueryParams;
}(SpeakeasyBase));
export { GetOperationsLogQueryParams };
var GetOperationsLogRequest = /** @class */ (function (_super) {
    __extends(GetOperationsLogRequest, _super);
    function GetOperationsLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOperationsLogQueryParams)
    ], GetOperationsLogRequest.prototype, "queryParams", void 0);
    return GetOperationsLogRequest;
}(SpeakeasyBase));
export { GetOperationsLogRequest };
var GetOperationsLogResponse = /** @class */ (function (_super) {
    __extends(GetOperationsLogResponse, _super);
    function GetOperationsLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOperationsLogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OperationsLogPage)
    ], GetOperationsLogResponse.prototype, "operationsLogPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOperationsLogResponse.prototype, "statusCode", void 0);
    return GetOperationsLogResponse;
}(SpeakeasyBase));
export { GetOperationsLogResponse };
