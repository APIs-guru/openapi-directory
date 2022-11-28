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
import { DealInput } from "./deal";
import { SellerInput } from "./seller";
import { Deal } from "./deal";
import { Note } from "./note";
import { Seller } from "./seller";
export var ProposalLastUpdaterOrCommentorRoleEnum;
(function (ProposalLastUpdaterOrCommentorRoleEnum) {
    ProposalLastUpdaterOrCommentorRoleEnum["BuyerSellerRoleUnspecified"] = "BUYER_SELLER_ROLE_UNSPECIFIED";
    ProposalLastUpdaterOrCommentorRoleEnum["Buyer"] = "BUYER";
    ProposalLastUpdaterOrCommentorRoleEnum["Seller"] = "SELLER";
})(ProposalLastUpdaterOrCommentorRoleEnum || (ProposalLastUpdaterOrCommentorRoleEnum = {}));
export var ProposalOriginatorRoleEnum;
(function (ProposalOriginatorRoleEnum) {
    ProposalOriginatorRoleEnum["BuyerSellerRoleUnspecified"] = "BUYER_SELLER_ROLE_UNSPECIFIED";
    ProposalOriginatorRoleEnum["Buyer"] = "BUYER";
    ProposalOriginatorRoleEnum["Seller"] = "SELLER";
})(ProposalOriginatorRoleEnum || (ProposalOriginatorRoleEnum = {}));
export var ProposalProposalStateEnum;
(function (ProposalProposalStateEnum) {
    ProposalProposalStateEnum["ProposalStateUnspecified"] = "PROPOSAL_STATE_UNSPECIFIED";
    ProposalProposalStateEnum["Proposed"] = "PROPOSED";
    ProposalProposalStateEnum["BuyerAccepted"] = "BUYER_ACCEPTED";
    ProposalProposalStateEnum["SellerAccepted"] = "SELLER_ACCEPTED";
    ProposalProposalStateEnum["Canceled"] = "CANCELED";
    ProposalProposalStateEnum["Finalized"] = "FINALIZED";
})(ProposalProposalStateEnum || (ProposalProposalStateEnum = {}));
// ProposalInput
/**
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
**/
var ProposalInput = /** @class */ (function (_super) {
    __extends(ProposalInput, _super);
    function ProposalInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billedBuyer" }),
        __metadata("design:type", Buyer)
    ], ProposalInput.prototype, "billedBuyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer" }),
        __metadata("design:type", Buyer)
    ], ProposalInput.prototype, "buyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], ProposalInput.prototype, "buyerContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerPrivateData" }),
        __metadata("design:type", PrivateData)
    ], ProposalInput.prototype, "buyerPrivateData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deals", elemType: DealInput }),
        __metadata("design:type", Array)
    ], ProposalInput.prototype, "deals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ProposalInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", SellerInput)
    ], ProposalInput.prototype, "seller", void 0);
    return ProposalInput;
}(SpeakeasyBase));
export { ProposalInput };
// Proposal
/**
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
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
        SpeakeasyMetadata({ data: "json, name=deals", elemType: Deal }),
        __metadata("design:type", Array)
    ], Proposal.prototype, "deals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRenegotiating" }),
        __metadata("design:type", Boolean)
    ], Proposal.prototype, "isRenegotiating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSetupComplete" }),
        __metadata("design:type", Boolean)
    ], Proposal.prototype, "isSetupComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdaterOrCommentorRole" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "lastUpdaterOrCommentorRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes", elemType: Note }),
        __metadata("design:type", Array)
    ], Proposal.prototype, "notes", void 0);
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
        SpeakeasyMetadata({ data: "json, name=proposalRevision" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "proposalRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proposalState" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "proposalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", Seller)
    ], Proposal.prototype, "seller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], Proposal.prototype, "sellerContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "termsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Proposal.prototype, "updateTime", void 0);
    return Proposal;
}(SpeakeasyBase));
export { Proposal };
