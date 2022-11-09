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
export var GetGlobalwinescoresLatestColorEnum;
(function (GetGlobalwinescoresLatestColorEnum) {
    GetGlobalwinescoresLatestColorEnum["Red"] = "red";
    GetGlobalwinescoresLatestColorEnum["White"] = "white";
    GetGlobalwinescoresLatestColorEnum["Pink"] = "pink";
})(GetGlobalwinescoresLatestColorEnum || (GetGlobalwinescoresLatestColorEnum = {}));
export var GetGlobalwinescoresLatestOrderingEnum;
(function (GetGlobalwinescoresLatestOrderingEnum) {
    GetGlobalwinescoresLatestOrderingEnum["Date"] = "date";
    GetGlobalwinescoresLatestOrderingEnum["MinusDate"] = "-date";
    GetGlobalwinescoresLatestOrderingEnum["Score"] = "score";
    GetGlobalwinescoresLatestOrderingEnum["MinusScore"] = "-score";
})(GetGlobalwinescoresLatestOrderingEnum || (GetGlobalwinescoresLatestOrderingEnum = {}));
var GetGlobalwinescoresLatestQueryParams = /** @class */ (function (_super) {
    __extends(GetGlobalwinescoresLatestQueryParams, _super);
    function GetGlobalwinescoresLatestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "color", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=is_primeurs" }),
        __metadata("design:type", Boolean)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "isPrimeurs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lwin" }),
        __metadata("design:type", String)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "lwin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lwin_11" }),
        __metadata("design:type", String)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "lwin11", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "ordering", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vintage" }),
        __metadata("design:type", String)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "vintage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=wine_id" }),
        __metadata("design:type", Array)
    ], GetGlobalwinescoresLatestQueryParams.prototype, "wineId", void 0);
    return GetGlobalwinescoresLatestQueryParams;
}(SpeakeasyBase));
export { GetGlobalwinescoresLatestQueryParams };
var GetGlobalwinescoresLatestHeaders = /** @class */ (function (_super) {
    __extends(GetGlobalwinescoresLatestHeaders, _super);
    function GetGlobalwinescoresLatestHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetGlobalwinescoresLatestHeaders.prototype, "authorization", void 0);
    return GetGlobalwinescoresLatestHeaders;
}(SpeakeasyBase));
export { GetGlobalwinescoresLatestHeaders };
var GetGlobalwinescoresLatestRequest = /** @class */ (function (_super) {
    __extends(GetGlobalwinescoresLatestRequest, _super);
    function GetGlobalwinescoresLatestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGlobalwinescoresLatestQueryParams)
    ], GetGlobalwinescoresLatestRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGlobalwinescoresLatestHeaders)
    ], GetGlobalwinescoresLatestRequest.prototype, "headers", void 0);
    return GetGlobalwinescoresLatestRequest;
}(SpeakeasyBase));
export { GetGlobalwinescoresLatestRequest };
var GetGlobalwinescoresLatestResponse = /** @class */ (function (_super) {
    __extends(GetGlobalwinescoresLatestResponse, _super);
    function GetGlobalwinescoresLatestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGlobalwinescoresLatestResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGlobalwinescoresLatestResponse.prototype, "statusCode", void 0);
    return GetGlobalwinescoresLatestResponse;
}(SpeakeasyBase));
export { GetGlobalwinescoresLatestResponse };
