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
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { Rate } from "./rate";
import { Contact } from "./contact";
import { Error } from "./error";
// ShippingQuote
/**
 * This complex type describes a &quot;shipping quote,&quot; which contains the parameters for a package shipment. The shipping quote contains a list of &quot;live quotes&quot; or rates for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller. Use the rateId value to select the specific service you want when you create a shipment by calling createFromShippingQuote.
**/
var ShippingQuote = /** @class */ (function (_super) {
    __extends(ShippingQuote, _super);
    function ShippingQuote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], ShippingQuote.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], ShippingQuote.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orders", elemType: Order }),
        __metadata("design:type", Array)
    ], ShippingQuote.prototype, "orders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageSpecification" }),
        __metadata("design:type", PackageSpecification)
    ], ShippingQuote.prototype, "packageSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rates", elemType: Rate }),
        __metadata("design:type", Array)
    ], ShippingQuote.prototype, "rates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipFrom" }),
        __metadata("design:type", Contact)
    ], ShippingQuote.prototype, "shipFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipTo" }),
        __metadata("design:type", Contact)
    ], ShippingQuote.prototype, "shipTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingQuoteId" }),
        __metadata("design:type", String)
    ], ShippingQuote.prototype, "shippingQuoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error }),
        __metadata("design:type", Array)
    ], ShippingQuote.prototype, "warnings", void 0);
    return ShippingQuote;
}(SpeakeasyBase));
export { ShippingQuote };
