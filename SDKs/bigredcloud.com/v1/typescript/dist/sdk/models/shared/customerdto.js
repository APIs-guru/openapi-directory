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
import { EftBankDto } from "./eftbankdto";
import { OwnerOpeningBalanceInPeriodsDto } from "./owneropeningbalanceinperiodsdto";
import { OwnerOpeningBalanceDto } from "./owneropeningbalancedto";
var CustomerDto = /** @class */ (function (_super) {
    __extends(CustomerDto, _super);
    function CustomerDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Array)
    ], CustomerDto.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authCode" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "authCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank" }),
        __metadata("design:type", EftBankDto)
    ], CustomerDto.prototype, "bank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessIdentifierCode" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "businessIdentifierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "contact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delivery" }),
        __metadata("design:type", Array)
    ], CustomerDto.prototype, "delivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eFTReference" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "eFtReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CustomerDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internationalBankAccountNumber" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "internationalBankAccountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledgerBalance" }),
        __metadata("design:type", Number)
    ], CustomerDto.prototype, "ledgerBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openingBalance" }),
        __metadata("design:type", OwnerOpeningBalanceInPeriodsDto)
    ], CustomerDto.prototype, "openingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openingBalances", elemType: OwnerOpeningBalanceDto }),
        __metadata("design:type", Array)
    ], CustomerDto.prototype, "openingBalances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ourCode" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "ourCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerTypeId" }),
        __metadata("design:type", Number)
    ], CustomerDto.prototype, "ownerTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatAnalysisTypeId" }),
        __metadata("design:type", Number)
    ], CustomerDto.prototype, "vatAnalysisTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatReg" }),
        __metadata("design:type", String)
    ], CustomerDto.prototype, "vatReg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatType" }),
        __metadata("design:type", Number)
    ], CustomerDto.prototype, "vatType", void 0);
    return CustomerDto;
}(SpeakeasyBase));
export { CustomerDto };
