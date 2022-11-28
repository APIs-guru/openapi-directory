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
import { QuoteProductTransDto } from "./quoteproducttransdto";
var QuoteDto = /** @class */ (function (_super) {
    __extends(QuoteDto, _super);
    function QuoteDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acCode" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "acCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closedDate" }),
        __metadata("design:type", Date)
    ], QuoteDto.prototype, "closedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyId" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto }),
        __metadata("design:type", Array)
    ], QuoteDto.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerOwnerId" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "customerOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerOwnerName" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "customerOwnerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ddNumber" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "ddNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryList" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "deliveryList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryTo" }),
        __metadata("design:type", Array)
    ], QuoteDto.prototype, "deliveryTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryDate" }),
        __metadata("design:type", Date)
    ], QuoteDto.prototype, "entryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layoutType" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "layoutType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poNumber" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=procDate" }),
        __metadata("design:type", Date)
    ], QuoteDto.prototype, "procDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTrans", elemType: QuoteProductTransDto }),
        __metadata("design:type", Array)
    ], QuoteDto.prototype, "productTrans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleInvoiceId" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "saleInvoiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleRepCode" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "saleRepCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleRepId" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "saleRepId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeStamp" }),
        __metadata("design:type", String)
    ], QuoteDto.prototype, "timeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalNet" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "totalNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalVat" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "totalVat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatTypeId" }),
        __metadata("design:type", Number)
    ], QuoteDto.prototype, "vatTypeId", void 0);
    return QuoteDto;
}(SpeakeasyBase));
export { QuoteDto };
