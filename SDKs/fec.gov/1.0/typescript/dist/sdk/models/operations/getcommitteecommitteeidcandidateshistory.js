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
var GetCommitteeCommitteeIdCandidatesHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryPathParams, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryPathParams.prototype, "committeeId", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryPathParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryPathParams };
var GetCommitteeCommitteeIdCandidatesHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryQueryParams, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesHistoryQueryParams.prototype, "sortNullsLast", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryQueryParams;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryQueryParams };
var GetCommitteeCommitteeIdCandidatesHistoryRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryRequest, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdCandidatesHistoryPathParams)
    ], GetCommitteeCommitteeIdCandidatesHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommitteeCommitteeIdCandidatesHistoryQueryParams)
    ], GetCommitteeCommitteeIdCandidatesHistoryRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryRequest;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryRequest };
var GetCommitteeCommitteeIdCandidatesHistoryResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesHistoryResponse, _super);
    function GetCommitteeCommitteeIdCandidatesHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CandidateHistoryPage)
    ], GetCommitteeCommitteeIdCandidatesHistoryResponse.prototype, "candidateHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesHistoryResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdCandidatesHistoryResponse;
}(SpeakeasyBase));
export { GetCommitteeCommitteeIdCandidatesHistoryResponse };
