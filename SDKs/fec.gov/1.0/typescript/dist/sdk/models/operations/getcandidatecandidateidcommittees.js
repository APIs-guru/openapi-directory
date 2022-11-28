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
var GetCandidateCandidateIdCommitteesPathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesPathParams, _super);
    function GetCandidateCandidateIdCommitteesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesPathParams.prototype, "candidateId", void 0);
    return GetCandidateCandidateIdCommitteesPathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesPathParams };
export var GetCandidateCandidateIdCommitteesCommitteeTypeEnum;
(function (GetCandidateCandidateIdCommitteesCommitteeTypeEnum) {
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["Unknown"] = "";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["C"] = "C";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["D"] = "D";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["E"] = "E";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["H"] = "H";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["I"] = "I";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["N"] = "N";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["O"] = "O";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["P"] = "P";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["Q"] = "Q";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["S"] = "S";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["U"] = "U";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["V"] = "V";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["W"] = "W";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["X"] = "X";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["Y"] = "Y";
    GetCandidateCandidateIdCommitteesCommitteeTypeEnum["Z"] = "Z";
})(GetCandidateCandidateIdCommitteesCommitteeTypeEnum || (GetCandidateCandidateIdCommitteesCommitteeTypeEnum = {}));
export var GetCandidateCandidateIdCommitteesDesignationEnum;
(function (GetCandidateCandidateIdCommitteesDesignationEnum) {
    GetCandidateCandidateIdCommitteesDesignationEnum["Unknown"] = "";
    GetCandidateCandidateIdCommitteesDesignationEnum["A"] = "A";
    GetCandidateCandidateIdCommitteesDesignationEnum["J"] = "J";
    GetCandidateCandidateIdCommitteesDesignationEnum["P"] = "P";
    GetCandidateCandidateIdCommitteesDesignationEnum["U"] = "U";
    GetCandidateCandidateIdCommitteesDesignationEnum["B"] = "B";
    GetCandidateCandidateIdCommitteesDesignationEnum["D"] = "D";
})(GetCandidateCandidateIdCommitteesDesignationEnum || (GetCandidateCandidateIdCommitteesDesignationEnum = {}));
export var GetCandidateCandidateIdCommitteesFilingFrequencyEnum;
(function (GetCandidateCandidateIdCommitteesFilingFrequencyEnum) {
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["Unknown"] = "";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["A"] = "A";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["M"] = "M";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["N"] = "N";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["Q"] = "Q";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["T"] = "T";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["W"] = "W";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["MinusA"] = "-A";
    GetCandidateCandidateIdCommitteesFilingFrequencyEnum["MinusT"] = "-T";
})(GetCandidateCandidateIdCommitteesFilingFrequencyEnum || (GetCandidateCandidateIdCommitteesFilingFrequencyEnum = {}));
export var GetCandidateCandidateIdCommitteesOrganizationTypeEnum;
(function (GetCandidateCandidateIdCommitteesOrganizationTypeEnum) {
    GetCandidateCandidateIdCommitteesOrganizationTypeEnum["Unknown"] = "";
    GetCandidateCandidateIdCommitteesOrganizationTypeEnum["C"] = "C";
    GetCandidateCandidateIdCommitteesOrganizationTypeEnum["L"] = "L";
    GetCandidateCandidateIdCommitteesOrganizationTypeEnum["M"] = "M";
    GetCandidateCandidateIdCommitteesOrganizationTypeEnum["T"] = "T";
    GetCandidateCandidateIdCommitteesOrganizationTypeEnum["V"] = "V";
    GetCandidateCandidateIdCommitteesOrganizationTypeEnum["W"] = "W";
})(GetCandidateCandidateIdCommitteesOrganizationTypeEnum || (GetCandidateCandidateIdCommitteesOrganizationTypeEnum = {}));
var GetCandidateCandidateIdCommitteesQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesQueryParams, _super);
    function GetCandidateCandidateIdCommitteesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization_type" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesQueryParams.prototype, "year", void 0);
    return GetCandidateCandidateIdCommitteesQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesQueryParams };
var GetCandidateCandidateIdCommitteesRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesRequest, _super);
    function GetCandidateCandidateIdCommitteesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdCommitteesPathParams)
    ], GetCandidateCandidateIdCommitteesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdCommitteesQueryParams)
    ], GetCandidateCandidateIdCommitteesRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdCommitteesRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesRequest };
var GetCandidateCandidateIdCommitteesResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesResponse, _super);
    function GetCandidateCandidateIdCommitteesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeDetailPage)
    ], GetCandidateCandidateIdCommitteesResponse.prototype, "committeeDetailPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdCommitteesResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesResponse };
