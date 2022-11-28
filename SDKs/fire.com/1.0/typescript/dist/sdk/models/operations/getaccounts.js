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
export var GetAccountsAccountsAccountCurrencyCodeEnum;
(function (GetAccountsAccountsAccountCurrencyCodeEnum) {
    GetAccountsAccountsAccountCurrencyCodeEnum["Eur"] = "EUR";
    GetAccountsAccountsAccountCurrencyCodeEnum["Gbp"] = "GBP";
})(GetAccountsAccountsAccountCurrencyCodeEnum || (GetAccountsAccountsAccountCurrencyCodeEnum = {}));
var GetAccountsAccountsAccountCurrency = /** @class */ (function (_super) {
    __extends(GetAccountsAccountsAccountCurrency, _super);
    function GetAccountsAccountsAccountCurrency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccountCurrency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccountCurrency.prototype, "description", void 0);
    return GetAccountsAccountsAccountCurrency;
}(SpeakeasyBase));
export { GetAccountsAccountsAccountCurrency };
export var GetAccountsAccountsAccountStatusEnum;
(function (GetAccountsAccountsAccountStatusEnum) {
    GetAccountsAccountsAccountStatusEnum["Live"] = "LIVE";
    GetAccountsAccountsAccountStatusEnum["Migrated"] = "MIGRATED";
})(GetAccountsAccountsAccountStatusEnum || (GetAccountsAccountsAccountStatusEnum = {}));
var GetAccountsAccountsAccount = /** @class */ (function (_super) {
    __extends(GetAccountsAccountsAccount, _super);
    function GetAccountsAccountsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountsAccount.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cbic" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccount.prototype, "cbic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ccan" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccount.prototype, "ccan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ciban" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccount.prototype, "ciban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cnsc" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccount.prototype, "cnsc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colour" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccount.prototype, "colour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", GetAccountsAccountsAccountCurrency)
    ], GetAccountsAccountsAccount.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAccount" }),
        __metadata("design:type", Boolean)
    ], GetAccountsAccountsAccount.prototype, "defaultAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDebitsAllowed" }),
        __metadata("design:type", Boolean)
    ], GetAccountsAccountsAccount.prototype, "directDebitsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ican" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountsAccount.prototype, "ican", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAccountsAccountsAccount.prototype, "status", void 0);
    return GetAccountsAccountsAccount;
}(SpeakeasyBase));
export { GetAccountsAccountsAccount };
var GetAccountsAccounts = /** @class */ (function (_super) {
    __extends(GetAccountsAccounts, _super);
    function GetAccountsAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetAccountsAccountsAccount }),
        __metadata("design:type", Array)
    ], GetAccountsAccounts.prototype, "accounts", void 0);
    return GetAccountsAccounts;
}(SpeakeasyBase));
export { GetAccountsAccounts };
var GetAccountsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsResponse, _super);
    function GetAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccounts)
    ], GetAccountsResponse.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsResponse.prototype, "statusCode", void 0);
    return GetAccountsResponse;
}(SpeakeasyBase));
export { GetAccountsResponse };
