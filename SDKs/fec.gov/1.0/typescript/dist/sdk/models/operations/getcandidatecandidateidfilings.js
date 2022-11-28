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
var GetCandidateCandidateIdFilingsPathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdFilingsPathParams, _super);
    function GetCandidateCandidateIdFilingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdFilingsPathParams.prototype, "candidateId", void 0);
    return GetCandidateCandidateIdFilingsPathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdFilingsPathParams };
export var GetCandidateCandidateIdFilingsAmendmentIndicatorEnum;
(function (GetCandidateCandidateIdFilingsAmendmentIndicatorEnum) {
    GetCandidateCandidateIdFilingsAmendmentIndicatorEnum["Unknown"] = "";
    GetCandidateCandidateIdFilingsAmendmentIndicatorEnum["N"] = "N";
    GetCandidateCandidateIdFilingsAmendmentIndicatorEnum["A"] = "A";
    GetCandidateCandidateIdFilingsAmendmentIndicatorEnum["T"] = "T";
    GetCandidateCandidateIdFilingsAmendmentIndicatorEnum["C"] = "C";
    GetCandidateCandidateIdFilingsAmendmentIndicatorEnum["M"] = "M";
    GetCandidateCandidateIdFilingsAmendmentIndicatorEnum["S"] = "S";
})(GetCandidateCandidateIdFilingsAmendmentIndicatorEnum || (GetCandidateCandidateIdFilingsAmendmentIndicatorEnum = {}));
export var GetCandidateCandidateIdFilingsFilerTypeEnum;
(function (GetCandidateCandidateIdFilingsFilerTypeEnum) {
    GetCandidateCandidateIdFilingsFilerTypeEnum["EFile"] = "e-file";
    GetCandidateCandidateIdFilingsFilerTypeEnum["Paper"] = "paper";
})(GetCandidateCandidateIdFilingsFilerTypeEnum || (GetCandidateCandidateIdFilingsFilerTypeEnum = {}));
export var GetCandidateCandidateIdFilingsOfficeEnum;
(function (GetCandidateCandidateIdFilingsOfficeEnum) {
    GetCandidateCandidateIdFilingsOfficeEnum["Unknown"] = "";
    GetCandidateCandidateIdFilingsOfficeEnum["H"] = "H";
    GetCandidateCandidateIdFilingsOfficeEnum["S"] = "S";
    GetCandidateCandidateIdFilingsOfficeEnum["P"] = "P";
})(GetCandidateCandidateIdFilingsOfficeEnum || (GetCandidateCandidateIdFilingsOfficeEnum = {}));
var GetCandidateCandidateIdFilingsQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdFilingsQueryParams, _super);
    function GetCandidateCandidateIdFilingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=document_type" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_number" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filer_type" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "filerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_category" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "formCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_type" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_amended" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" }),
        __metadata("design:type", Date)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "maxReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" }),
        __metadata("design:type", Date)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "minReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=primary_general_indicator" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "primaryGeneralIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_year" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_type" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdFilingsQueryParams.prototype, "state", void 0);
    return GetCandidateCandidateIdFilingsQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdFilingsQueryParams };
var GetCandidateCandidateIdFilingsRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdFilingsRequest, _super);
    function GetCandidateCandidateIdFilingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdFilingsPathParams)
    ], GetCandidateCandidateIdFilingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdFilingsQueryParams)
    ], GetCandidateCandidateIdFilingsRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdFilingsRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdFilingsRequest };
var GetCandidateCandidateIdFilingsResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdFilingsResponse, _super);
    function GetCandidateCandidateIdFilingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdFilingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FilingsPage)
    ], GetCandidateCandidateIdFilingsResponse.prototype, "filingsPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdFilingsResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdFilingsResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdFilingsResponse };
