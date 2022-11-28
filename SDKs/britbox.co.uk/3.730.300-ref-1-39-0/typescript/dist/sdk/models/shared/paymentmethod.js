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
export var PaymentMethodBrandEnum;
(function (PaymentMethodBrandEnum) {
    PaymentMethodBrandEnum["Visa"] = "Visa";
    PaymentMethodBrandEnum["MasterCard"] = "MasterCard";
    PaymentMethodBrandEnum["AmericanExpress"] = "AmericanExpress";
    PaymentMethodBrandEnum["Other"] = "Other";
})(PaymentMethodBrandEnum || (PaymentMethodBrandEnum = {}));
export var PaymentMethodTypeEnum;
(function (PaymentMethodTypeEnum) {
    PaymentMethodTypeEnum["Card"] = "Card";
    PaymentMethodTypeEnum["Wallet"] = "Wallet";
})(PaymentMethodTypeEnum || (PaymentMethodTypeEnum = {}));
var PaymentMethod = /** @class */ (function (_super) {
    __extends(PaymentMethod, _super);
    function PaymentMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], PaymentMethod.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], PaymentMethod.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PaymentMethod.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PaymentMethod.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryMonth" }),
        __metadata("design:type", Number)
    ], PaymentMethod.prototype, "expiryMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryYear" }),
        __metadata("design:type", Number)
    ], PaymentMethod.prototype, "expiryYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PaymentMethod.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastDigits" }),
        __metadata("design:type", Number)
    ], PaymentMethod.prototype, "lastDigits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PaymentMethod.prototype, "type", void 0);
    return PaymentMethod;
}(SpeakeasyBase));
export { PaymentMethod };
