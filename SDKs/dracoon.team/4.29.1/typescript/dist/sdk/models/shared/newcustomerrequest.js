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
import { FirstAdminUser } from "./firstadminuser";
export var NewCustomerRequestCustomerContractTypeEnum;
(function (NewCustomerRequestCustomerContractTypeEnum) {
    NewCustomerRequestCustomerContractTypeEnum["Demo"] = "demo";
    NewCustomerRequestCustomerContractTypeEnum["Free"] = "free";
    NewCustomerRequestCustomerContractTypeEnum["Pay"] = "pay";
})(NewCustomerRequestCustomerContractTypeEnum || (NewCustomerRequestCustomerContractTypeEnum = {}));
// NewCustomerRequest
/**
 * Request model for creating a customer
**/
var NewCustomerRequest = /** @class */ (function (_super) {
    __extends(NewCustomerRequest, _super);
    function NewCustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationCode" }),
        __metadata("design:type", String)
    ], NewCustomerRequest.prototype, "activationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], NewCustomerRequest.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerAttributes" }),
        __metadata("design:type", CustomerAttributes)
    ], NewCustomerRequest.prototype, "customerAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerContractType" }),
        __metadata("design:type", String)
    ], NewCustomerRequest.prototype, "customerContractType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAdminUser" }),
        __metadata("design:type", FirstAdminUser)
    ], NewCustomerRequest.prototype, "firstAdminUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLocked" }),
        __metadata("design:type", Boolean)
    ], NewCustomerRequest.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], NewCustomerRequest.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerCustomerId" }),
        __metadata("design:type", String)
    ], NewCustomerRequest.prototype, "providerCustomerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaMax" }),
        __metadata("design:type", Number)
    ], NewCustomerRequest.prototype, "quotaMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialDays" }),
        __metadata("design:type", Number)
    ], NewCustomerRequest.prototype, "trialDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userMax" }),
        __metadata("design:type", Number)
    ], NewCustomerRequest.prototype, "userMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooksMax" }),
        __metadata("design:type", Number)
    ], NewCustomerRequest.prototype, "webhooksMax", void 0);
    return NewCustomerRequest;
}(SpeakeasyBase));
export { NewCustomerRequest };
