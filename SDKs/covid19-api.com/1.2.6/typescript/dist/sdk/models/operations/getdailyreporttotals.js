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
export var GetDailyReportTotalsDateFormatEnum;
(function (GetDailyReportTotalsDateFormatEnum) {
    GetDailyReportTotalsDateFormatEnum["YyyyMmDd"] = "YYYY-MM-DD";
    GetDailyReportTotalsDateFormatEnum["YyyyDdMm"] = "YYYY-DD-MM";
    GetDailyReportTotalsDateFormatEnum["DdMmYyyy"] = "DD-MM-YYYY";
    GetDailyReportTotalsDateFormatEnum["MmDdYyyy"] = "MM-DD-YYYY";
})(GetDailyReportTotalsDateFormatEnum || (GetDailyReportTotalsDateFormatEnum = {}));
export var GetDailyReportTotalsFormatEnum;
(function (GetDailyReportTotalsFormatEnum) {
    GetDailyReportTotalsFormatEnum["Json"] = "json";
    GetDailyReportTotalsFormatEnum["Xml"] = "xml";
})(GetDailyReportTotalsFormatEnum || (GetDailyReportTotalsFormatEnum = {}));
var GetDailyReportTotalsQueryParams = /** @class */ (function (_super) {
    __extends(GetDailyReportTotalsQueryParams, _super);
    function GetDailyReportTotalsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportTotalsQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date-format" }),
        __metadata("design:type", String)
    ], GetDailyReportTotalsQueryParams.prototype, "dateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetDailyReportTotalsQueryParams.prototype, "format", void 0);
    return GetDailyReportTotalsQueryParams;
}(SpeakeasyBase));
export { GetDailyReportTotalsQueryParams };
var GetDailyReportTotals200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDailyReportTotals200ApplicationJson, _super);
    function GetDailyReportTotals200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Number)
    ], GetDailyReportTotals200ApplicationJson.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Number)
    ], GetDailyReportTotals200ApplicationJson.prototype, "confirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=critical" }),
        __metadata("design:type", Number)
    ], GetDailyReportTotals200ApplicationJson.prototype, "critical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportTotals200ApplicationJson.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deaths" }),
        __metadata("design:type", Number)
    ], GetDailyReportTotals200ApplicationJson.prototype, "deaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recovered" }),
        __metadata("design:type", Number)
    ], GetDailyReportTotals200ApplicationJson.prototype, "recovered", void 0);
    return GetDailyReportTotals200ApplicationJson;
}(SpeakeasyBase));
export { GetDailyReportTotals200ApplicationJson };
var GetDailyReportTotalsRequest = /** @class */ (function (_super) {
    __extends(GetDailyReportTotalsRequest, _super);
    function GetDailyReportTotalsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDailyReportTotalsQueryParams)
    ], GetDailyReportTotalsRequest.prototype, "queryParams", void 0);
    return GetDailyReportTotalsRequest;
}(SpeakeasyBase));
export { GetDailyReportTotalsRequest };
var GetDailyReportTotalsResponse = /** @class */ (function (_super) {
    __extends(GetDailyReportTotalsResponse, _super);
    function GetDailyReportTotalsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDailyReportTotalsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDailyReportTotalsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDailyReportTotalsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetDailyReportTotals200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetDailyReportTotalsResponse.prototype, "getDailyReportTotals200ApplicationJsonObjects", void 0);
    return GetDailyReportTotalsResponse;
}(SpeakeasyBase));
export { GetDailyReportTotalsResponse };
