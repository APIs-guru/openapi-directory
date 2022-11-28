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
var GetCandidateCandidateIdCommitteesHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryPathParams, _super);
    function GetCandidateCandidateIdCommitteesHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryPathParams.prototype, "candidateId", void 0);
    return GetCandidateCandidateIdCommitteesHistoryPathParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryPathParams };
export var GetCandidateCandidateIdCommitteesHistoryDesignationEnum;
(function (GetCandidateCandidateIdCommitteesHistoryDesignationEnum) {
    GetCandidateCandidateIdCommitteesHistoryDesignationEnum["Unknown"] = "";
    GetCandidateCandidateIdCommitteesHistoryDesignationEnum["A"] = "A";
    GetCandidateCandidateIdCommitteesHistoryDesignationEnum["J"] = "J";
    GetCandidateCandidateIdCommitteesHistoryDesignationEnum["P"] = "P";
    GetCandidateCandidateIdCommitteesHistoryDesignationEnum["U"] = "U";
    GetCandidateCandidateIdCommitteesHistoryDesignationEnum["B"] = "B";
    GetCandidateCandidateIdCommitteesHistoryDesignationEnum["D"] = "D";
})(GetCandidateCandidateIdCommitteesHistoryDesignationEnum || (GetCandidateCandidateIdCommitteesHistoryDesignationEnum = {}));
var GetCandidateCandidateIdCommitteesHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryQueryParams, _super);
    function GetCandidateCandidateIdCommitteesHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" }),
        __metadata("design:type", Array)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidateCandidateIdCommitteesHistoryQueryParams.prototype, "sortNullsLast", void 0);
    return GetCandidateCandidateIdCommitteesHistoryQueryParams;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryQueryParams };
var GetCandidateCandidateIdCommitteesHistoryRequest = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryRequest, _super);
    function GetCandidateCandidateIdCommitteesHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdCommitteesHistoryPathParams)
    ], GetCandidateCandidateIdCommitteesHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidateCandidateIdCommitteesHistoryQueryParams)
    ], GetCandidateCandidateIdCommitteesHistoryRequest.prototype, "queryParams", void 0);
    return GetCandidateCandidateIdCommitteesHistoryRequest;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryRequest };
var GetCandidateCandidateIdCommitteesHistoryResponse = /** @class */ (function (_super) {
    __extends(GetCandidateCandidateIdCommitteesHistoryResponse, _super);
    function GetCandidateCandidateIdCommitteesHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeHistoryPage)
    ], GetCandidateCandidateIdCommitteesHistoryResponse.prototype, "committeeHistoryPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidateCandidateIdCommitteesHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidateCandidateIdCommitteesHistoryResponse.prototype, "statusCode", void 0);
    return GetCandidateCandidateIdCommitteesHistoryResponse;
}(SpeakeasyBase));
export { GetCandidateCandidateIdCommitteesHistoryResponse };
