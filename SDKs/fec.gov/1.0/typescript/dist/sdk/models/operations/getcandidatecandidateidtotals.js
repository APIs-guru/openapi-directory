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
var GetCandidateCandidateIdTotalsPathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdTotalsPathParams, _super);
    function GetCandidateCandidateIdTotalsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdTotalsPathParams.prototype, "candidateId", void 0);
    return GetCandidateCandidateIdTotalsPathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdTotalsPathParams };
var GetCandidateCandidateIdTotalsQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdTotalsQueryParams, _super);
    function GetCandidateCandidateIdTotalsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdTotalsQueryParams.prototype, "sortNullsLast", void 0);
    return GetCandidateCandidateIdTotalsQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdTotalsQueryParams };
var GetCandidateCandidateIdTotalsRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdTotalsRequest, _super);
    function GetCandidateCandidateIdTotalsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdTotalsPathParams)
    ], GetCandidateCandidateIdTotalsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdTotalsQueryParams)
    ], GetCandidateCandidateIdTotalsRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdTotalsRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdTotalsRequest };
var GetCandidateCandidateIdTotalsResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdTotalsResponse, _super);
    function GetCandidateCandidateIdTotalsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeTotalsPage)
    ], GetCandidateCandidateIdTotalsResponse.prototype, "committeeTotalsPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdTotalsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdTotalsResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdTotalsResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdTotalsResponse };
