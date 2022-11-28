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
var CashPaymentDto = /** @class */ (function (_super) {
    __extends(CashPaymentDto, _super);
    function CashPaymentDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acCode" }),
        __metadata("design:type", String)
    ], CashPaymentDto.prototype, "acCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acEntries", elemType: AcEntryDto }),
        __metadata("design:type", Array)
    ], CashPaymentDto.prototype, "acEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bankAccountCode" }),
        __metadata("design:type", String)
    ], CashPaymentDto.prototype, "bankAccountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bankAccountId" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "bankAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookTranTypeId" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "bookTranTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto }),
        __metadata("design:type", Array)
    ], CashPaymentDto.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailCollection" }),
        __metadata("design:type", Array)
    ], CashPaymentDto.prototype, "detailCollection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "discount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryDate" }),
        __metadata("design:type", Date)
    ], CashPaymentDto.prototype, "entryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledger" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "ledger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lodgement" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "lodgement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], CashPaymentDto.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plaidTransactionId" }),
        __metadata("design:type", String)
    ], CashPaymentDto.prototype, "plaidTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=procDate" }),
        __metadata("design:type", Date)
    ], CashPaymentDto.prototype, "procDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplierId" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "supplierId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], CashPaymentDto.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CashPaymentDto.prototype, "total", void 0);
    return CashPaymentDto;
}(SpeakeasyBase));
export { CashPaymentDto };
