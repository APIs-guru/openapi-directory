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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var GetV3EventsQueryParams = /** @class */ (function (_super) {
    __extends(GetV3EventsQueryParams, _super);
    function GetV3EventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3EventsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], GetV3EventsQueryParams.prototype, "ids", void 0);
    return GetV3EventsQueryParams;
}(SpeakeasyBase));
export { GetV3EventsQueryParams };
var GetV3EventsHeaders = /** @class */ (function (_super) {
    __extends(GetV3EventsHeaders, _super);
    function GetV3EventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3EventsHeaders.prototype, "acceptLanguage", void 0);
    return GetV3EventsHeaders;
}(SpeakeasyBase));
export { GetV3EventsHeaders };
var GetV3EventsRequest = /** @class */ (function (_super) {
    __extends(GetV3EventsRequest, _super);
    function GetV3EventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3EventsQueryParams)
    ], GetV3EventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3EventsHeaders)
    ], GetV3EventsRequest.prototype, "headers", void 0);
    return GetV3EventsRequest;
}(SpeakeasyBase));
export { GetV3EventsRequest };
var GetV3EventsResponse = /** @class */ (function (_super) {
    __extends(GetV3EventsResponse, _super);
    function GetV3EventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3EventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3EventsResponse.prototype, "statusCode", void 0);
    return GetV3EventsResponse;
}(SpeakeasyBase));
export { GetV3EventsResponse };
