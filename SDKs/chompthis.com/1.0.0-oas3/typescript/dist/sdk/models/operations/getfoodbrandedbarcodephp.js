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
var GetFoodBrandedBarcodePhpQueryParams = /** @class */ (function (_super) {
    __extends(GetFoodBrandedBarcodePhpQueryParams, _super);
    function GetFoodBrandedBarcodePhpQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], GetFoodBrandedBarcodePhpQueryParams.prototype, "code", void 0);
    return GetFoodBrandedBarcodePhpQueryParams;
}(SpeakeasyBase));
export { GetFoodBrandedBarcodePhpQueryParams };
var GetFoodBrandedBarcodePhpSecurity = /** @class */ (function (_super) {
    __extends(GetFoodBrandedBarcodePhpSecurity, _super);
    function GetFoodBrandedBarcodePhpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetFoodBrandedBarcodePhpSecurity.prototype, "apiKeyAuth", void 0);
    return GetFoodBrandedBarcodePhpSecurity;
}(SpeakeasyBase));
export { GetFoodBrandedBarcodePhpSecurity };
var GetFoodBrandedBarcodePhpRequest = /** @class */ (function (_super) {
    __extends(GetFoodBrandedBarcodePhpRequest, _super);
    function GetFoodBrandedBarcodePhpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodBrandedBarcodePhpQueryParams)
    ], GetFoodBrandedBarcodePhpRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodBrandedBarcodePhpSecurity)
    ], GetFoodBrandedBarcodePhpRequest.prototype, "security", void 0);
    return GetFoodBrandedBarcodePhpRequest;
}(SpeakeasyBase));
export { GetFoodBrandedBarcodePhpRequest };
var GetFoodBrandedBarcodePhpResponse = /** @class */ (function (_super) {
    __extends(GetFoodBrandedBarcodePhpResponse, _super);
    function GetFoodBrandedBarcodePhpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BrandedFoodObject)
    ], GetFoodBrandedBarcodePhpResponse.prototype, "brandedFoodObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFoodBrandedBarcodePhpResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFoodBrandedBarcodePhpResponse.prototype, "statusCode", void 0);
    return GetFoodBrandedBarcodePhpResponse;
}(SpeakeasyBase));
export { GetFoodBrandedBarcodePhpResponse };
