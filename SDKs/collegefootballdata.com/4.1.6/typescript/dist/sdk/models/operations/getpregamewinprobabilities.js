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
var GetPregameWinProbabilitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetPregameWinProbabilitiesQueryParams, _super);
    function GetPregameWinProbabilitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" }),
        __metadata("design:type", String)
    ], GetPregameWinProbabilitiesQueryParams.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetPregameWinProbabilitiesQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=week" }),
        __metadata("design:type", Number)
    ], GetPregameWinProbabilitiesQueryParams.prototype, "week", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetPregameWinProbabilitiesQueryParams.prototype, "year", void 0);
    return GetPregameWinProbabilitiesQueryParams;
}(SpeakeasyBase));
export { GetPregameWinProbabilitiesQueryParams };
var GetPregameWinProbabilitiesRequest = /** @class */ (function (_super) {
    __extends(GetPregameWinProbabilitiesRequest, _super);
    function GetPregameWinProbabilitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPregameWinProbabilitiesQueryParams)
    ], GetPregameWinProbabilitiesRequest.prototype, "queryParams", void 0);
    return GetPregameWinProbabilitiesRequest;
}(SpeakeasyBase));
export { GetPregameWinProbabilitiesRequest };
var GetPregameWinProbabilitiesResponse = /** @class */ (function (_super) {
    __extends(GetPregameWinProbabilitiesResponse, _super);
    function GetPregameWinProbabilitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPregameWinProbabilitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.PregameWp }),
        __metadata("design:type", Array)
    ], GetPregameWinProbabilitiesResponse.prototype, "pregameWps", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPregameWinProbabilitiesResponse.prototype, "statusCode", void 0);
    return GetPregameWinProbabilitiesResponse;
}(SpeakeasyBase));
export { GetPregameWinProbabilitiesResponse };
