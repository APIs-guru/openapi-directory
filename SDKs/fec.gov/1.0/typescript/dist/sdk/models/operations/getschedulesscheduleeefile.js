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
export var GetSchedulesScheduleEEfileCandidateOfficeEnum;
(function (GetSchedulesScheduleEEfileCandidateOfficeEnum) {
    GetSchedulesScheduleEEfileCandidateOfficeEnum["Unknown"] = "";
    GetSchedulesScheduleEEfileCandidateOfficeEnum["H"] = "H";
    GetSchedulesScheduleEEfileCandidateOfficeEnum["S"] = "S";
    GetSchedulesScheduleEEfileCandidateOfficeEnum["P"] = "P";
})(GetSchedulesScheduleEEfileCandidateOfficeEnum || (GetSchedulesScheduleEEfileCandidateOfficeEnum = {}));
export var GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum;
(function (GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum) {
    GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum["S"] = "S";
    GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum["O"] = "O";
})(GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum || (GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum = {}));
var GetSchedulesScheduleEEfileQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleEEfileQueryParams, _super);
    function GetSchedulesScheduleEEfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_district" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_state" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_party" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "candidateParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_search" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "candidateSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_form" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_notice" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "isNotice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_dissemination_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "maxDisseminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_expenditure_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "maxExpenditureAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_expenditure_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "maxExpenditureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_filed_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "maxFiledDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_dissemination_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "minDisseminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_expenditure_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "minExpenditureAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_expenditure_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "minExpenditureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_filed_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "minFiledDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payee_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "spenderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleEEfileQueryParams.prototype, "supportOpposeIndicator", void 0);
    return GetSchedulesScheduleEEfileQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleEEfileQueryParams };
var GetSchedulesScheduleEEfileRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleEEfileRequest, _super);
    function GetSchedulesScheduleEEfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleEEfileQueryParams)
    ], GetSchedulesScheduleEEfileRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleEEfileRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleEEfileRequest };
var GetSchedulesScheduleEEfileResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleEEfileResponse, _super);
    function GetSchedulesScheduleEEfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleEEfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleEEfilePage)
    ], GetSchedulesScheduleEEfileResponse.prototype, "scheduleEEfilePage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleEEfileResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleEEfileResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleEEfileResponse };
