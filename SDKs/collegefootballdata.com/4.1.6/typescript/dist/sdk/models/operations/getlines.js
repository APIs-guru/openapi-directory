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
var GetLinesQueryParams = /** @class */ (function (_super) {
    __extends(GetLinesQueryParams, _super);
    function GetLinesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=away" }),
        __metadata("design:type", String)
    ], GetLinesQueryParams.prototype, "away", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetLinesQueryParams.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gameId" }),
        __metadata("design:type", Number)
    ], GetLinesQueryParams.prototype, "gameId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=home" }),
        __metadata("design:type", String)
    ], GetLinesQueryParams.prototype, "home", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" }),
        __metadata("design:type", String)
    ], GetLinesQueryParams.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetLinesQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=week" }),
        __metadata("design:type", Number)
    ], GetLinesQueryParams.prototype, "week", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetLinesQueryParams.prototype, "year", void 0);
    return GetLinesQueryParams;
}(SpeakeasyBase));
export { GetLinesQueryParams };
var GetLinesRequest = /** @class */ (function (_super) {
    __extends(GetLinesRequest, _super);
    function GetLinesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetLinesQueryParams)
    ], GetLinesRequest.prototype, "queryParams", void 0);
    return GetLinesRequest;
}(SpeakeasyBase));
export { GetLinesRequest };
var GetLinesResponse = /** @class */ (function (_super) {
    __extends(GetLinesResponse, _super);
    function GetLinesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetLinesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.GameLines }),
        __metadata("design:type", Array)
    ], GetLinesResponse.prototype, "gameLines", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetLinesResponse.prototype, "statusCode", void 0);
    return GetLinesResponse;
}(SpeakeasyBase));
export { GetLinesResponse };
