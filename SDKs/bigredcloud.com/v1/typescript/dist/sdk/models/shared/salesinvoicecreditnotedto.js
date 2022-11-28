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
import { AcudfValueDto } from "./acudfvaluedto";
import { ProductTranDto } from "./producttrandto";
var SalesInvoiceCreditNoteDto = /** @class */ (function (_super) {
    __extends(SalesInvoiceCreditNoteDto, _super);
    function SalesInvoiceCreditNoteDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acCode" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "acCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookTranTypeId" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "bookTranTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto }),
        __metadata("design:type", Array)
    ], SalesInvoiceCreditNoteDto.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryTo" }),
        __metadata("design:type", Array)
    ], SalesInvoiceCreditNoteDto.prototype, "deliveryTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryDate" }),
        __metadata("design:type", Date)
    ], SalesInvoiceCreditNoteDto.prototype, "entryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loType" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "loType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netGoods" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "netGoods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netServices" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "netServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ourReference" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "ourReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=procDate" }),
        __metadata("design:type", Date)
    ], SalesInvoiceCreditNoteDto.prototype, "procDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTrans", elemType: ProductTranDto }),
        __metadata("design:type", Array)
    ], SalesInvoiceCreditNoteDto.prototype, "productTrans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteId" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "quoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleRepCode" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "saleRepCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleRepId" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "saleRepId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalNet" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "totalNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalVAT" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "totalVat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unpaid" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "unpaid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatTypeId" }),
        __metadata("design:type", Number)
    ], SalesInvoiceCreditNoteDto.prototype, "vatTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yourReference" }),
        __metadata("design:type", String)
    ], SalesInvoiceCreditNoteDto.prototype, "yourReference", void 0);
    return SalesInvoiceCreditNoteDto;
}(SpeakeasyBase));
export { SalesInvoiceCreditNoteDto };
