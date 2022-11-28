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
import { CustomerAttributes } from "./customerattributes";
export var CustomerCustomerContractTypeEnum;
(function (CustomerCustomerContractTypeEnum) {
    CustomerCustomerContractTypeEnum["Demo"] = "demo";
    CustomerCustomerContractTypeEnum["Free"] = "free";
    CustomerCustomerContractTypeEnum["Pay"] = "pay";
})(CustomerCustomerContractTypeEnum || (CustomerCustomerContractTypeEnum = {}));
// Customer
/**
 * Customer information
**/
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationCode" }),
        __metadata("design:type", String)
    ], Customer.prototype, "activationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], Customer.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Customer.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerAttributes" }),
        __metadata("design:type", CustomerAttributes)
    ], Customer.prototype, "customerAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerContractType" }),
        __metadata("design:type", String)
    ], Customer.prototype, "customerContractType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerUuid" }),
        __metadata("design:type", String)
    ], Customer.prototype, "customerUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLocked" }),
        __metadata("design:type", Boolean)
    ], Customer.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginAt" }),
        __metadata("design:type", Date)
    ], Customer.prototype, "lastLoginAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], Customer.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerCustomerId" }),
        __metadata("design:type", String)
    ], Customer.prototype, "providerCustomerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaMax" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "quotaMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaUsed" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "quotaUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialDaysLeft" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "trialDaysLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Customer.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userMax" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "userMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userUsed" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "userUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooksMax" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "webhooksMax", void 0);
    return Customer;
}(SpeakeasyBase));
export { Customer };
