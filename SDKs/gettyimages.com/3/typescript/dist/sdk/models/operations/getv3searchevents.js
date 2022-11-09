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
var GetV3SearchEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetV3SearchEventsQueryParams, _super);
    function GetV3SearchEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_from" }),
        __metadata("design:type", Date)
    ], GetV3SearchEventsQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_to" }),
        __metadata("design:type", Date)
    ], GetV3SearchEventsQueryParams.prototype, "dateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=editorial_segment" }),
        __metadata("design:type", String)
    ], GetV3SearchEventsQueryParams.prototype, "editorialSegment", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchEventsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3SearchEventsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3SearchEventsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=phrase" }),
        __metadata("design:type", String)
    ], GetV3SearchEventsQueryParams.prototype, "phrase", void 0);
    return GetV3SearchEventsQueryParams;
}(SpeakeasyBase));
export { GetV3SearchEventsQueryParams };
var GetV3SearchEventsHeaders = /** @class */ (function (_super) {
    __extends(GetV3SearchEventsHeaders, _super);
    function GetV3SearchEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3SearchEventsHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" }),
        __metadata("design:type", String)
    ], GetV3SearchEventsHeaders.prototype, "giCountryCode", void 0);
    return GetV3SearchEventsHeaders;
}(SpeakeasyBase));
export { GetV3SearchEventsHeaders };
var GetV3SearchEventsRequest = /** @class */ (function (_super) {
    __extends(GetV3SearchEventsRequest, _super);
    function GetV3SearchEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3SearchEventsQueryParams)
    ], GetV3SearchEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3SearchEventsHeaders)
    ], GetV3SearchEventsRequest.prototype, "headers", void 0);
    return GetV3SearchEventsRequest;
}(SpeakeasyBase));
export { GetV3SearchEventsRequest };
var GetV3SearchEventsResponse = /** @class */ (function (_super) {
    __extends(GetV3SearchEventsResponse, _super);
    function GetV3SearchEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3SearchEventsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EventsSearchResult)
    ], GetV3SearchEventsResponse.prototype, "eventsSearchResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3SearchEventsResponse.prototype, "statusCode", void 0);
    return GetV3SearchEventsResponse;
}(SpeakeasyBase));
export { GetV3SearchEventsResponse };
