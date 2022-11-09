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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetAdvancedTeamSeasonStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetAdvancedTeamSeasonStatsQueryParams, _super);
    function GetAdvancedTeamSeasonStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endWeek" }),
        __metadata("design:type", Number)
    ], GetAdvancedTeamSeasonStatsQueryParams.prototype, "endWeek", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" }),
        __metadata("design:type", Boolean)
    ], GetAdvancedTeamSeasonStatsQueryParams.prototype, "excludeGarbageTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startWeek" }),
        __metadata("design:type", Number)
    ], GetAdvancedTeamSeasonStatsQueryParams.prototype, "startWeek", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetAdvancedTeamSeasonStatsQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetAdvancedTeamSeasonStatsQueryParams.prototype, "year", void 0);
    return GetAdvancedTeamSeasonStatsQueryParams;
}(SpeakeasyBase));
export { GetAdvancedTeamSeasonStatsQueryParams };
var GetAdvancedTeamSeasonStatsRequest = /** @class */ (function (_super) {
    __extends(GetAdvancedTeamSeasonStatsRequest, _super);
    function GetAdvancedTeamSeasonStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAdvancedTeamSeasonStatsQueryParams)
    ], GetAdvancedTeamSeasonStatsRequest.prototype, "queryParams", void 0);
    return GetAdvancedTeamSeasonStatsRequest;
}(SpeakeasyBase));
export { GetAdvancedTeamSeasonStatsRequest };
var GetAdvancedTeamSeasonStatsResponse = /** @class */ (function (_super) {
    __extends(GetAdvancedTeamSeasonStatsResponse, _super);
    function GetAdvancedTeamSeasonStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ elemType: shared.AdvancedSeasonStat }),
        __metadata("design:type", Array)
    ], GetAdvancedTeamSeasonStatsResponse.prototype, "advancedSeasonStats", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAdvancedTeamSeasonStatsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAdvancedTeamSeasonStatsResponse.prototype, "statusCode", void 0);
    return GetAdvancedTeamSeasonStatsResponse;
}(SpeakeasyBase));
export { GetAdvancedTeamSeasonStatsResponse };
