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
export var TaxRateTaxRateStatusEnum;
(function (TaxRateTaxRateStatusEnum) {
    TaxRateTaxRateStatusEnum["Active"] = "active";
    TaxRateTaxRateStatusEnum["Inactive"] = "inactive";
    TaxRateTaxRateStatusEnum["Archived"] = "archived";
})(TaxRateTaxRateStatusEnum || (TaxRateTaxRateStatusEnum = {}));
var TaxRate = /** @class */ (function (_super) {
    __extends(TaxRate, _super);
    function TaxRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components" }),
        __metadata("design:type", Array)
    ], TaxRate.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TaxRate.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effective_tax_rate" }),
        __metadata("design:type", Number)
    ], TaxRate.prototype, "effectiveTaxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_tax_rate_id" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "originalTaxRateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_tax_type" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "reportTaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_payable_account_id" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "taxPayableAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_remitted_account_id" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "taxRemittedAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax_rate" }),
        __metadata("design:type", Number)
    ], TaxRate.prototype, "totalTaxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], TaxRate.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], TaxRate.prototype, "updatedBy", void 0);
    return TaxRate;
}(SpeakeasyBase));
export { TaxRate };
var TaxRateInput = /** @class */ (function (_super) {
    __extends(TaxRateInput, _super);
    function TaxRateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components" }),
        __metadata("design:type", Array)
    ], TaxRateInput.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effective_tax_rate" }),
        __metadata("design:type", Number)
    ], TaxRateInput.prototype, "effectiveTaxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_tax_rate_id" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "originalTaxRateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_tax_type" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "reportTaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_payable_account_id" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "taxPayableAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_remitted_account_id" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "taxRemittedAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax_rate" }),
        __metadata("design:type", Number)
    ], TaxRateInput.prototype, "totalTaxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TaxRateInput.prototype, "type", void 0);
    return TaxRateInput;
}(SpeakeasyBase));
export { TaxRateInput };
