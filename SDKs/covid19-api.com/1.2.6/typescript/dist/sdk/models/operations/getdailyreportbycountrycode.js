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
export var GetDailyReportByCountryCodeDateFormatEnum;
(function (GetDailyReportByCountryCodeDateFormatEnum) {
    GetDailyReportByCountryCodeDateFormatEnum["YyyyMmDd"] = "YYYY-MM-DD";
    GetDailyReportByCountryCodeDateFormatEnum["YyyyDdMm"] = "YYYY-DD-MM";
    GetDailyReportByCountryCodeDateFormatEnum["DdMmYyyy"] = "DD-MM-YYYY";
    GetDailyReportByCountryCodeDateFormatEnum["MmDdYyyy"] = "MM-DD-YYYY";
})(GetDailyReportByCountryCodeDateFormatEnum || (GetDailyReportByCountryCodeDateFormatEnum = {}));
export var GetDailyReportByCountryCodeFormatEnum;
(function (GetDailyReportByCountryCodeFormatEnum) {
    GetDailyReportByCountryCodeFormatEnum["Json"] = "json";
    GetDailyReportByCountryCodeFormatEnum["Xml"] = "xml";
})(GetDailyReportByCountryCodeFormatEnum || (GetDailyReportByCountryCodeFormatEnum = {}));
var GetDailyReportByCountryCodeQueryParams = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryCodeQueryParams, _super);
    function GetDailyReportByCountryCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryCodeQueryParams.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryCodeQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date-format" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryCodeQueryParams.prototype, "dateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryCodeQueryParams.prototype, "format", void 0);
    return GetDailyReportByCountryCodeQueryParams;
}(SpeakeasyBase));
export { GetDailyReportByCountryCodeQueryParams };
var GetDailyReportByCountryCode200ApplicationJsonProvince = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryCode200ApplicationJsonProvince, _super);
    function GetDailyReportByCountryCode200ApplicationJsonProvince() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryCode200ApplicationJsonProvince.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryCode200ApplicationJsonProvince.prototype, "confirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deaths" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryCode200ApplicationJsonProvince.prototype, "deaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recovered" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryCode200ApplicationJsonProvince.prototype, "recovered", void 0);
    return GetDailyReportByCountryCode200ApplicationJsonProvince;
}(SpeakeasyBase));
export { GetDailyReportByCountryCode200ApplicationJsonProvince };
var GetDailyReportByCountryCode200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryCode200ApplicationJson, _super);
    function GetDailyReportByCountryCode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryCode200ApplicationJson.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryCode200ApplicationJson.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryCode200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryCode200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=province", elemType: GetDailyReportByCountryCode200ApplicationJsonProvince }),
        __metadata("design:type", Array)
    ], GetDailyReportByCountryCode200ApplicationJson.prototype, "province", void 0);
    return GetDailyReportByCountryCode200ApplicationJson;
}(SpeakeasyBase));
export { GetDailyReportByCountryCode200ApplicationJson };
var GetDailyReportByCountryCodeRequest = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryCodeRequest, _super);
    function GetDailyReportByCountryCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDailyReportByCountryCodeQueryParams)
    ], GetDailyReportByCountryCodeRequest.prototype, "queryParams", void 0);
    return GetDailyReportByCountryCodeRequest;
}(SpeakeasyBase));
export { GetDailyReportByCountryCodeRequest };
var GetDailyReportByCountryCodeResponse = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryCodeResponse, _super);
    function GetDailyReportByCountryCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDailyReportByCountryCodeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDailyReportByCountryCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetDailyReportByCountryCode200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetDailyReportByCountryCodeResponse.prototype, "getDailyReportByCountryCode200ApplicationJsonObjects", void 0);
    return GetDailyReportByCountryCodeResponse;
}(SpeakeasyBase));
export { GetDailyReportByCountryCodeResponse };
