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
export var GetSchedulesScheduleBSpenderCommitteeDesignationEnum;
(function (GetSchedulesScheduleBSpenderCommitteeDesignationEnum) {
    GetSchedulesScheduleBSpenderCommitteeDesignationEnum["Unknown"] = "";
    GetSchedulesScheduleBSpenderCommitteeDesignationEnum["A"] = "A";
    GetSchedulesScheduleBSpenderCommitteeDesignationEnum["J"] = "J";
    GetSchedulesScheduleBSpenderCommitteeDesignationEnum["P"] = "P";
    GetSchedulesScheduleBSpenderCommitteeDesignationEnum["U"] = "U";
    GetSchedulesScheduleBSpenderCommitteeDesignationEnum["B"] = "B";
    GetSchedulesScheduleBSpenderCommitteeDesignationEnum["D"] = "D";
})(GetSchedulesScheduleBSpenderCommitteeDesignationEnum || (GetSchedulesScheduleBSpenderCommitteeDesignationEnum = {}));
export var GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum;
(function (GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum) {
    GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum["Unknown"] = "";
    GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum["C"] = "C";
    GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum["L"] = "L";
    GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum["M"] = "M";
    GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum["T"] = "T";
    GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum["V"] = "V";
    GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum["W"] = "W";
})(GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum || (GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = {}));
export var GetSchedulesScheduleBSpenderCommitteeTypeEnum;
(function (GetSchedulesScheduleBSpenderCommitteeTypeEnum) {
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["Unknown"] = "";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["C"] = "C";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["D"] = "D";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["E"] = "E";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["H"] = "H";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["I"] = "I";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["N"] = "N";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["O"] = "O";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["P"] = "P";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["Q"] = "Q";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["S"] = "S";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["U"] = "U";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["V"] = "V";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["W"] = "W";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["X"] = "X";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["Y"] = "Y";
    GetSchedulesScheduleBSpenderCommitteeTypeEnum["Z"] = "Z";
})(GetSchedulesScheduleBSpenderCommitteeTypeEnum || (GetSchedulesScheduleBSpenderCommitteeTypeEnum = {}));
var GetSchedulesScheduleBQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleBQueryParams, _super);
    function GetSchedulesScheduleBQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disbursement_description" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "disbursementDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disbursement_purpose_category" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "disbursementPurposeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_disbursement_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBQueryParams.prototype, "lastDisbursementAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_disbursement_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleBQueryParams.prototype, "lastDisbursementDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBQueryParams.prototype, "lastIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleBQueryParams.prototype, "maxDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBQueryParams.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleBQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_city" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "recipientCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "recipientCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "recipientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_state" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "recipientState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleBQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleBQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_committee_designation" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "spenderCommitteeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_committee_org_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "spenderCommitteeOrgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_committee_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "spenderCommitteeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBQueryParams.prototype, "twoYearTransactionPeriod", void 0);
    return GetSchedulesScheduleBQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleBQueryParams };
var GetSchedulesScheduleBRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleBRequest, _super);
    function GetSchedulesScheduleBRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleBQueryParams)
    ], GetSchedulesScheduleBRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleBRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleBRequest };
var GetSchedulesScheduleBResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleBResponse, _super);
    function GetSchedulesScheduleBResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleBPage)
    ], GetSchedulesScheduleBResponse.prototype, "scheduleBPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleBResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleBResponse };
