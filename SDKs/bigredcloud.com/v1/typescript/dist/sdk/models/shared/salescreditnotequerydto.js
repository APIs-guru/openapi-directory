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
import { ProductTranQueryDto } from "./producttranquerydto";
var SalesCreditNoteQueryDto = /** @class */ (function (_super) {
    __extends(SalesCreditNoteQueryDto, _super);
    function SalesCreditNoteQueryDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acCode" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "acCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookTranTypeId" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "bookTranTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto }),
        __metadata("design:type", Array)
    ], SalesCreditNoteQueryDto.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryTo" }),
        __metadata("design:type", Array)
    ], SalesCreditNoteQueryDto.prototype, "deliveryTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryDate" }),
        __metadata("design:type", Date)
    ], SalesCreditNoteQueryDto.prototype, "entryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loType" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "loType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netGoods" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "netGoods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netServices" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "netServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ourReference" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "ourReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=procDate" }),
        __metadata("design:type", Date)
    ], SalesCreditNoteQueryDto.prototype, "procDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTrans", elemType: ProductTranQueryDto }),
        __metadata("design:type", Array)
    ], SalesCreditNoteQueryDto.prototype, "productTrans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteId" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "quoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleRepCode" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "saleRepCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleRepId" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "saleRepId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalNet" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "totalNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalVAT" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "totalVat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unpaid" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "unpaid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatTypeId" }),
        __metadata("design:type", Number)
    ], SalesCreditNoteQueryDto.prototype, "vatTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yourReference" }),
        __metadata("design:type", String)
    ], SalesCreditNoteQueryDto.prototype, "yourReference", void 0);
    return SalesCreditNoteQueryDto;
}(SpeakeasyBase));
export { SalesCreditNoteQueryDto };
