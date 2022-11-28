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
import { Phone } from "./phone";
// ReturnAddress
/**
 * This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
**/
var ReturnAddress = /** @class */ (function (_super) {
    __extends(ReturnAddress, _super);
    function ReturnAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "addressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullName" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPhone" }),
        __metadata("design:type", Phone)
    ], ReturnAddress.prototype, "primaryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateOrProvince" }),
        __metadata("design:type", String)
    ], ReturnAddress.prototype, "stateOrProvince", void 0);
    return ReturnAddress;
}(SpeakeasyBase));
export { ReturnAddress };
