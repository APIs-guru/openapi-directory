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
export var GetLatestCountryDataByCodeFormatEnum;
(function (GetLatestCountryDataByCodeFormatEnum) {
    GetLatestCountryDataByCodeFormatEnum["Json"] = "json";
    GetLatestCountryDataByCodeFormatEnum["Xml"] = "xml";
})(GetLatestCountryDataByCodeFormatEnum || (GetLatestCountryDataByCodeFormatEnum = {}));
var GetLatestCountryDataByCodeQueryParams = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByCodeQueryParams, _super);
    function GetLatestCountryDataByCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], GetLatestCountryDataByCodeQueryParams.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetLatestCountryDataByCodeQueryParams.prototype, "format", void 0);
    return GetLatestCountryDataByCodeQueryParams;
}(SpeakeasyBase));
export { GetLatestCountryDataByCodeQueryParams };
var GetLatestCountryDataByCode200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByCode200ApplicationJson, _super);
    function GetLatestCountryDataByCode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "confirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=critical" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "critical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deaths" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "deaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastChange" }),
        __metadata("design:type", Date)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "lastChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recovered" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByCode200ApplicationJson.prototype, "recovered", void 0);
    return GetLatestCountryDataByCode200ApplicationJson;
}(SpeakeasyBase));
export { GetLatestCountryDataByCode200ApplicationJson };
var GetLatestCountryDataByCodeRequest = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByCodeRequest, _super);
    function GetLatestCountryDataByCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestCountryDataByCodeQueryParams)
    ], GetLatestCountryDataByCodeRequest.prototype, "queryParams", void 0);
    return GetLatestCountryDataByCodeRequest;
}(SpeakeasyBase));
export { GetLatestCountryDataByCodeRequest };
var GetLatestCountryDataByCodeResponse = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByCodeResponse, _super);
    function GetLatestCountryDataByCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetLatestCountryDataByCodeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLatestCountryDataByCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetLatestCountryDataByCode200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetLatestCountryDataByCodeResponse.prototype, "getLatestCountryDataByCode200ApplicationJsonObjects", void 0);
    return GetLatestCountryDataByCodeResponse;
}(SpeakeasyBase));
export { GetLatestCountryDataByCodeResponse };
