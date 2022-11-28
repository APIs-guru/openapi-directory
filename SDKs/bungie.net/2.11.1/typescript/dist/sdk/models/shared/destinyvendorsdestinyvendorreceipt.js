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
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
// DestinyVendorsDestinyVendorReceiptItemReceived
/**
 * The item that was received, and its quantity.
**/
var DestinyVendorsDestinyVendorReceiptItemReceived = /** @class */ (function (_super) {
    __extends(DestinyVendorsDestinyVendorReceiptItemReceived, _super);
    function DestinyVendorsDestinyVendorReceiptItemReceived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyVendorsDestinyVendorReceiptItemReceived.prototype, "hasConditionalVisibility", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceiptItemReceived.prototype, "itemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceiptItemReceived.prototype, "itemInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceiptItemReceived.prototype, "quantity", void 0);
    return DestinyVendorsDestinyVendorReceiptItemReceived;
}(SpeakeasyBase));
export { DestinyVendorsDestinyVendorReceiptItemReceived };
// DestinyVendorsDestinyVendorReceipt
/**
 * If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
**/
var DestinyVendorsDestinyVendorReceipt = /** @class */ (function (_super) {
    __extends(DestinyVendorsDestinyVendorReceipt, _super);
    function DestinyVendorsDestinyVendorReceipt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyItemQuantity }),
        __metadata("design:type", Array)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "currencyPaid", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "expiresOn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyVendorsDestinyVendorReceiptItemReceived)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "itemReceived", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "licenseUnlockHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "purchasedByCharacterId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "refundPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "sequenceNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyVendorsDestinyVendorReceipt.prototype, "timeToExpiration", void 0);
    return DestinyVendorsDestinyVendorReceipt;
}(SpeakeasyBase));
export { DestinyVendorsDestinyVendorReceipt };
