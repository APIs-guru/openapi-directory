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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { OrderStatusEnum } from "./orderstatusenum";
// Order
/**
 * Information about an order.
**/
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=LineItems", elemType: shared.LineItem }),
        __metadata("design:type", Array)
    ], Order.prototype, "lineItems", void 0);
    __decorate([
        Metadata({ data: "json, name=OrderFulfilledDate" }),
        __metadata("design:type", Date)
    ], Order.prototype, "orderFulfilledDate", void 0);
    __decorate([
        Metadata({ data: "json, name=OrderId" }),
        __metadata("design:type", String)
    ], Order.prototype, "orderId", void 0);
    __decorate([
        Metadata({ data: "json, name=OrderSubmissionDate" }),
        __metadata("design:type", Date)
    ], Order.prototype, "orderSubmissionDate", void 0);
    __decorate([
        Metadata({ data: "json, name=OutpostId" }),
        __metadata("design:type", String)
    ], Order.prototype, "outpostId", void 0);
    __decorate([
        Metadata({ data: "json, name=PaymentOption" }),
        __metadata("design:type", String)
    ], Order.prototype, "paymentOption", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Order.prototype, "status", void 0);
    return Order;
}(SpeakeasyBase));
export { Order };
