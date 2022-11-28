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
var GetCandidateCandidateIdPathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdPathParams, _super);
    function GetCandidateCandidateIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdPathParams.prototype, "candidateId", void 0);
    return GetCandidateCandidateIdPathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdPathParams };
export var GetCandidateCandidateIdCandidateStatusEnum;
(function (GetCandidateCandidateIdCandidateStatusEnum) {
    GetCandidateCandidateIdCandidateStatusEnum["Unknown"] = "";
    GetCandidateCandidateIdCandidateStatusEnum["C"] = "C";
    GetCandidateCandidateIdCandidateStatusEnum["F"] = "F";
    GetCandidateCandidateIdCandidateStatusEnum["N"] = "N";
    GetCandidateCandidateIdCandidateStatusEnum["P"] = "P";
})(GetCandidateCandidateIdCandidateStatusEnum || (GetCandidateCandidateIdCandidateStatusEnum = {}));
export var GetCandidateCandidateIdIncumbentChallengeEnum;
(function (GetCandidateCandidateIdIncumbentChallengeEnum) {
    GetCandidateCandidateIdIncumbentChallengeEnum["Unknown"] = "";
    GetCandidateCandidateIdIncumbentChallengeEnum["I"] = "I";
    GetCandidateCandidateIdIncumbentChallengeEnum["C"] = "C";
    GetCandidateCandidateIdIncumbentChallengeEnum["O"] = "O";
})(GetCandidateCandidateIdIncumbentChallengeEnum || (GetCandidateCandidateIdIncumbentChallengeEnum = {}));
export var GetCandidateCandidateIdOfficeEnum;
(function (GetCandidateCandidateIdOfficeEnum) {
    GetCandidateCandidateIdOfficeEnum["Unknown"] = "";
    GetCandidateCandidateIdOfficeEnum["H"] = "H";
    GetCandidateCandidateIdOfficeEnum["S"] = "S";
    GetCandidateCandidateIdOfficeEnum["P"] = "P";
})(GetCandidateCandidateIdOfficeEnum || (GetCandidateCandidateIdOfficeEnum = {}));
var GetCandidateCandidateIdQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdQueryParams, _super);
    function GetCandidateCandidateIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_status" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "candidateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdQueryParams.prototype, "federalFundsFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_raised_funds" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdQueryParams.prototype, "hasRaisedFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incumbent_challenge" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "incumbentChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdQueryParams.prototype, "year", void 0);
    return GetCandidateCandidateIdQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdQueryParams };
var GetCandidateCandidateIdRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdRequest, _super);
    function GetCandidateCandidateIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdPathParams)
    ], GetCandidateCandidateIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdQueryParams)
    ], GetCandidateCandidateIdRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdRequest };
var GetCandidateCandidateIdResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdResponse, _super);
    function GetCandidateCandidateIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CandidateDetailPage)
    ], GetCandidateCandidateIdResponse.prototype, "candidateDetailPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdResponse };
