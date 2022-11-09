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
var GetDraftPicksQueryParams = /** @class */ (function (_super) {
    __extends(GetDraftPicksQueryParams, _super);
    function GetDraftPicksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=college" }),
        __metadata("design:type", String)
    ], GetDraftPicksQueryParams.prototype, "college", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetDraftPicksQueryParams.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nflTeam" }),
        __metadata("design:type", String)
    ], GetDraftPicksQueryParams.prototype, "nflTeam", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", String)
    ], GetDraftPicksQueryParams.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetDraftPicksQueryParams.prototype, "year", void 0);
    return GetDraftPicksQueryParams;
}(SpeakeasyBase));
export { GetDraftPicksQueryParams };
var GetDraftPicksRequest = /** @class */ (function (_super) {
    __extends(GetDraftPicksRequest, _super);
    function GetDraftPicksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDraftPicksQueryParams)
    ], GetDraftPicksRequest.prototype, "queryParams", void 0);
    return GetDraftPicksRequest;
}(SpeakeasyBase));
export { GetDraftPicksRequest };
var GetDraftPicksResponse = /** @class */ (function (_super) {
    __extends(GetDraftPicksResponse, _super);
    function GetDraftPicksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDraftPicksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.DraftPick }),
        __metadata("design:type", Array)
    ], GetDraftPicksResponse.prototype, "draftPicks", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDraftPicksResponse.prototype, "statusCode", void 0);
    return GetDraftPicksResponse;
}(SpeakeasyBase));
export { GetDraftPicksResponse };
