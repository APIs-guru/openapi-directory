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
export var GetCommitteesCommitteeTypeEnum;
(function (GetCommitteesCommitteeTypeEnum) {
    GetCommitteesCommitteeTypeEnum["Unknown"] = "";
    GetCommitteesCommitteeTypeEnum["C"] = "C";
    GetCommitteesCommitteeTypeEnum["D"] = "D";
    GetCommitteesCommitteeTypeEnum["E"] = "E";
    GetCommitteesCommitteeTypeEnum["H"] = "H";
    GetCommitteesCommitteeTypeEnum["I"] = "I";
    GetCommitteesCommitteeTypeEnum["N"] = "N";
    GetCommitteesCommitteeTypeEnum["O"] = "O";
    GetCommitteesCommitteeTypeEnum["P"] = "P";
    GetCommitteesCommitteeTypeEnum["Q"] = "Q";
    GetCommitteesCommitteeTypeEnum["S"] = "S";
    GetCommitteesCommitteeTypeEnum["U"] = "U";
    GetCommitteesCommitteeTypeEnum["V"] = "V";
    GetCommitteesCommitteeTypeEnum["W"] = "W";
    GetCommitteesCommitteeTypeEnum["X"] = "X";
    GetCommitteesCommitteeTypeEnum["Y"] = "Y";
    GetCommitteesCommitteeTypeEnum["Z"] = "Z";
})(GetCommitteesCommitteeTypeEnum || (GetCommitteesCommitteeTypeEnum = {}));
export var GetCommitteesDesignationEnum;
(function (GetCommitteesDesignationEnum) {
    GetCommitteesDesignationEnum["Unknown"] = "";
    GetCommitteesDesignationEnum["A"] = "A";
    GetCommitteesDesignationEnum["J"] = "J";
    GetCommitteesDesignationEnum["P"] = "P";
    GetCommitteesDesignationEnum["U"] = "U";
    GetCommitteesDesignationEnum["B"] = "B";
    GetCommitteesDesignationEnum["D"] = "D";
})(GetCommitteesDesignationEnum || (GetCommitteesDesignationEnum = {}));
export var GetCommitteesFilingFrequencyEnum;
(function (GetCommitteesFilingFrequencyEnum) {
    GetCommitteesFilingFrequencyEnum["Unknown"] = "";
    GetCommitteesFilingFrequencyEnum["A"] = "A";
    GetCommitteesFilingFrequencyEnum["M"] = "M";
    GetCommitteesFilingFrequencyEnum["N"] = "N";
    GetCommitteesFilingFrequencyEnum["Q"] = "Q";
    GetCommitteesFilingFrequencyEnum["T"] = "T";
    GetCommitteesFilingFrequencyEnum["W"] = "W";
    GetCommitteesFilingFrequencyEnum["MinusA"] = "-A";
    GetCommitteesFilingFrequencyEnum["MinusT"] = "-T";
})(GetCommitteesFilingFrequencyEnum || (GetCommitteesFilingFrequencyEnum = {}));
export var GetCommitteesOrganizationTypeEnum;
(function (GetCommitteesOrganizationTypeEnum) {
    GetCommitteesOrganizationTypeEnum["Unknown"] = "";
    GetCommitteesOrganizationTypeEnum["C"] = "C";
    GetCommitteesOrganizationTypeEnum["L"] = "L";
    GetCommitteesOrganizationTypeEnum["M"] = "M";
    GetCommitteesOrganizationTypeEnum["T"] = "T";
    GetCommitteesOrganizationTypeEnum["V"] = "V";
    GetCommitteesOrganizationTypeEnum["W"] = "W";
})(GetCommitteesOrganizationTypeEnum || (GetCommitteesOrganizationTypeEnum = {}));
var GetCommitteesQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteesQueryParams, _super);
    function GetCommitteesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_first_file_date" }),
        __metadata("design:type", Date)
    ], GetCommitteesQueryParams.prototype, "maxFirstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_last_f1_date" }),
        __metadata("design:type", Date)
    ], GetCommitteesQueryParams.prototype, "maxLastF1Date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_first_file_date" }),
        __metadata("design:type", Date)
    ], GetCommitteesQueryParams.prototype, "minFirstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_last_f1_date" }),
        __metadata("design:type", Date)
    ], GetCommitteesQueryParams.prototype, "minLastF1Date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization_type" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommitteesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteesQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteesQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteesQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor_candidate_id" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "sponsorCandidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=treasurer_name" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "treasurerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Array)
    ], GetCommitteesQueryParams.prototype, "year", void 0);
    return GetCommitteesQueryParams;
}(SpeakeasyBase));
export { GetCommitteesQueryParams };
var GetCommitteesRequest = /** @class */ (function (_super) {
    __extends(GetCommitteesRequest, _super);
    function GetCommitteesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteesQueryParams)
    ], GetCommitteesRequest.prototype, "queryParams", void 0);
    return GetCommitteesRequest;
}(SpeakeasyBase));
export { GetCommitteesRequest };
var GetCommitteesResponse = /** @class */ (function (_super) {
    __extends(GetCommitteesResponse, _super);
    function GetCommitteesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteePage)
    ], GetCommitteesResponse.prototype, "committeePage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommitteesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommitteesResponse.prototype, "statusCode", void 0);
    return GetCommitteesResponse;
}(SpeakeasyBase));
export { GetCommitteesResponse };
