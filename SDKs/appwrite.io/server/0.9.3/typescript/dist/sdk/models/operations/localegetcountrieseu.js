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
var LocaleGetCountriesEuSecurity = /** @class */ (function (_super) {
    __extends(LocaleGetCountriesEuSecurity, _super);
    function LocaleGetCountriesEuSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], LocaleGetCountriesEuSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], LocaleGetCountriesEuSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], LocaleGetCountriesEuSecurity.prototype, "project", void 0);
    return LocaleGetCountriesEuSecurity;
}(SpeakeasyBase));
export { LocaleGetCountriesEuSecurity };
var LocaleGetCountriesEuRequest = /** @class */ (function (_super) {
    __extends(LocaleGetCountriesEuRequest, _super);
    function LocaleGetCountriesEuRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LocaleGetCountriesEuSecurity)
    ], LocaleGetCountriesEuRequest.prototype, "security", void 0);
    return LocaleGetCountriesEuRequest;
}(SpeakeasyBase));
export { LocaleGetCountriesEuRequest };
var LocaleGetCountriesEuResponse = /** @class */ (function (_super) {
    __extends(LocaleGetCountriesEuResponse, _super);
    function LocaleGetCountriesEuResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LocaleGetCountriesEuResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LocaleGetCountriesEuResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CountryList)
    ], LocaleGetCountriesEuResponse.prototype, "countryList", void 0);
    return LocaleGetCountriesEuResponse;
}(SpeakeasyBase));
export { LocaleGetCountriesEuResponse };
