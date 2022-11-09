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
var GetTeamSeasonStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamSeasonStatsQueryParams, _super);
    function GetTeamSeasonStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetTeamSeasonStatsQueryParams.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endWeek" }),
        __metadata("design:type", Number)
    ], GetTeamSeasonStatsQueryParams.prototype, "endWeek", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startWeek" }),
        __metadata("design:type", Number)
    ], GetTeamSeasonStatsQueryParams.prototype, "startWeek", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetTeamSeasonStatsQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamSeasonStatsQueryParams.prototype, "year", void 0);
    return GetTeamSeasonStatsQueryParams;
}(SpeakeasyBase));
export { GetTeamSeasonStatsQueryParams };
var GetTeamSeasonStatsRequest = /** @class */ (function (_super) {
    __extends(GetTeamSeasonStatsRequest, _super);
    function GetTeamSeasonStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTeamSeasonStatsQueryParams)
    ], GetTeamSeasonStatsRequest.prototype, "queryParams", void 0);
    return GetTeamSeasonStatsRequest;
}(SpeakeasyBase));
export { GetTeamSeasonStatsRequest };
var GetTeamSeasonStatsResponse = /** @class */ (function (_super) {
    __extends(GetTeamSeasonStatsResponse, _super);
    function GetTeamSeasonStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTeamSeasonStatsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTeamSeasonStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.TeamSeasonStat }),
        __metadata("design:type", Array)
    ], GetTeamSeasonStatsResponse.prototype, "teamSeasonStats", void 0);
    return GetTeamSeasonStatsResponse;
}(SpeakeasyBase));
export { GetTeamSeasonStatsResponse };
