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
export var NewCustomerResponseCustomerContractTypeEnum;
(function (NewCustomerResponseCustomerContractTypeEnum) {
    NewCustomerResponseCustomerContractTypeEnum["Demo"] = "demo";
    NewCustomerResponseCustomerContractTypeEnum["Free"] = "free";
    NewCustomerResponseCustomerContractTypeEnum["Pay"] = "pay";
})(NewCustomerResponseCustomerContractTypeEnum || (NewCustomerResponseCustomerContractTypeEnum = {}));
// NewCustomerResponse
/**
 * Customer information
**/
var NewCustomerResponse = /** @class */ (function (_super) {
    __extends(NewCustomerResponse, _super);
    function NewCustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationCode" }),
        __metadata("design:type", String)
    ], NewCustomerResponse.prototype, "activationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], NewCustomerResponse.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], NewCustomerResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerAttributes" }),
        __metadata("design:type", CustomerAttributes)
    ], NewCustomerResponse.prototype, "customerAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerContractType" }),
        __metadata("design:type", String)
    ], NewCustomerResponse.prototype, "customerContractType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerUuid" }),
        __metadata("design:type", String)
    ], NewCustomerResponse.prototype, "customerUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAdminUser" }),
        __metadata("design:type", FirstAdminUser)
    ], NewCustomerResponse.prototype, "firstAdminUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NewCustomerResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLocked" }),
        __metadata("design:type", Boolean)
    ], NewCustomerResponse.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], NewCustomerResponse.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerCustomerId" }),
        __metadata("design:type", String)
    ], NewCustomerResponse.prototype, "providerCustomerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaMax" }),
        __metadata("design:type", Number)
    ], NewCustomerResponse.prototype, "quotaMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialDays" }),
        __metadata("design:type", Number)
    ], NewCustomerResponse.prototype, "trialDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userMax" }),
        __metadata("design:type", Number)
    ], NewCustomerResponse.prototype, "userMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooksMax" }),
        __metadata("design:type", Number)
    ], NewCustomerResponse.prototype, "webhooksMax", void 0);
    return NewCustomerResponse;
}(SpeakeasyBase));
export { NewCustomerResponse };
