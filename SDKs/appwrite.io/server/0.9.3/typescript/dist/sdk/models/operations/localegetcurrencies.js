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
import * as shared from "../shared";
var LocaleGetCurrenciesSecurity = /** @class */ (function (_super) {
    __extends(LocaleGetCurrenciesSecurity, _super);
    function LocaleGetCurrenciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], LocaleGetCurrenciesSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], LocaleGetCurrenciesSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], LocaleGetCurrenciesSecurity.prototype, "project", void 0);
    return LocaleGetCurrenciesSecurity;
}(SpeakeasyBase));
export { LocaleGetCurrenciesSecurity };
var LocaleGetCurrenciesRequest = /** @class */ (function (_super) {
    __extends(LocaleGetCurrenciesRequest, _super);
    function LocaleGetCurrenciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LocaleGetCurrenciesSecurity)
    ], LocaleGetCurrenciesRequest.prototype, "security", void 0);
    return LocaleGetCurrenciesRequest;
}(SpeakeasyBase));
export { LocaleGetCurrenciesRequest };
var LocaleGetCurrenciesResponse = /** @class */ (function (_super) {
    __extends(LocaleGetCurrenciesResponse, _super);
    function LocaleGetCurrenciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LocaleGetCurrenciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LocaleGetCurrenciesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CurrencyList)
    ], LocaleGetCurrenciesResponse.prototype, "currencyList", void 0);
    return LocaleGetCurrenciesResponse;
}(SpeakeasyBase));
export { LocaleGetCurrenciesResponse };
