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
var AccountBidderLocation = /** @class */ (function (_super) {
    __extends(AccountBidderLocation, _super);
    function AccountBidderLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidProtocol" }),
        __metadata("design:type", String)
    ], AccountBidderLocation.prototype, "bidProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumQps" }),
        __metadata("design:type", Number)
    ], AccountBidderLocation.prototype, "maximumQps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AccountBidderLocation.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AccountBidderLocation.prototype, "url", void 0);
    return AccountBidderLocation;
}(SpeakeasyBase));
export { AccountBidderLocation };
// Account
/**
 * Configuration data for an Ad Exchange buyer account.
**/
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyPretargetingToNonGuaranteedDeals" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "applyPretargetingToNonGuaranteedDeals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidderLocation", elemType: AccountBidderLocation }),
        __metadata("design:type", Array)
    ], Account.prototype, "bidderLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookieMatchingNid" }),
        __metadata("design:type", String)
    ], Account.prototype, "cookieMatchingNid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookieMatchingUrl" }),
        __metadata("design:type", String)
    ], Account.prototype, "cookieMatchingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Account.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Account.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumActiveCreatives" }),
        __metadata("design:type", Number)
    ], Account.prototype, "maximumActiveCreatives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumTotalQps" }),
        __metadata("design:type", Number)
    ], Account.prototype, "maximumTotalQps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberActiveCreatives" }),
        __metadata("design:type", Number)
    ], Account.prototype, "numberActiveCreatives", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
