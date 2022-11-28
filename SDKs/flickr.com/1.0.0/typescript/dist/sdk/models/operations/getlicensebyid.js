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
var GetLicenseByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetLicenseByIdQueryParams, _super);
    function GetLicenseByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetLicenseByIdQueryParams.prototype, "apiKey", void 0);
    return GetLicenseByIdQueryParams;
}(SpeakeasyBase));
export { GetLicenseByIdQueryParams };
var GetLicenseById200ApplicationJsonLicensesLicense = /** @class */ (function (_super) {
    __extends(GetLicenseById200ApplicationJsonLicensesLicense, _super);
    function GetLicenseById200ApplicationJsonLicensesLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLicenseById200ApplicationJsonLicensesLicense.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLicenseById200ApplicationJsonLicensesLicense.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetLicenseById200ApplicationJsonLicensesLicense.prototype, "url", void 0);
    return GetLicenseById200ApplicationJsonLicensesLicense;
}(SpeakeasyBase));
export { GetLicenseById200ApplicationJsonLicensesLicense };
var GetLicenseById200ApplicationJsonLicenses = /** @class */ (function (_super) {
    __extends(GetLicenseById200ApplicationJsonLicenses, _super);
    function GetLicenseById200ApplicationJsonLicenses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license", elemType: GetLicenseById200ApplicationJsonLicensesLicense }),
        __metadata("design:type", Array)
    ], GetLicenseById200ApplicationJsonLicenses.prototype, "license", void 0);
    return GetLicenseById200ApplicationJsonLicenses;
}(SpeakeasyBase));
export { GetLicenseById200ApplicationJsonLicenses };
var GetLicenseById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLicenseById200ApplicationJson, _super);
    function GetLicenseById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenses" }),
        __metadata("design:type", GetLicenseById200ApplicationJsonLicenses)
    ], GetLicenseById200ApplicationJson.prototype, "licenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetLicenseById200ApplicationJson.prototype, "stat", void 0);
    return GetLicenseById200ApplicationJson;
}(SpeakeasyBase));
export { GetLicenseById200ApplicationJson };
var GetLicenseByIdRequest = /** @class */ (function (_super) {
    __extends(GetLicenseByIdRequest, _super);
    function GetLicenseByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLicenseByIdQueryParams)
    ], GetLicenseByIdRequest.prototype, "queryParams", void 0);
    return GetLicenseByIdRequest;
}(SpeakeasyBase));
export { GetLicenseByIdRequest };
var GetLicenseByIdResponse = /** @class */ (function (_super) {
    __extends(GetLicenseByIdResponse, _super);
    function GetLicenseByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLicenseByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLicenseByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLicenseById200ApplicationJson)
    ], GetLicenseByIdResponse.prototype, "getLicenseById200ApplicationJsonObject", void 0);
    return GetLicenseByIdResponse;
}(SpeakeasyBase));
export { GetLicenseByIdResponse };
