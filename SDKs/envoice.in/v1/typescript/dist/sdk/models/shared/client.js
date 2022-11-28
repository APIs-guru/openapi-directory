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
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address, form, name=Address;" }),
        __metadata("design:type", String)
    ], Client.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientCountryId, form, name=ClientCountryId;" }),
        __metadata("design:type", Number)
    ], Client.prototype, "clientCountryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientCurrencyId, form, name=ClientCurrencyId;" }),
        __metadata("design:type", Number)
    ], Client.prototype, "clientCurrencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber, form, name=CompanyRegistrationNumber;" }),
        __metadata("design:type", String)
    ], Client.prototype, "companyRegistrationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultDueDateInDays, form, name=DefaultDueDateInDays;" }),
        __metadata("design:type", Number)
    ], Client.prototype, "defaultDueDateInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" }),
        __metadata("design:type", String)
    ], Client.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" }),
        __metadata("design:type", Number)
    ], Client.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" }),
        __metadata("design:type", String)
    ], Client.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber, form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], Client.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UiLanguageId, form, name=UiLanguageId;" }),
        __metadata("design:type", Number)
    ], Client.prototype, "uiLanguageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId, form, name=UserId;" }),
        __metadata("design:type", Number)
    ], Client.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Vat, form, name=Vat;" }),
        __metadata("design:type", String)
    ], Client.prototype, "vat", void 0);
    return Client;
}(SpeakeasyBase));
export { Client };
