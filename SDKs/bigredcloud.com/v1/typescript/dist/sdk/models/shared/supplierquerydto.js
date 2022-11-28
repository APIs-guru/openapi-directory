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
import { EftBankDto } from "./eftbankdto";
var SupplierQueryDto = /** @class */ (function (_super) {
    __extends(SupplierQueryDto, _super);
    function SupplierQueryDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Array)
    ], SupplierQueryDto.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authCode" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "authCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank" }),
        __metadata("design:type", EftBankDto)
    ], SupplierQueryDto.prototype, "bank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessIdentifierCode" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "businessIdentifierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "contact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eFTReference" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "eFtReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SupplierQueryDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internationalBankAccountNumber" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "internationalBankAccountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ourCode" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "ourCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerTypeId" }),
        __metadata("design:type", Number)
    ], SupplierQueryDto.prototype, "ownerTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postponedAccounting" }),
        __metadata("design:type", Boolean)
    ], SupplierQueryDto.prototype, "postponedAccounting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatAnalysisTypeId" }),
        __metadata("design:type", Number)
    ], SupplierQueryDto.prototype, "vatAnalysisTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatReg" }),
        __metadata("design:type", String)
    ], SupplierQueryDto.prototype, "vatReg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatType" }),
        __metadata("design:type", Number)
    ], SupplierQueryDto.prototype, "vatType", void 0);
    return SupplierQueryDto;
}(SpeakeasyBase));
export { SupplierQueryDto };
