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
var GetGameMediaQueryParams = /** @class */ (function (_super) {
    __extends(GetGameMediaQueryParams, _super);
    function GetGameMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetGameMediaQueryParams.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mediaType" }),
        __metadata("design:type", String)
    ], GetGameMediaQueryParams.prototype, "mediaType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" }),
        __metadata("design:type", String)
    ], GetGameMediaQueryParams.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetGameMediaQueryParams.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=week" }),
        __metadata("design:type", Number)
    ], GetGameMediaQueryParams.prototype, "week", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetGameMediaQueryParams.prototype, "year", void 0);
    return GetGameMediaQueryParams;
}(SpeakeasyBase));
export { GetGameMediaQueryParams };
var GetGameMediaRequest = /** @class */ (function (_super) {
    __extends(GetGameMediaRequest, _super);
    function GetGameMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGameMediaQueryParams)
    ], GetGameMediaRequest.prototype, "queryParams", void 0);
    return GetGameMediaRequest;
}(SpeakeasyBase));
export { GetGameMediaRequest };
var GetGameMediaResponse = /** @class */ (function (_super) {
    __extends(GetGameMediaResponse, _super);
    function GetGameMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGameMediaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.GameMedia }),
        __metadata("design:type", Array)
    ], GetGameMediaResponse.prototype, "gameMedias", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGameMediaResponse.prototype, "statusCode", void 0);
    return GetGameMediaResponse;
}(SpeakeasyBase));
export { GetGameMediaResponse };
