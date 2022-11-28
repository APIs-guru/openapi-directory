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
import { CurrencyEnum } from "./currencyenum";
export var BankAccountAccountTypeEnum;
(function (BankAccountAccountTypeEnum) {
    BankAccountAccountTypeEnum["BankAccount"] = "bank_account";
    BankAccountAccountTypeEnum["CreditCard"] = "credit_card";
    BankAccountAccountTypeEnum["Other"] = "other";
})(BankAccountAccountTypeEnum || (BankAccountAccountTypeEnum = {}));
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_name" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_type" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_code" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "bankCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch_identifier" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "branchIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bsb_number" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "bsbNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "iban", void 0);
    return BankAccount;
}(SpeakeasyBase));
export { BankAccount };
