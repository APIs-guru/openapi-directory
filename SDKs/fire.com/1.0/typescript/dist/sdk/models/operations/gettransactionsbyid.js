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
var GetTransactionsByIdPathParams = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdPathParams, _super);
    function GetTransactionsByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ican" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdPathParams.prototype, "ican", void 0);
    return GetTransactionsByIdPathParams;
}(SpeakeasyBase));
export { GetTransactionsByIdPathParams };
var GetTransactionsByIdTransactionRelatedCard = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedCard, _super);
    function GetTransactionsByIdTransactionRelatedCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedCard.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardId" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionRelatedCard.prototype, "cardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embossBusinessName" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedCard.prototype, "embossBusinessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embossCardName" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedCard.prototype, "embossCardName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryDate" }),
        __metadata("design:type", Date)
    ], GetTransactionsByIdTransactionRelatedCard.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maskedPan" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedCard.prototype, "maskedPan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedCard.prototype, "provider", void 0);
    return GetTransactionsByIdTransactionRelatedCard;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedCard };
var GetTransactionsByIdTransactionFxTrade = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionFxTrade, _super);
    function GetTransactionsByIdTransactionFxTrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyAmount" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionFxTrade.prototype, "buyAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyCurrency" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionFxTrade.prototype, "buyCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedSide" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionFxTrade.prototype, "fixedSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate4d" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionFxTrade.prototype, "rate4d", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellAmount" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionFxTrade.prototype, "sellAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellCurrency" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionFxTrade.prototype, "sellCurrency", void 0);
    return GetTransactionsByIdTransactionFxTrade;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionFxTrade };
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsc" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount.prototype, "nsc", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount };
export var GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum;
(function (GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum) {
    GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum["FireAccount"] = "FIRE_ACCOUNT";
})(GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum || (GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum = {}));
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount.prototype, "type", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount };
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsc" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount.prototype, "nsc", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount };
export var GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum;
(function (GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum) {
    GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum["ExternalAccount"] = "EXTERNAL_ACCOUNT";
})(GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum || (GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum = {}));
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount.prototype, "type", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount };
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsc" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount.prototype, "nsc", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount };
export var GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum;
(function (GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum) {
    GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum["WithdrawalAccount"] = "WITHDRAWAL_ACCOUNT";
})(GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum || (GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum = {}));
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee.prototype, "type", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee };
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acquirerIdDe32" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "acquirerIdDe32", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalAmtDe54" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "additionalAmtDe54", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDataDe124" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "additionalDataDe124", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDataDe48" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "additionalDataDe48", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authCodeDe38" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "authCodeDe38", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorisedByGps" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "authorisedByGps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avsResult" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "avsResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billAmt" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "billAmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billCcy" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "billCcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryDate" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mccCode" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "mccCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchIdDe42" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "merchIdDe42", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchNameDe43" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "merchNameDe43", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtId" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "mtId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posDataDe22" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "posDataDe22", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posDataDe61" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "posDataDe61", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posTermnlDe41" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "posTermnlDe41", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=procCode" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "procCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordDataDe120" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "recordDataDe120", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=respCodeDe39" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "respCodeDe39", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retRefNoDe37" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "retRefNoDe37", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnAmt4d" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnAmt4d", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnCcy" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnCcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnCtry" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnCtry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnDesc" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnStatCode" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnStatCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnType" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant.prototype, "txnType", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant };
export var GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum;
(function (GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum) {
    GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum["CardMerchant"] = "CARD_MERCHANT";
    GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum["CardAtm"] = "CARD_ATM";
})(GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum || (GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum = {}));
var GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment, _super);
    function GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardMerchant" }),
        __metadata("design:type", GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment.prototype, "cardMerchant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment.prototype, "type", void 0);
    return GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment;
}(SpeakeasyBase));
export { GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment };
var GetTransactionsByIdTransaction = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdTransaction, _super);
    function GetTransactionsByIdTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountAfterCharges" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "amountAfterCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountBeforeCharges" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "amountBeforeCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card" }),
        __metadata("design:type", GetTransactionsByIdTransactionRelatedCard)
    ], GetTransactionsByIdTransaction.prototype, "card", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetTransactionsByIdTransaction.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GetTransactionsByIdTransaction.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateAcknowledged" }),
        __metadata("design:type", Date)
    ], GetTransactionsByIdTransaction.prototype, "dateAcknowledged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeAmount" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fxTradeDetails" }),
        __metadata("design:type", GetTransactionsByIdTransactionFxTrade)
    ], GetTransactionsByIdTransaction.prototype, "fxTradeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ican" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "ican", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myRef" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransaction.prototype, "myRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentRequestPublicCode" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransaction.prototype, "paymentRequestPublicCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refId" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "refId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedParty" }),
        __metadata("design:type", Object)
    ], GetTransactionsByIdTransaction.prototype, "relatedParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=txnId" }),
        __metadata("design:type", Number)
    ], GetTransactionsByIdTransaction.prototype, "txnId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetTransactionsByIdTransaction.prototype, "type", void 0);
    return GetTransactionsByIdTransaction;
}(SpeakeasyBase));
export { GetTransactionsByIdTransaction };
var GetTransactionsByIdRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdRequest, _super);
    function GetTransactionsByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsByIdPathParams)
    ], GetTransactionsByIdRequest.prototype, "pathParams", void 0);
    return GetTransactionsByIdRequest;
}(SpeakeasyBase));
export { GetTransactionsByIdRequest };
var GetTransactionsByIdResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsByIdResponse, _super);
    function GetTransactionsByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionsByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionsByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsByIdTransaction)
    ], GetTransactionsByIdResponse.prototype, "transaction", void 0);
    return GetTransactionsByIdResponse;
}(SpeakeasyBase));
export { GetTransactionsByIdResponse };
