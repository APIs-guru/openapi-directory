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
var GetSchedulesScheduleASubIdPathParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleASubIdPathParams, _super);
    function GetSchedulesScheduleASubIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdPathParams.prototype, "subId", void 0);
    return GetSchedulesScheduleASubIdPathParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleASubIdPathParams };
export var GetSchedulesScheduleASubIdContributorTypeEnum;
(function (GetSchedulesScheduleASubIdContributorTypeEnum) {
    GetSchedulesScheduleASubIdContributorTypeEnum["Individual"] = "individual";
    GetSchedulesScheduleASubIdContributorTypeEnum["Committee"] = "committee";
})(GetSchedulesScheduleASubIdContributorTypeEnum || (GetSchedulesScheduleASubIdContributorTypeEnum = {}));
export var GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum;
(function (GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum) {
    GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum["Unknown"] = "";
    GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum["A"] = "A";
    GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum["J"] = "J";
    GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum["P"] = "P";
    GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum["U"] = "U";
    GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum["B"] = "B";
    GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum["D"] = "D";
})(GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum || (GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum = {}));
export var GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum;
(function (GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum) {
    GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum["Unknown"] = "";
    GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum["C"] = "C";
    GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum["L"] = "L";
    GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum["M"] = "M";
    GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum["T"] = "T";
    GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum["V"] = "V";
    GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum["W"] = "W";
})(GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum || (GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum = {}));
export var GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum;
(function (GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum) {
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["Unknown"] = "";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["C"] = "C";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["D"] = "D";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["E"] = "E";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["H"] = "H";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["I"] = "I";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["N"] = "N";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["O"] = "O";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["P"] = "P";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["Q"] = "Q";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["S"] = "S";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["U"] = "U";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["V"] = "V";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["W"] = "W";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["X"] = "X";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["Y"] = "Y";
    GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum["Z"] = "Z";
})(GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum || (GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum = {}));
var GetSchedulesScheduleASubIdQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleASubIdQueryParams, _super);
    function GetSchedulesScheduleASubIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_city" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_employer" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorEmployer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_occupation" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorOccupation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_state" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_zip" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "contributorZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_individual" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "isIndividual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "lastContributionReceiptAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "lastContributionReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "lastIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "maxDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "maxLoadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "minLoadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_designation" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "recipientCommitteeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_org_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "recipientCommitteeOrgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "recipientCommitteeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleASubIdQueryParams.prototype, "twoYearTransactionPeriod", void 0);
    return GetSchedulesScheduleASubIdQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleASubIdQueryParams };
var GetSchedulesScheduleASubIdRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleASubIdRequest, _super);
    function GetSchedulesScheduleASubIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleASubIdPathParams)
    ], GetSchedulesScheduleASubIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleASubIdQueryParams)
    ], GetSchedulesScheduleASubIdRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleASubIdRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleASubIdRequest };
var GetSchedulesScheduleASubIdResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleASubIdResponse, _super);
    function GetSchedulesScheduleASubIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleASubIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleAPage)
    ], GetSchedulesScheduleASubIdResponse.prototype, "scheduleAPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleASubIdResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleASubIdResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleASubIdResponse };
