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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var ProfileCommerceAddress = /** @class */ (function (_super) {
    __extends(ProfileCommerceAddress, _super);
    function ProfileCommerceAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], ProfileCommerceAddress.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], ProfileCommerceAddress.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], ProfileCommerceAddress.prototype, "postalCode", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ProfileCommerceAddress.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "json, name=street" }),
        __metadata("design:type", Array)
    ], ProfileCommerceAddress.prototype, "street", void 0);
    return ProfileCommerceAddress;
}(SpeakeasyBase));
export { ProfileCommerceAddress };
var ProfileCommerce = /** @class */ (function (_super) {
    __extends(ProfileCommerce, _super);
    function ProfileCommerce() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=address" }),
        __metadata("design:type", ProfileCommerceAddress)
    ], ProfileCommerce.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "json, name=bankPaymentReference" }),
        __metadata("design:type", String)
    ], ProfileCommerce.prototype, "bankPaymentReference", void 0);
    return ProfileCommerce;
}(SpeakeasyBase));
export { ProfileCommerce };
var ProfileCompany = /** @class */ (function (_super) {
    __extends(ProfileCompany, _super);
    function ProfileCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProfileCompany.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=taxReference" }),
        __metadata("design:type", String)
    ], ProfileCompany.prototype, "taxReference", void 0);
    return ProfileCompany;
}(SpeakeasyBase));
export { ProfileCompany };
var ProfileCredits = /** @class */ (function (_super) {
    __extends(ProfileCredits, _super);
    function ProfileCredits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], ProfileCredits.prototype, "balance", void 0);
    __decorate([
        Metadata({ data: "json, name=isTransferAllowed" }),
        __metadata("design:type", Boolean)
    ], ProfileCredits.prototype, "isTransferAllowed", void 0);
    __decorate([
        Metadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], ProfileCredits.prototype, "limit", void 0);
    return ProfileCredits;
}(SpeakeasyBase));
export { ProfileCredits };
var ProfileOriginAddresses = /** @class */ (function (_super) {
    __extends(ProfileOriginAddresses, _super);
    function ProfileOriginAddresses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowed" }),
        __metadata("design:type", Array)
    ], ProfileOriginAddresses.prototype, "allowed", void 0);
    __decorate([
        Metadata({ data: "json, name=isFullControlAllowed" }),
        __metadata("design:type", Boolean)
    ], ProfileOriginAddresses.prototype, "isFullControlAllowed", void 0);
    return ProfileOriginAddresses;
}(SpeakeasyBase));
export { ProfileOriginAddresses };
var ProfileQuota = /** @class */ (function (_super) {
    __extends(ProfileQuota, _super);
    function ProfileQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=remaining" }),
        __metadata("design:type", Number)
    ], ProfileQuota.prototype, "remaining", void 0);
    __decorate([
        Metadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ProfileQuota.prototype, "size", void 0);
    return ProfileQuota;
}(SpeakeasyBase));
export { ProfileQuota };
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=commerce" }),
        __metadata("design:type", ProfileCommerce)
    ], Profile.prototype, "commerce", void 0);
    __decorate([
        Metadata({ data: "json, name=company" }),
        __metadata("design:type", ProfileCompany)
    ], Profile.prototype, "company", void 0);
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Profile.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=credits" }),
        __metadata("design:type", ProfileCredits)
    ], Profile.prototype, "credits", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Profile.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=originAddresses" }),
        __metadata("design:type", ProfileOriginAddresses)
    ], Profile.prototype, "originAddresses", void 0);
    __decorate([
        Metadata({ data: "json, name=quota" }),
        __metadata("design:type", ProfileQuota)
    ], Profile.prototype, "quota", void 0);
    __decorate([
        Metadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Profile.prototype, "username", void 0);
    return Profile;
}(SpeakeasyBase));
export { Profile };
