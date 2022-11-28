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
export var LocationStatusEnum;
(function (LocationStatusEnum) {
    LocationStatusEnum["Active"] = "active";
    LocationStatusEnum["Inactive"] = "inactive";
    LocationStatusEnum["Other"] = "other";
})(LocationStatusEnum || (LocationStatusEnum = {}));
var LocationInput = /** @class */ (function (_super) {
    __extends(LocationInput, _super);
    function LocationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Address)
    ], LocationInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_name" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "status", void 0);
    return LocationInput;
}(SpeakeasyBase));
export { LocationInput };
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Address)
    ], Location.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_name" }),
        __metadata("design:type", String)
    ], Location.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Location.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Location.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Location.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Location.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], Location.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Location.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Location.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Location.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Location.prototype, "updatedBy", void 0);
    return Location;
}(SpeakeasyBase));
export { Location };
