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
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./oneaccountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardId" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard.prototype, "cardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embossBusinessName" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard.prototype, "embossBusinessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embossCardName" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard.prototype, "embossCardName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryDate" }),
        __metadata("design:type", Date)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maskedPan" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard.prototype, "maskedPan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard.prototype, "provider", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard };
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyAmount" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade.prototype, "buyAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyCurrency" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade.prototype, "buyCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedSide" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade.prototype, "fixedSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate4d" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade.prototype, "rate4d", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellAmount" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade.prototype, "sellAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellCurrency" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade.prototype, "sellCurrency", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade };
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsc" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount.prototype, "nsc", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount };
export var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum;
(function (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum) {
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum["FireAccount"] = "FIRE_ACCOUNT";
})(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum || (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum = {}));
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount.prototype, "type", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount };
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsc" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount.prototype, "nsc", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount };
export var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum;
(function (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum) {
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum["ExternalAccount"] = "EXTERNAL_ACCOUNT";
})(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum || (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum = {}));
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount.prototype, "type", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount };
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsc" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount.prototype, "nsc", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount };
export var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum;
(function (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum) {
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum["WithdrawalAccount"] = "WITHDRAWAL_ACCOUNT";
})(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum || (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum = {}));
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee.prototype, "type", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee };
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acquirerIdDe32" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "acquirerIdDe32", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalAmtDe54" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "additionalAmtDe54", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDataDe124" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "additionalDataDe124", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDataDe48" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "additionalDataDe48", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authCodeDe38" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "authCodeDe38", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorisedByGps" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "authorisedByGps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avsResult" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "avsResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billAmt" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "billAmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billCcy" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "billCcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryDate" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mccCode" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "mccCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchIdDe42" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "merchIdDe42", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchNameDe43" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "merchNameDe43", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtId" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "mtId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posDataDe22" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "posDataDe22", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posDataDe61" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "posDataDe61", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posTermnlDe41" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "posTermnlDe41", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=procCode" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "procCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordDataDe120" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "recordDataDe120", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=respCodeDe39" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "respCodeDe39", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retRefNoDe37" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "retRefNoDe37", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnAmt4d" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnAmt4d", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnCcy" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnCcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnCtry" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnCtry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnDesc" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnStatCode" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnStatCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnType" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnType", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant };
export var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum;
(function (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum) {
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum["CardMerchant"] = "CARD_MERCHANT";
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum["CardAtm"] = "CARD_ATM";
})(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum || (Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum = {}));
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardMerchant" }),
        __metadata("design:type", Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment.prototype, "cardMerchant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment.prototype, "type", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment };
var Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema, _super);
    function Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountAfterCharges" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "amountAfterCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountBeforeCharges" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "amountBeforeCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card" }),
        __metadata("design:type", Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "card", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateAcknowledged" }),
        __metadata("design:type", Date)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "dateAcknowledged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeAmount" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fxTradeDetails" }),
        __metadata("design:type", Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "fxTradeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ican" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "ican", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myRef" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "myRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentRequestPublicCode" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "paymentRequestPublicCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refId" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "refId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedParty" }),
        __metadata("design:type", Object)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "relatedParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", Number)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "txnId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema.prototype, "type", void 0);
    return Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema;
}(SpeakeasyBase));
export { Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema };
