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
var Dealer = /** @class */ (function (_super) {
    __extends(Dealer, _super);
    function Dealer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_source" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], Dealer.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory_url" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "inventoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_ll" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "locationLl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller_email" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "sellerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller_name" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "sellerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller_phone" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "sellerPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "street", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "zip", void 0);
    return Dealer;
}(SpeakeasyBase));
export { Dealer };
