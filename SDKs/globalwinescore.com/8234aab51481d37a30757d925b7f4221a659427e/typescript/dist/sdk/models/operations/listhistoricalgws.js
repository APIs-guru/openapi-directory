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
export var ListHistoricalGwsColorEnum;
(function (ListHistoricalGwsColorEnum) {
    ListHistoricalGwsColorEnum["Red"] = "red";
    ListHistoricalGwsColorEnum["White"] = "white";
    ListHistoricalGwsColorEnum["Pink"] = "pink";
})(ListHistoricalGwsColorEnum || (ListHistoricalGwsColorEnum = {}));
export var ListHistoricalGwsOrderingEnum;
(function (ListHistoricalGwsOrderingEnum) {
    ListHistoricalGwsOrderingEnum["Date"] = "date";
    ListHistoricalGwsOrderingEnum["MinusDate"] = "-date";
    ListHistoricalGwsOrderingEnum["Score"] = "score";
    ListHistoricalGwsOrderingEnum["MinusScore"] = "-score";
})(ListHistoricalGwsOrderingEnum || (ListHistoricalGwsOrderingEnum = {}));
var ListHistoricalGwsQueryParams = /** @class */ (function (_super) {
    __extends(ListHistoricalGwsQueryParams, _super);
    function ListHistoricalGwsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], ListHistoricalGwsQueryParams.prototype, "color", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=is_primeurs" }),
        __metadata("design:type", Boolean)
    ], ListHistoricalGwsQueryParams.prototype, "isPrimeurs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListHistoricalGwsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lwin" }),
        __metadata("design:type", String)
    ], ListHistoricalGwsQueryParams.prototype, "lwin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lwin_11" }),
        __metadata("design:type", String)
    ], ListHistoricalGwsQueryParams.prototype, "lwin11", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListHistoricalGwsQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], ListHistoricalGwsQueryParams.prototype, "ordering", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vintage" }),
        __metadata("design:type", String)
    ], ListHistoricalGwsQueryParams.prototype, "vintage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=wine_id" }),
        __metadata("design:type", Array)
    ], ListHistoricalGwsQueryParams.prototype, "wineId", void 0);
    return ListHistoricalGwsQueryParams;
}(SpeakeasyBase));
export { ListHistoricalGwsQueryParams };
var ListHistoricalGwsHeaders = /** @class */ (function (_super) {
    __extends(ListHistoricalGwsHeaders, _super);
    function ListHistoricalGwsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], ListHistoricalGwsHeaders.prototype, "authorization", void 0);
    return ListHistoricalGwsHeaders;
}(SpeakeasyBase));
export { ListHistoricalGwsHeaders };
var ListHistoricalGwsRequest = /** @class */ (function (_super) {
    __extends(ListHistoricalGwsRequest, _super);
    function ListHistoricalGwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListHistoricalGwsQueryParams)
    ], ListHistoricalGwsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListHistoricalGwsHeaders)
    ], ListHistoricalGwsRequest.prototype, "headers", void 0);
    return ListHistoricalGwsRequest;
}(SpeakeasyBase));
export { ListHistoricalGwsRequest };
var ListHistoricalGwsResponse = /** @class */ (function (_super) {
    __extends(ListHistoricalGwsResponse, _super);
    function ListHistoricalGwsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListHistoricalGwsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListHistoricalGwsResponse.prototype, "statusCode", void 0);
    return ListHistoricalGwsResponse;
}(SpeakeasyBase));
export { ListHistoricalGwsResponse };
