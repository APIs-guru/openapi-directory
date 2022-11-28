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
import { ProductData } from "./productdata";
import { TransactionData } from "./transactiondata";
export var EcommerceDataActionTypeEnum;
(function (EcommerceDataActionTypeEnum) {
    EcommerceDataActionTypeEnum["Unknown"] = "UNKNOWN";
    EcommerceDataActionTypeEnum["Click"] = "CLICK";
    EcommerceDataActionTypeEnum["DetailsView"] = "DETAILS_VIEW";
    EcommerceDataActionTypeEnum["AddToCart"] = "ADD_TO_CART";
    EcommerceDataActionTypeEnum["RemoveFromCart"] = "REMOVE_FROM_CART";
    EcommerceDataActionTypeEnum["Checkout"] = "CHECKOUT";
    EcommerceDataActionTypeEnum["Payment"] = "PAYMENT";
    EcommerceDataActionTypeEnum["Refund"] = "REFUND";
    EcommerceDataActionTypeEnum["CheckoutOption"] = "CHECKOUT_OPTION";
})(EcommerceDataActionTypeEnum || (EcommerceDataActionTypeEnum = {}));
export var EcommerceDataEcommerceTypeEnum;
(function (EcommerceDataEcommerceTypeEnum) {
    EcommerceDataEcommerceTypeEnum["EcommerceTypeUnspecified"] = "ECOMMERCE_TYPE_UNSPECIFIED";
    EcommerceDataEcommerceTypeEnum["Classic"] = "CLASSIC";
    EcommerceDataEcommerceTypeEnum["Enhanced"] = "ENHANCED";
})(EcommerceDataEcommerceTypeEnum || (EcommerceDataEcommerceTypeEnum = {}));
// EcommerceData
/**
 * E-commerce details associated with the user activity.
**/
var EcommerceData = /** @class */ (function (_super) {
    __extends(EcommerceData, _super);
    function EcommerceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionType" }),
        __metadata("design:type", String)
    ], EcommerceData.prototype, "actionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecommerceType" }),
        __metadata("design:type", String)
    ], EcommerceData.prototype, "ecommerceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products", elemType: ProductData }),
        __metadata("design:type", Array)
    ], EcommerceData.prototype, "products", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction" }),
        __metadata("design:type", TransactionData)
    ], EcommerceData.prototype, "transaction", void 0);
    return EcommerceData;
}(SpeakeasyBase));
export { EcommerceData };
