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
export var GetSchedulesScheduleECandidateOfficeEnum;
(function (GetSchedulesScheduleECandidateOfficeEnum) {
    GetSchedulesScheduleECandidateOfficeEnum["Unknown"] = "";
    GetSchedulesScheduleECandidateOfficeEnum["H"] = "H";
    GetSchedulesScheduleECandidateOfficeEnum["S"] = "S";
    GetSchedulesScheduleECandidateOfficeEnum["P"] = "P";
})(GetSchedulesScheduleECandidateOfficeEnum || (GetSchedulesScheduleECandidateOfficeEnum = {}));
export var GetSchedulesScheduleESupportOpposeIndicatorEnum;
(function (GetSchedulesScheduleESupportOpposeIndicatorEnum) {
    GetSchedulesScheduleESupportOpposeIndicatorEnum["S"] = "S";
    GetSchedulesScheduleESupportOpposeIndicatorEnum["O"] = "O";
})(GetSchedulesScheduleESupportOpposeIndicatorEnum || (GetSchedulesScheduleESupportOpposeIndicatorEnum = {}));
var GetSchedulesScheduleEQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleEQueryParams, _super);
    function GetSchedulesScheduleEQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_district" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_state" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_party" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "candidateParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_form" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_notice" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "isNotice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_expenditure_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEQueryParams.prototype, "lastExpenditureAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_expenditure_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEQueryParams.prototype, "lastExpenditureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEQueryParams.prototype, "lastIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_office_total_ytd" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEQueryParams.prototype, "lastOfficeTotalYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_support_oppose_indicator" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "lastSupportOpposeIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEQueryParams.prototype, "maxDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_dissemination_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEQueryParams.prototype, "maxDisseminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_filing_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEQueryParams.prototype, "maxFilingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_dissemination_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEQueryParams.prototype, "minDisseminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_filing_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEQueryParams.prototype, "minFilingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEQueryParams.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payee_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEQueryParams.prototype, "supportOpposeIndicator", void 0);
    return GetSchedulesScheduleEQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleEQueryParams };
var GetSchedulesScheduleERequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleERequest, _super);
    function GetSchedulesScheduleERequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleEQueryParams)
    ], GetSchedulesScheduleERequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleERequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleERequest };
var GetSchedulesScheduleEResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleEResponse, _super);
    function GetSchedulesScheduleEResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleEPage)
    ], GetSchedulesScheduleEResponse.prototype, "scheduleEPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleEResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleEResponse };
