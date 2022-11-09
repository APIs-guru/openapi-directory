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
var GetPlayerGameStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetPlayerGameStatsQueryParams, _super);
    function GetPlayerGameStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetPlayerGameStatsQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetPlayerGameStatsQueryParams.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gameId" }),
        __metadata("design:type", Number)
    ], GetPlayerGameStatsQueryParams.prototype, "gameId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" }),
        __metadata("design:type", String)
    ], GetPlayerGameStatsQueryParams.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetPlayerGameStatsQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=week" }),
        __metadata("design:type", Number)
    ], GetPlayerGameStatsQueryParams.prototype, "week", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetPlayerGameStatsQueryParams.prototype, "year", void 0);
    return GetPlayerGameStatsQueryParams;
}(SpeakeasyBase));
export { GetPlayerGameStatsQueryParams };
var GetPlayerGameStatsRequest = /** @class */ (function (_super) {
    __extends(GetPlayerGameStatsRequest, _super);
    function GetPlayerGameStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPlayerGameStatsQueryParams)
    ], GetPlayerGameStatsRequest.prototype, "queryParams", void 0);
    return GetPlayerGameStatsRequest;
}(SpeakeasyBase));
export { GetPlayerGameStatsRequest };
var GetPlayerGameStatsResponse = /** @class */ (function (_super) {
    __extends(GetPlayerGameStatsResponse, _super);
    function GetPlayerGameStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPlayerGameStatsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.PlayerGame }),
        __metadata("design:type", Array)
    ], GetPlayerGameStatsResponse.prototype, "playerGames", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPlayerGameStatsResponse.prototype, "statusCode", void 0);
    return GetPlayerGameStatsResponse;
}(SpeakeasyBase));
export { GetPlayerGameStatsResponse };
