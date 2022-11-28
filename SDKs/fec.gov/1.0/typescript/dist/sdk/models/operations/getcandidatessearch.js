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
export var GetCandidatesSearchCandidateStatusEnum;
(function (GetCandidatesSearchCandidateStatusEnum) {
    GetCandidatesSearchCandidateStatusEnum["Unknown"] = "";
    GetCandidatesSearchCandidateStatusEnum["C"] = "C";
    GetCandidatesSearchCandidateStatusEnum["F"] = "F";
    GetCandidatesSearchCandidateStatusEnum["N"] = "N";
    GetCandidatesSearchCandidateStatusEnum["P"] = "P";
})(GetCandidatesSearchCandidateStatusEnum || (GetCandidatesSearchCandidateStatusEnum = {}));
export var GetCandidatesSearchIncumbentChallengeEnum;
(function (GetCandidatesSearchIncumbentChallengeEnum) {
    GetCandidatesSearchIncumbentChallengeEnum["Unknown"] = "";
    GetCandidatesSearchIncumbentChallengeEnum["I"] = "I";
    GetCandidatesSearchIncumbentChallengeEnum["C"] = "C";
    GetCandidatesSearchIncumbentChallengeEnum["O"] = "O";
})(GetCandidatesSearchIncumbentChallengeEnum || (GetCandidatesSearchIncumbentChallengeEnum = {}));
export var GetCandidatesSearchOfficeEnum;
(function (GetCandidatesSearchOfficeEnum) {
    GetCandidatesSearchOfficeEnum["Unknown"] = "";
    GetCandidatesSearchOfficeEnum["H"] = "H";
    GetCandidatesSearchOfficeEnum["S"] = "S";
    GetCandidatesSearchOfficeEnum["P"] = "P";
})(GetCandidatesSearchOfficeEnum || (GetCandidatesSearchOfficeEnum = {}));
var GetCandidatesSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidatesSearchQueryParams, _super);
    function GetCandidatesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidatesSearchQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_status" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "candidateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesSearchQueryParams.prototype, "federalFundsFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_raised_funds" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesSearchQueryParams.prototype, "hasRaisedFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incumbent_challenge" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "incumbentChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesSearchQueryParams.prototype, "isActiveCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_first_file_date" }),
        __metadata("design:type", Date)
    ], GetCandidatesSearchQueryParams.prototype, "maxFirstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_first_file_date" }),
        __metadata("design:type", Date)
    ], GetCandidatesSearchQueryParams.prototype, "minFirstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidatesSearchQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidatesSearchQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidatesSearchQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesSearchQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesSearchQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesSearchQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetCandidatesSearchQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetCandidatesSearchQueryParams.prototype, "year", void 0);
    return GetCandidatesSearchQueryParams;
}(SpeakeasyBase));
export { GetCandidatesSearchQueryParams };
var GetCandidatesSearchRequest = /** @class */ (function (_super) {
    __extends(GetCandidatesSearchRequest, _super);
    function GetCandidatesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidatesSearchQueryParams)
    ], GetCandidatesSearchRequest.prototype, "queryParams", void 0);
    return GetCandidatesSearchRequest;
}(SpeakeasyBase));
export { GetCandidatesSearchRequest };
var GetCandidatesSearchResponse = /** @class */ (function (_super) {
    __extends(GetCandidatesSearchResponse, _super);
    function GetCandidatesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CandidatePage)
    ], GetCandidatesSearchResponse.prototype, "candidatePage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidatesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidatesSearchResponse.prototype, "statusCode", void 0);
    return GetCandidatesSearchResponse;
}(SpeakeasyBase));
export { GetCandidatesSearchResponse };
