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
// NumberValidateResponse
/**
 * Provides information about a phone number.
**/
var NumberValidateResponse = /** @class */ (function (_super) {
    __extends(NumberValidateResponse, _super);
    function NumberValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Carrier" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "carrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CleansedPhoneNumberE164" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "cleansedPhoneNumberE164", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CleansedPhoneNumberNational" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "cleansedPhoneNumberNational", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountryCodeIso2" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "countryCodeIso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountryCodeNumeric" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "countryCodeNumeric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=County" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OriginalCountryCodeIso2" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "originalCountryCodeIso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OriginalPhoneNumber" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "originalPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneType" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "phoneType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneTypeCode" }),
        __metadata("design:type", Number)
    ], NumberValidateResponse.prototype, "phoneTypeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timezone" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ZipCode" }),
        __metadata("design:type", String)
    ], NumberValidateResponse.prototype, "zipCode", void 0);
    return NumberValidateResponse;
}(SpeakeasyBase));
export { NumberValidateResponse };
