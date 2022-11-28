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
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
var PaymentDto = /** @class */ (function (_super) {
    __extends(PaymentDto, _super);
    function PaymentDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acCode" }),
        __metadata("design:type", String)
    ], PaymentDto.prototype, "acCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acEntries", elemType: AcEntryDto }),
        __metadata("design:type", Array)
    ], PaymentDto.prototype, "acEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bankAccountCode" }),
        __metadata("design:type", String)
    ], PaymentDto.prototype, "bankAccountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bankAccountId" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "bankAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookTranTypeId" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "bookTranTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto }),
        __metadata("design:type", Array)
    ], PaymentDto.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailCollection" }),
        __metadata("design:type", Array)
    ], PaymentDto.prototype, "detailCollection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "discount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryDate" }),
        __metadata("design:type", Date)
    ], PaymentDto.prototype, "entryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], PaymentDto.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plaidTransactionId" }),
        __metadata("design:type", String)
    ], PaymentDto.prototype, "plaidTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=procDate" }),
        __metadata("design:type", Date)
    ], PaymentDto.prototype, "procDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], PaymentDto.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierId" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "supplierId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], PaymentDto.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferBankCode" }),
        __metadata("design:type", String)
    ], PaymentDto.prototype, "transferBankCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferBankId" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "transferBankId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unallocated" }),
        __metadata("design:type", Number)
    ], PaymentDto.prototype, "unallocated", void 0);
    return PaymentDto;
}(SpeakeasyBase));
export { PaymentDto };
