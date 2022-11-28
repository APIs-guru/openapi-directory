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
export var GetCandidatesTotalsByOfficeByPartyOfficeEnum;
(function (GetCandidatesTotalsByOfficeByPartyOfficeEnum) {
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["Unknown"] = "";
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["H"] = "H";
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["S"] = "S";
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["P"] = "P";
})(GetCandidatesTotalsByOfficeByPartyOfficeEnum || (GetCandidatesTotalsByOfficeByPartyOfficeEnum = {}));
var GetCandidatesTotalsByOfficeByPartyQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsByOfficeByPartyQueryParams, _super);
    function GetCandidatesTotalsByOfficeByPartyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "isActiveCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyQueryParams.prototype, "sortNullsLast", void 0);
    return GetCandidatesTotalsByOfficeByPartyQueryParams;
}(SpeakeasyBase));
export { GetCandidatesTotalsByOfficeByPartyQueryParams };
var GetCandidatesTotalsByOfficeByPartyRequest = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsByOfficeByPartyRequest, _super);
    function GetCandidatesTotalsByOfficeByPartyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidatesTotalsByOfficeByPartyQueryParams)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "queryParams", void 0);
    return GetCandidatesTotalsByOfficeByPartyRequest;
}(SpeakeasyBase));
export { GetCandidatesTotalsByOfficeByPartyRequest };
var GetCandidatesTotalsByOfficeByPartyResponse = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsByOfficeByPartyResponse, _super);
    function GetCandidatesTotalsByOfficeByPartyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsByOfficeByPartyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TotalByOfficeByPartyPage)
    ], GetCandidatesTotalsByOfficeByPartyResponse.prototype, "totalByOfficeByPartyPage", void 0);
    return GetCandidatesTotalsByOfficeByPartyResponse;
}(SpeakeasyBase));
export { GetCandidatesTotalsByOfficeByPartyResponse };
