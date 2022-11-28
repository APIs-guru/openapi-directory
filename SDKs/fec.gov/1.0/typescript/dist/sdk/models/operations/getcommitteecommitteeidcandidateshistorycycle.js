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
var GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams.prototype, "cycle", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams };
var GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams.prototype, "sortNullsLast", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams };
var GetCommitteeCommitteeIdCandidatesHistoryCycleRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryCycleRequest, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryCycleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryCycleRequest;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryCycleRequest };
var GetCommitteeCommitteeIdCandidatesHistoryCycleResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryCycleResponse, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryCycleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CandidateHistoryPage)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleResponse.prototype, "candidateHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesHistoryCycleResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryCycleResponse;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryCycleResponse };
