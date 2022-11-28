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
import { SellerActionsToRelease } from "./selleractionstorelease";
// PaymentHold
/**
 * This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
**/
var PaymentHold = /** @class */ (function (_super) {
    __extends(PaymentHold, _super);
    function PaymentHold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedReleaseDate" }),
        __metadata("design:type", String)
    ], PaymentHold.prototype, "expectedReleaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holdAmount" }),
        __metadata("design:type", Amount)
    ], PaymentHold.prototype, "holdAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holdReason" }),
        __metadata("design:type", String)
    ], PaymentHold.prototype, "holdReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holdState" }),
        __metadata("design:type", String)
    ], PaymentHold.prototype, "holdState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseDate" }),
        __metadata("design:type", String)
    ], PaymentHold.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerActionsToRelease", elemType: SellerActionsToRelease }),
        __metadata("design:type", Array)
    ], PaymentHold.prototype, "sellerActionsToRelease", void 0);
    return PaymentHold;
}(SpeakeasyBase));
export { PaymentHold };
