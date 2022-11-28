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
export var AddressTypeEnum;
(function (AddressTypeEnum) {
    AddressTypeEnum["Primary"] = "primary";
    AddressTypeEnum["Secondary"] = "secondary";
    AddressTypeEnum["Home"] = "home";
    AddressTypeEnum["Office"] = "office";
    AddressTypeEnum["Shipping"] = "shipping";
    AddressTypeEnum["Billing"] = "billing";
    AddressTypeEnum["Other"] = "other";
})(AddressTypeEnum || (AddressTypeEnum = {}));
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Address.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], Address.prototype, "contactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Address.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], Address.prototype, "county", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Address.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], Address.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Address.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], Address.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line1" }),
        __metadata("design:type", String)
    ], Address.prototype, "line1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line2" }),
        __metadata("design:type", String)
    ], Address.prototype, "line2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line3" }),
        __metadata("design:type", String)
    ], Address.prototype, "line3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line4" }),
        __metadata("design:type", String)
    ], Address.prototype, "line4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], Address.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Address.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], Address.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], Address.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], Address.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salutation" }),
        __metadata("design:type", String)
    ], Address.prototype, "salutation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Address.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_number" }),
        __metadata("design:type", String)
    ], Address.prototype, "streetNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=string" }),
        __metadata("design:type", String)
    ], Address.prototype, "string", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Address.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], Address.prototype, "website", void 0);
    return Address;
}(SpeakeasyBase));
export { Address };
