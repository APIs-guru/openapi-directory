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
var BankAccountDto = /** @class */ (function (_super) {
    __extends(BankAccountDto, _super);
    function BankAccountDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acCode" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "acCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Array)
    ], BankAccountDto.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bankFeedSource" }),
        __metadata("design:type", Number)
    ], BankAccountDto.prototype, "bankFeedSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessIdentifierCodes" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "businessIdentifierCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", Number)
    ], BankAccountDto.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditorScheme" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "creditorScheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BankAccountDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internationalBankAccountNumber" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "internationalBankAccountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefaultBank" }),
        __metadata("design:type", Boolean)
    ], BankAccountDto.prototype, "isDefaultBank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastChq" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "lastChq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nominalAcCode" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "nominalAcCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oBalance" }),
        __metadata("design:type", Number)
    ], BankAccountDto.prototype, "oBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortCode" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "sortCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], BankAccountDto.prototype, "timestamp", void 0);
    return BankAccountDto;
}(SpeakeasyBase));
export { BankAccountDto };
