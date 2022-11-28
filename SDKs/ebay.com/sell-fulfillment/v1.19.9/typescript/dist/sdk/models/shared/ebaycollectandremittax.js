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
import { Amount } from "./amount";
import { EbayTaxReference } from "./ebaytaxreference";
// EbayCollectAndRemitTax
/**
 * This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority. 'Collect and Remit' tax includes US state-mandated sales tax, 'Goods and Services' tax in Australia or New Zealand, VAT collected for the UK and EU countries.
**/
var EbayCollectAndRemitTax = /** @class */ (function (_super) {
    __extends(EbayCollectAndRemitTax, _super);
    function EbayCollectAndRemitTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Amount)
    ], EbayCollectAndRemitTax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionMethod" }),
        __metadata("design:type", String)
    ], EbayCollectAndRemitTax.prototype, "collectionMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebayReference" }),
        __metadata("design:type", EbayTaxReference)
    ], EbayCollectAndRemitTax.prototype, "ebayReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxType" }),
        __metadata("design:type", String)
    ], EbayCollectAndRemitTax.prototype, "taxType", void 0);
    return EbayCollectAndRemitTax;
}(SpeakeasyBase));
export { EbayCollectAndRemitTax };
