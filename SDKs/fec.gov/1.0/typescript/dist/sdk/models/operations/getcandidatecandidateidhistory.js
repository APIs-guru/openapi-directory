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
var GetCandidateCandidateIdHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryPathParams, _super);
    function GetCandidateCandidateIdHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryPathParams.prototype, "candidateId", void 0);
    return GetCandidateCandidateIdHistoryPathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryPathParams };
var GetCandidateCandidateIdHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryQueryParams, _super);
    function GetCandidateCandidateIdHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdHistoryQueryParams.prototype, "sortNullsLast", void 0);
    return GetCandidateCandidateIdHistoryQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryQueryParams };
var GetCandidateCandidateIdHistoryRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryRequest, _super);
    function GetCandidateCandidateIdHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdHistoryPathParams)
    ], GetCandidateCandidateIdHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdHistoryQueryParams)
    ], GetCandidateCandidateIdHistoryRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdHistoryRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryRequest };
var GetCandidateCandidateIdHistoryResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdHistoryResponse, _super);
    function GetCandidateCandidateIdHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CandidateHistoryPage)
    ], GetCandidateCandidateIdHistoryResponse.prototype, "candidateHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdHistoryResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdHistoryResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdHistoryResponse };
