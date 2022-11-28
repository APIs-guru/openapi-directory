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
var GetCandidateCandidateIdCommitteesHistoryCyclePathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryCyclePathParams, _super);
    function GetCandidateCandidateIdCommitteesHistoryCyclePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryCyclePathParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesHistoryCyclePathParams.prototype, "cycle", void 0);
    return GetCandidateCandidateIdCommitteesHistoryCyclePathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryCyclePathParams };
export var GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum;
(function (GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum) {
    GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum["Unknown"] = "";
    GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum["A"] = "A";
    GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum["J"] = "J";
    GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum["P"] = "P";
    GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum["U"] = "U";
    GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum["B"] = "B";
    GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum["D"] = "D";
})(GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum || (GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum = {}));
var GetCandidateCandidateIdCommitteesHistoryCycleQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryCycleQueryParams, _super);
    function GetCandidateCandidateIdCommitteesHistoryCycleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryCycleQueryParams.prototype, "sortNullsLast", void 0);
    return GetCandidateCandidateIdCommitteesHistoryCycleQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryCycleQueryParams };
var GetCandidateCandidateIdCommitteesHistoryCycleRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryCycleRequest, _super);
    function GetCandidateCandidateIdCommitteesHistoryCycleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdCommitteesHistoryCyclePathParams)
    ], GetCandidateCandidateIdCommitteesHistoryCycleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdCommitteesHistoryCycleQueryParams)
    ], GetCandidateCandidateIdCommitteesHistoryCycleRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdCommitteesHistoryCycleRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryCycleRequest };
var GetCandidateCandidateIdCommitteesHistoryCycleResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryCycleResponse, _super);
    function GetCandidateCandidateIdCommitteesHistoryCycleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeHistoryPage)
    ], GetCandidateCandidateIdCommitteesHistoryCycleResponse.prototype, "committeeHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryCycleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesHistoryCycleResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdCommitteesHistoryCycleResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryCycleResponse };
