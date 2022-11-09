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
var GetTeamMatchupQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamMatchupQueryParams, _super);
    function GetTeamMatchupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxYear" }),
        __metadata("design:type", Number)
    ], GetTeamMatchupQueryParams.prototype, "maxYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minYear" }),
        __metadata("design:type", Number)
    ], GetTeamMatchupQueryParams.prototype, "minYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team1" }),
        __metadata("design:type", String)
    ], GetTeamMatchupQueryParams.prototype, "team1", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team2" }),
        __metadata("design:type", String)
    ], GetTeamMatchupQueryParams.prototype, "team2", void 0);
    return GetTeamMatchupQueryParams;
}(SpeakeasyBase));
export { GetTeamMatchupQueryParams };
var GetTeamMatchupRequest = /** @class */ (function (_super) {
    __extends(GetTeamMatchupRequest, _super);
    function GetTeamMatchupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTeamMatchupQueryParams)
    ], GetTeamMatchupRequest.prototype, "queryParams", void 0);
    return GetTeamMatchupRequest;
}(SpeakeasyBase));
export { GetTeamMatchupRequest };
var GetTeamMatchupResponse = /** @class */ (function (_super) {
    __extends(GetTeamMatchupResponse, _super);
    function GetTeamMatchupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTeamMatchupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTeamMatchupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TeamMatchup)
    ], GetTeamMatchupResponse.prototype, "teamMatchup", void 0);
    return GetTeamMatchupResponse;
}(SpeakeasyBase));
export { GetTeamMatchupResponse };
