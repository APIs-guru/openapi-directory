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
// DealServingMetadataDealPauseStatus
/**
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
**/
var DealServingMetadataDealPauseStatus = /** @class */ (function (_super) {
    __extends(DealServingMetadataDealPauseStatus, _super);
    function DealServingMetadataDealPauseStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerPauseReason" }),
        __metadata("design:type", String)
    ], DealServingMetadataDealPauseStatus.prototype, "buyerPauseReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstPausedBy" }),
        __metadata("design:type", String)
    ], DealServingMetadataDealPauseStatus.prototype, "firstPausedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasBuyerPaused" }),
        __metadata("design:type", Boolean)
    ], DealServingMetadataDealPauseStatus.prototype, "hasBuyerPaused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasSellerPaused" }),
        __metadata("design:type", Boolean)
    ], DealServingMetadataDealPauseStatus.prototype, "hasSellerPaused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerPauseReason" }),
        __metadata("design:type", String)
    ], DealServingMetadataDealPauseStatus.prototype, "sellerPauseReason", void 0);
    return DealServingMetadataDealPauseStatus;
}(SpeakeasyBase));
export { DealServingMetadataDealPauseStatus };
