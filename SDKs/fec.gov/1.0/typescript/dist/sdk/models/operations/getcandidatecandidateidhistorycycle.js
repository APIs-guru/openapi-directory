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
var GetCandidateCandidateIdHistoryCyclePathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryCyclePathParams, _super);
    function GetCandidateCandidateIdHistoryCyclePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryCyclePathParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdHistoryCyclePathParams.prototype, "cycle", void 0);
    return GetCandidateCandidateIdHistoryCyclePathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryCyclePathParams };
var GetCandidateCandidateIdHistoryCycleQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryCycleQueryParams, _super);
    function GetCandidateCandidateIdHistoryCycleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryCycleQueryParams.prototype, "sortNullsLast", void 0);
    return GetCandidateCandidateIdHistoryCycleQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryCycleQueryParams };
var GetCandidateCandidateIdHistoryCycleRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryCycleRequest, _super);
    function GetCandidateCandidateIdHistoryCycleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdHistoryCyclePathParams)
    ], GetCandidateCandidateIdHistoryCycleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdHistoryCycleQueryParams)
    ], GetCandidateCandidateIdHistoryCycleRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdHistoryCycleRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryCycleRequest };
var GetCandidateCandidateIdHistoryCycleResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryCycleResponse, _super);
    function GetCandidateCandidateIdHistoryCycleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CandidateHistoryPage)
    ], GetCandidateCandidateIdHistoryCycleResponse.prototype, "candidateHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryCycleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdHistoryCycleResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdHistoryCycleResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryCycleResponse };
