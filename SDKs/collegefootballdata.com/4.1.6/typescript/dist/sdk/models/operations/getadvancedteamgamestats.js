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
var GetAdvancedTeamGameStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetAdvancedTeamGameStatsQueryParams, _super);
    function GetAdvancedTeamGameStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" }),
        __metadata("design:type", Boolean)
    ], GetAdvancedTeamGameStatsQueryParams.prototype, "excludeGarbageTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=opponent" }),
        __metadata("design:type", String)
    ], GetAdvancedTeamGameStatsQueryParams.prototype, "opponent", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" }),
        __metadata("design:type", String)
    ], GetAdvancedTeamGameStatsQueryParams.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetAdvancedTeamGameStatsQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=week" }),
        __metadata("design:type", Number)
    ], GetAdvancedTeamGameStatsQueryParams.prototype, "week", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetAdvancedTeamGameStatsQueryParams.prototype, "year", void 0);
    return GetAdvancedTeamGameStatsQueryParams;
}(SpeakeasyBase));
export { GetAdvancedTeamGameStatsQueryParams };
var GetAdvancedTeamGameStatsRequest = /** @class */ (function (_super) {
    __extends(GetAdvancedTeamGameStatsRequest, _super);
    function GetAdvancedTeamGameStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAdvancedTeamGameStatsQueryParams)
    ], GetAdvancedTeamGameStatsRequest.prototype, "queryParams", void 0);
    return GetAdvancedTeamGameStatsRequest;
}(SpeakeasyBase));
export { GetAdvancedTeamGameStatsRequest };
var GetAdvancedTeamGameStatsResponse = /** @class */ (function (_super) {
    __extends(GetAdvancedTeamGameStatsResponse, _super);
    function GetAdvancedTeamGameStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ elemType: shared.AdvancedGameStat }),
        __metadata("design:type", Array)
    ], GetAdvancedTeamGameStatsResponse.prototype, "advancedGameStats", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAdvancedTeamGameStatsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAdvancedTeamGameStatsResponse.prototype, "statusCode", void 0);
    return GetAdvancedTeamGameStatsResponse;
}(SpeakeasyBase));
export { GetAdvancedTeamGameStatsResponse };
