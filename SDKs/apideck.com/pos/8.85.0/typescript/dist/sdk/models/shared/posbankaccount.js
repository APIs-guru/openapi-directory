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
// PosBankAccountAchDetails
/**
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
**/
var PosBankAccountAchDetails = /** @class */ (function (_super) {
    __extends(PosBankAccountAchDetails, _super);
    function PosBankAccountAchDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_number_suffix" }),
        __metadata("design:type", String)
    ], PosBankAccountAchDetails.prototype, "accountNumberSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_type" }),
        __metadata("design:type", String)
    ], PosBankAccountAchDetails.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routing_number" }),
        __metadata("design:type", String)
    ], PosBankAccountAchDetails.prototype, "routingNumber", void 0);
    return PosBankAccountAchDetails;
}(SpeakeasyBase));
export { PosBankAccountAchDetails };
// PosBankAccount
/**
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
**/
var PosBankAccount = /** @class */ (function (_super) {
    __extends(PosBankAccount, _super);
    function PosBankAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_ownership_type" }),
        __metadata("design:type", String)
    ], PosBankAccount.prototype, "accountOwnershipType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ach_details" }),
        __metadata("design:type", PosBankAccountAchDetails)
    ], PosBankAccount.prototype, "achDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_name" }),
        __metadata("design:type", String)
    ], PosBankAccount.prototype, "bankName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PosBankAccount.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], PosBankAccount.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statement_description" }),
        __metadata("design:type", String)
    ], PosBankAccount.prototype, "statementDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer_type" }),
        __metadata("design:type", String)
    ], PosBankAccount.prototype, "transferType", void 0);
    return PosBankAccount;
}(SpeakeasyBase));
export { PosBankAccount };
