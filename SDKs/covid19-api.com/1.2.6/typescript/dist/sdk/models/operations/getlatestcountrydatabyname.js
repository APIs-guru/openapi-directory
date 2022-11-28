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
export var GetLatestCountryDataByNameFormatEnum;
(function (GetLatestCountryDataByNameFormatEnum) {
    GetLatestCountryDataByNameFormatEnum["Json"] = "json";
    GetLatestCountryDataByNameFormatEnum["Xml"] = "xml";
})(GetLatestCountryDataByNameFormatEnum || (GetLatestCountryDataByNameFormatEnum = {}));
var GetLatestCountryDataByNameQueryParams = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByNameQueryParams, _super);
    function GetLatestCountryDataByNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetLatestCountryDataByNameQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetLatestCountryDataByNameQueryParams.prototype, "name", void 0);
    return GetLatestCountryDataByNameQueryParams;
}(SpeakeasyBase));
export { GetLatestCountryDataByNameQueryParams };
var GetLatestCountryDataByName200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByName200ApplicationJson, _super);
    function GetLatestCountryDataByName200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "confirmed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=critical" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "critical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deaths" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "deaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastChange" }),
        __metadata("design:type", Date)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "lastChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recovered" }),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByName200ApplicationJson.prototype, "recovered", void 0);
    return GetLatestCountryDataByName200ApplicationJson;
}(SpeakeasyBase));
export { GetLatestCountryDataByName200ApplicationJson };
var GetLatestCountryDataByNameRequest = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByNameRequest, _super);
    function GetLatestCountryDataByNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLatestCountryDataByNameQueryParams)
    ], GetLatestCountryDataByNameRequest.prototype, "queryParams", void 0);
    return GetLatestCountryDataByNameRequest;
}(SpeakeasyBase));
export { GetLatestCountryDataByNameRequest };
var GetLatestCountryDataByNameResponse = /** @class */ (function (_super) {
    __extends(GetLatestCountryDataByNameResponse, _super);
    function GetLatestCountryDataByNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetLatestCountryDataByNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLatestCountryDataByNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLatestCountryDataByNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetLatestCountryDataByName200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetLatestCountryDataByNameResponse.prototype, "getLatestCountryDataByName200ApplicationJsonObjects", void 0);
    return GetLatestCountryDataByNameResponse;
}(SpeakeasyBase));
export { GetLatestCountryDataByNameResponse };
