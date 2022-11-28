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
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { PrivateData } from "./privatedata";
import { MarketplaceLabel } from "./marketplacelabel";
import { Seller } from "./seller";
// Proposal
/**
 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
 *
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
**/
var Proposal = /** @class */ (function (_super) {
    __extends(Proposal, _super);
    function Proposal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billedBuyer" }),
        __metadata("design:type", Buyer)
    ], Proposal.prototype, "billedBuyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer" }),
        __metadata("design:type", Buyer)
    ], Proposal.prototype, "buyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], Proposal.prototype, "buyerContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerPrivateData" }),
        __metadata("design:type", PrivateData)
    ], Proposal.prototype, "buyerPrivateData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dbmAdvertiserIds" }),
        __metadata("design:type", Array)
    ], Proposal.prototype, "dbmAdvertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasBuyerSignedOff" }),
        __metadata("design:type", Boolean)
    ], Proposal.prototype, "hasBuyerSignedOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasSellerSignedOff" }),
        __metadata("design:type", Boolean)
    ], Proposal.prototype, "hasSellerSignedOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySource" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "inventorySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRenegotiating" }),
        __metadata("design:type", Boolean)
    ], Proposal.prototype, "isRenegotiating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSetupComplete" }),
        __metadata("design:type", Boolean)
    ], Proposal.prototype, "isSetupComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: MarketplaceLabel }),
        __metadata("design:type", Array)
    ], Proposal.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdaterOrCommentorRole" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "lastUpdaterOrCommentorRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negotiationId" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "negotiationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorRole" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "originatorRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateAuctionId" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "privateAuctionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proposalId" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "proposalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proposalState" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "proposalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionNumber" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "revisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionTimeMs" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "revisionTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", Seller)
    ], Proposal.prototype, "seller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], Proposal.prototype, "sellerContacts", void 0);
    return Proposal;
}(SpeakeasyBase));
export { Proposal };
