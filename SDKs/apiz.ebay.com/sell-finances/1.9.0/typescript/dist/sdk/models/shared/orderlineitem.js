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
import { Fee } from "./fee";
// OrderLineItem
/**
 * This type is used to show the fees that are deducted from a seller payout for each line item in an order.
**/
var OrderLineItem = /** @class */ (function (_super) {
    __extends(OrderLineItem, _super);
    function OrderLineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeBasisAmount" }),
        __metadata("design:type", Amount)
    ], OrderLineItem.prototype, "feeBasisAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemId" }),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "lineItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceFees", elemType: Fee }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "marketplaceFees", void 0);
    return OrderLineItem;
}(SpeakeasyBase));
export { OrderLineItem };
