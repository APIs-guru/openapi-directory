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
var GetPresidentialContributionsBySizeQueryParams = /** @class */ (function (_super) {
    __extends(GetPresidentialContributionsBySizeQueryParams, _super);
    function GetPresidentialContributionsBySizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" }),
        __metadata("design:type", Array)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Array)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetPresidentialContributionsBySizeQueryParams.prototype, "sortNullsLast", void 0);
    return GetPresidentialContributionsBySizeQueryParams;
}(SpeakeasyBase));
export { GetPresidentialContributionsBySizeQueryParams };
var GetPresidentialContributionsBySizeRequest = /** @class */ (function (_super) {
    __extends(GetPresidentialContributionsBySizeRequest, _super);
    function GetPresidentialContributionsBySizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPresidentialContributionsBySizeQueryParams)
    ], GetPresidentialContributionsBySizeRequest.prototype, "queryParams", void 0);
    return GetPresidentialContributionsBySizeRequest;
}(SpeakeasyBase));
export { GetPresidentialContributionsBySizeRequest };
var GetPresidentialContributionsBySizeResponse = /** @class */ (function (_super) {
    __extends(GetPresidentialContributionsBySizeResponse, _super);
    function GetPresidentialContributionsBySizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPresidentialContributionsBySizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PresidentialBySizePage)
    ], GetPresidentialContributionsBySizeResponse.prototype, "presidentialBySizePage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPresidentialContributionsBySizeResponse.prototype, "statusCode", void 0);
    return GetPresidentialContributionsBySizeResponse;
}(SpeakeasyBase));
export { GetPresidentialContributionsBySizeResponse };
