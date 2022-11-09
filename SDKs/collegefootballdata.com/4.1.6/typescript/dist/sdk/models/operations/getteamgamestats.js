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
var GetTeamGameStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamGameStatsQueryParams, _super);
    function GetTeamGameStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetTeamGameStatsQueryParams.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gameId" }),
        __metadata("design:type", Number)
    ], GetTeamGameStatsQueryParams.prototype, "gameId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" }),
        __metadata("design:type", String)
    ], GetTeamGameStatsQueryParams.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetTeamGameStatsQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=week" }),
        __metadata("design:type", Number)
    ], GetTeamGameStatsQueryParams.prototype, "week", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamGameStatsQueryParams.prototype, "year", void 0);
    return GetTeamGameStatsQueryParams;
}(SpeakeasyBase));
export { GetTeamGameStatsQueryParams };
var GetTeamGameStatsRequest = /** @class */ (function (_super) {
    __extends(GetTeamGameStatsRequest, _super);
    function GetTeamGameStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTeamGameStatsQueryParams)
    ], GetTeamGameStatsRequest.prototype, "queryParams", void 0);
    return GetTeamGameStatsRequest;
}(SpeakeasyBase));
export { GetTeamGameStatsRequest };
var GetTeamGameStatsResponse = /** @class */ (function (_super) {
    __extends(GetTeamGameStatsResponse, _super);
    function GetTeamGameStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTeamGameStatsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTeamGameStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.TeamGame }),
        __metadata("design:type", Array)
    ], GetTeamGameStatsResponse.prototype, "teamGames", void 0);
    return GetTeamGameStatsResponse;
}(SpeakeasyBase));
export { GetTeamGameStatsResponse };
