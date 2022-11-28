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
export var GetFilingsAmendmentIndicatorEnum;
(function (GetFilingsAmendmentIndicatorEnum) {
    GetFilingsAmendmentIndicatorEnum["Unknown"] = "";
    GetFilingsAmendmentIndicatorEnum["N"] = "N";
    GetFilingsAmendmentIndicatorEnum["A"] = "A";
    GetFilingsAmendmentIndicatorEnum["T"] = "T";
    GetFilingsAmendmentIndicatorEnum["C"] = "C";
    GetFilingsAmendmentIndicatorEnum["M"] = "M";
    GetFilingsAmendmentIndicatorEnum["S"] = "S";
})(GetFilingsAmendmentIndicatorEnum || (GetFilingsAmendmentIndicatorEnum = {}));
export var GetFilingsFilerTypeEnum;
(function (GetFilingsFilerTypeEnum) {
    GetFilingsFilerTypeEnum["EFile"] = "e-file";
    GetFilingsFilerTypeEnum["Paper"] = "paper";
})(GetFilingsFilerTypeEnum || (GetFilingsFilerTypeEnum = {}));
export var GetFilingsOfficeEnum;
(function (GetFilingsOfficeEnum) {
    GetFilingsOfficeEnum["Unknown"] = "";
    GetFilingsOfficeEnum["H"] = "H";
    GetFilingsOfficeEnum["S"] = "S";
    GetFilingsOfficeEnum["P"] = "P";
})(GetFilingsOfficeEnum || (GetFilingsOfficeEnum = {}));
var GetFilingsQueryParams = /** @class */ (function (_super) {
    __extends(GetFilingsQueryParams, _super);
    function GetFilingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetFilingsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" }),
        __metadata("design:type", String)
    ], GetFilingsQueryParams.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=document_type" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_number" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filer_type" }),
        __metadata("design:type", String)
    ], GetFilingsQueryParams.prototype, "filerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_category" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "formCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_type" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_amended" }),
        __metadata("design:type", Boolean)
    ], GetFilingsQueryParams.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" }),
        __metadata("design:type", Date)
    ], GetFilingsQueryParams.prototype, "maxReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" }),
        __metadata("design:type", Date)
    ], GetFilingsQueryParams.prototype, "minReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" }),
        __metadata("design:type", Boolean)
    ], GetFilingsQueryParams.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFilingsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetFilingsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=primary_general_indicator" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "primaryGeneralIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_year" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_type" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetFilingsQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetFilingsQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetFilingsQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetFilingsQueryParams.prototype, "state", void 0);
    return GetFilingsQueryParams;
}(SpeakeasyBase));
export { GetFilingsQueryParams };
var GetFilingsRequest = /** @class */ (function (_super) {
    __extends(GetFilingsRequest, _super);
    function GetFilingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilingsQueryParams)
    ], GetFilingsRequest.prototype, "queryParams", void 0);
    return GetFilingsRequest;
}(SpeakeasyBase));
export { GetFilingsRequest };
var GetFilingsResponse = /** @class */ (function (_super) {
    __extends(GetFilingsResponse, _super);
    function GetFilingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FilingsPage)
    ], GetFilingsResponse.prototype, "filingsPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilingsResponse.prototype, "statusCode", void 0);
    return GetFilingsResponse;
}(SpeakeasyBase));
export { GetFilingsResponse };
