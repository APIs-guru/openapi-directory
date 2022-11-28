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
import { SimpleAmount } from "./simpleamount";
import { InfoFromBuyer } from "./infofrombuyer";
import { DisputeEvidence } from "./disputeevidence";
import { EvidenceRequest } from "./evidencerequest";
import { OrderLineItems } from "./orderlineitems";
import { MonetaryTransaction } from "./monetarytransaction";
import { PaymentDisputeOutcomeDetail } from "./paymentdisputeoutcomedetail";
import { ReturnAddress } from "./returnaddress";
// PaymentDispute
/**
 * This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
**/
var PaymentDispute = /** @class */ (function (_super) {
    __extends(PaymentDispute, _super);
    function PaymentDispute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", SimpleAmount)
    ], PaymentDispute.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableChoices" }),
        __metadata("design:type", Array)
    ], PaymentDispute.prototype, "availableChoices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerProvided" }),
        __metadata("design:type", InfoFromBuyer)
    ], PaymentDispute.prototype, "buyerProvided", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerUsername" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "buyerUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closedDate" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "closedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidence", elemType: DisputeEvidence }),
        __metadata("design:type", Array)
    ], PaymentDispute.prototype, "evidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceRequests", elemType: EvidenceRequest }),
        __metadata("design:type", Array)
    ], PaymentDispute.prototype, "evidenceRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItems }),
        __metadata("design:type", Array)
    ], PaymentDispute.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monetaryTransactions", elemType: MonetaryTransaction }),
        __metadata("design:type", Array)
    ], PaymentDispute.prototype, "monetaryTransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openDate" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "openDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentDisputeId" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "paymentDisputeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentDisputeStatus" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "paymentDisputeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", PaymentDisputeOutcomeDetail)
    ], PaymentDispute.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=respondByDate" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "respondByDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnAddress" }),
        __metadata("design:type", ReturnAddress)
    ], PaymentDispute.prototype, "returnAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], PaymentDispute.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerResponse" }),
        __metadata("design:type", String)
    ], PaymentDispute.prototype, "sellerResponse", void 0);
    return PaymentDispute;
}(SpeakeasyBase));
export { PaymentDispute };
