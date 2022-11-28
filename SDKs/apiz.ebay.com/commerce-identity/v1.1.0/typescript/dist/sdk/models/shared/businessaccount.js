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
import { Contact } from "./contact";
import { Phone } from "./phone";
// BusinessAccount
/**
 * The type that defines the fields for the business account information.
**/
var BusinessAccount = /** @class */ (function (_super) {
    __extends(BusinessAccount, _super);
    function BusinessAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Address)
    ], BusinessAccount.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doingBusinessAs" }),
        __metadata("design:type", String)
    ], BusinessAccount.prototype, "doingBusinessAs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], BusinessAccount.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BusinessAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryContact" }),
        __metadata("design:type", Contact)
    ], BusinessAccount.prototype, "primaryContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPhone" }),
        __metadata("design:type", Phone)
    ], BusinessAccount.prototype, "primaryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryPhone" }),
        __metadata("design:type", Phone)
    ], BusinessAccount.prototype, "secondaryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], BusinessAccount.prototype, "website", void 0);
    return BusinessAccount;
}(SpeakeasyBase));
export { BusinessAccount };
