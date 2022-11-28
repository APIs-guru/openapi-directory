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
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge } from "./servicecharge";
import { ServiceChargeInput } from "./servicecharge";
export var MerchantStatusEnum;
(function (MerchantStatusEnum) {
    MerchantStatusEnum["Active"] = "active";
    MerchantStatusEnum["Inactive"] = "inactive";
    MerchantStatusEnum["Other"] = "other";
})(MerchantStatusEnum || (MerchantStatusEnum = {}));
var Merchant = /** @class */ (function (_super) {
    __extends(Merchant, _super);
    function Merchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Address)
    ], Merchant.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Merchant.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=main_location_id" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "mainLocationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceCharge }),
        __metadata("design:type", Array)
    ], Merchant.prototype, "serviceCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Merchant.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "updatedBy", void 0);
    return Merchant;
}(SpeakeasyBase));
export { Merchant };
var MerchantInput = /** @class */ (function (_super) {
    __extends(MerchantInput, _super);
    function MerchantInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Address)
    ], MerchantInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], MerchantInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], MerchantInput.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=main_location_id" }),
        __metadata("design:type", String)
    ], MerchantInput.prototype, "mainLocationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MerchantInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], MerchantInput.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceChargeInput }),
        __metadata("design:type", Array)
    ], MerchantInput.prototype, "serviceCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MerchantInput.prototype, "status", void 0);
    return MerchantInput;
}(SpeakeasyBase));
export { MerchantInput };
