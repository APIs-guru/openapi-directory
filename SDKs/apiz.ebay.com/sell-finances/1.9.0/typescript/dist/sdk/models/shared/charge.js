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
// Charge
/**
 * This type is used by the charge container, which is an array of one or more charges related to the transfer.
**/
var Charge = /** @class */ (function (_super) {
    __extends(Charge, _super);
    function Charge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationId" }),
        __metadata("design:type", String)
    ], Charge.prototype, "cancellationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseId" }),
        __metadata("design:type", String)
    ], Charge.prototype, "caseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargeNetAmount" }),
        __metadata("design:type", Amount)
    ], Charge.prototype, "chargeNetAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inquiryId" }),
        __metadata("design:type", String)
    ], Charge.prototype, "inquiryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], Charge.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentDisputeId" }),
        __metadata("design:type", String)
    ], Charge.prototype, "paymentDisputeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refundId" }),
        __metadata("design:type", String)
    ], Charge.prototype, "refundId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnId" }),
        __metadata("design:type", String)
    ], Charge.prototype, "returnId", void 0);
    return Charge;
}(SpeakeasyBase));
export { Charge };
