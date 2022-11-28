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
export var GetListOfCountriesFormatEnum;
(function (GetListOfCountriesFormatEnum) {
    GetListOfCountriesFormatEnum["Json"] = "json";
    GetListOfCountriesFormatEnum["Xml"] = "xml";
})(GetListOfCountriesFormatEnum || (GetListOfCountriesFormatEnum = {}));
var GetListOfCountriesQueryParams = /** @class */ (function (_super) {
    __extends(GetListOfCountriesQueryParams, _super);
    function GetListOfCountriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetListOfCountriesQueryParams.prototype, "format", void 0);
    return GetListOfCountriesQueryParams;
}(SpeakeasyBase));
export { GetListOfCountriesQueryParams };
var GetListOfCountries200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfCountries200ApplicationJson, _super);
    function GetListOfCountries200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alpha-2-code" }),
        __metadata("design:type", String)
    ], GetListOfCountries200ApplicationJson.prototype, "alpha2Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alpha-3-code" }),
        __metadata("design:type", String)
    ], GetListOfCountries200ApplicationJson.prototype, "alpha3Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetListOfCountries200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetListOfCountries200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetListOfCountries200ApplicationJson.prototype, "name", void 0);
    return GetListOfCountries200ApplicationJson;
}(SpeakeasyBase));
export { GetListOfCountries200ApplicationJson };
var GetListOfCountriesRequest = /** @class */ (function (_super) {
    __extends(GetListOfCountriesRequest, _super);
    function GetListOfCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfCountriesQueryParams)
    ], GetListOfCountriesRequest.prototype, "queryParams", void 0);
    return GetListOfCountriesRequest;
}(SpeakeasyBase));
export { GetListOfCountriesRequest };
var GetListOfCountriesResponse = /** @class */ (function (_super) {
    __extends(GetListOfCountriesResponse, _super);
    function GetListOfCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListOfCountriesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListOfCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListOfCountriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetListOfCountries200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetListOfCountriesResponse.prototype, "getListOfCountries200ApplicationJsonObjects", void 0);
    return GetListOfCountriesResponse;
}(SpeakeasyBase));
export { GetListOfCountriesResponse };
