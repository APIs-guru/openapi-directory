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
export var GetSchedulesScheduleAContributorTypeEnum;
(function (GetSchedulesScheduleAContributorTypeEnum) {
    GetSchedulesScheduleAContributorTypeEnum["Individual"] = "individual";
    GetSchedulesScheduleAContributorTypeEnum["Committee"] = "committee";
})(GetSchedulesScheduleAContributorTypeEnum || (GetSchedulesScheduleAContributorTypeEnum = {}));
export var GetSchedulesScheduleARecipientCommitteeDesignationEnum;
(function (GetSchedulesScheduleARecipientCommitteeDesignationEnum) {
    GetSchedulesScheduleARecipientCommitteeDesignationEnum["Unknown"] = "";
    GetSchedulesScheduleARecipientCommitteeDesignationEnum["A"] = "A";
    GetSchedulesScheduleARecipientCommitteeDesignationEnum["J"] = "J";
    GetSchedulesScheduleARecipientCommitteeDesignationEnum["P"] = "P";
    GetSchedulesScheduleARecipientCommitteeDesignationEnum["U"] = "U";
    GetSchedulesScheduleARecipientCommitteeDesignationEnum["B"] = "B";
    GetSchedulesScheduleARecipientCommitteeDesignationEnum["D"] = "D";
})(GetSchedulesScheduleARecipientCommitteeDesignationEnum || (GetSchedulesScheduleARecipientCommitteeDesignationEnum = {}));
export var GetSchedulesScheduleARecipientCommitteeOrgTypeEnum;
(function (GetSchedulesScheduleARecipientCommitteeOrgTypeEnum) {
    GetSchedulesScheduleARecipientCommitteeOrgTypeEnum["Unknown"] = "";
    GetSchedulesScheduleARecipientCommitteeOrgTypeEnum["C"] = "C";
    GetSchedulesScheduleARecipientCommitteeOrgTypeEnum["L"] = "L";
    GetSchedulesScheduleARecipientCommitteeOrgTypeEnum["M"] = "M";
    GetSchedulesScheduleARecipientCommitteeOrgTypeEnum["T"] = "T";
    GetSchedulesScheduleARecipientCommitteeOrgTypeEnum["V"] = "V";
    GetSchedulesScheduleARecipientCommitteeOrgTypeEnum["W"] = "W";
})(GetSchedulesScheduleARecipientCommitteeOrgTypeEnum || (GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = {}));
export var GetSchedulesScheduleARecipientCommitteeTypeEnum;
(function (GetSchedulesScheduleARecipientCommitteeTypeEnum) {
    GetSchedulesScheduleARecipientCommitteeTypeEnum["Unknown"] = "";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["C"] = "C";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["D"] = "D";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["E"] = "E";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["H"] = "H";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["I"] = "I";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["N"] = "N";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["O"] = "O";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["P"] = "P";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["Q"] = "Q";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["S"] = "S";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["U"] = "U";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["V"] = "V";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["W"] = "W";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["X"] = "X";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["Y"] = "Y";
    GetSchedulesScheduleARecipientCommitteeTypeEnum["Z"] = "Z";
})(GetSchedulesScheduleARecipientCommitteeTypeEnum || (GetSchedulesScheduleARecipientCommitteeTypeEnum = {}));
var GetSchedulesScheduleAQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleAQueryParams, _super);
    function GetSchedulesScheduleAQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_city" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_employer" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorEmployer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_occupation" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorOccupation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_state" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_zip" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "contributorZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_individual" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleAQueryParams.prototype, "isIndividual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleAQueryParams.prototype, "lastContributionReceiptAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleAQueryParams.prototype, "lastContributionReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleAQueryParams.prototype, "lastIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleAQueryParams.prototype, "maxDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleAQueryParams.prototype, "maxLoadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAQueryParams.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleAQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleAQueryParams.prototype, "minLoadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleAQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_designation" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "recipientCommitteeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_org_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "recipientCommitteeOrgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "recipientCommitteeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleAQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleAQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleAQueryParams.prototype, "twoYearTransactionPeriod", void 0);
    return GetSchedulesScheduleAQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleAQueryParams };
var GetSchedulesScheduleARequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleARequest, _super);
    function GetSchedulesScheduleARequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleAQueryParams)
    ], GetSchedulesScheduleARequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleARequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleARequest };
var GetSchedulesScheduleAResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleAResponse, _super);
    function GetSchedulesScheduleAResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleAResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleAPage)
    ], GetSchedulesScheduleAResponse.prototype, "scheduleAPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleAResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleAResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleAResponse };
