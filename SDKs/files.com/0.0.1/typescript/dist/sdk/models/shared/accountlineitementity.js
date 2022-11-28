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
import { InvoiceLineItemEntity } from "./invoicelineitementity";
import { PaymentLineItemEntity } from "./paymentlineitementity";
// AccountLineItemEntity
/**
 * List Payments
**/
var AccountLineItemEntity = /** @class */ (function (_super) {
    __extends(AccountLineItemEntity, _super);
    function AccountLineItemEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], AccountLineItemEntity.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], AccountLineItemEntity.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], AccountLineItemEntity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], AccountLineItemEntity.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_uri" }),
        __metadata("design:type", String)
    ], AccountLineItemEntity.prototype, "downloadUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AccountLineItemEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoice_line_items" }),
        __metadata("design:type", InvoiceLineItemEntity)
    ], AccountLineItemEntity.prototype, "invoiceLineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], AccountLineItemEntity.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_line_items" }),
        __metadata("design:type", PaymentLineItemEntity)
    ], AccountLineItemEntity.prototype, "paymentLineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_reversed_at" }),
        __metadata("design:type", Date)
    ], AccountLineItemEntity.prototype, "paymentReversedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_type" }),
        __metadata("design:type", String)
    ], AccountLineItemEntity.prototype, "paymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_name" }),
        __metadata("design:type", String)
    ], AccountLineItemEntity.prototype, "siteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountLineItemEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], AccountLineItemEntity.prototype, "updatedAt", void 0);
    return AccountLineItemEntity;
}(SpeakeasyBase));
export { AccountLineItemEntity };
