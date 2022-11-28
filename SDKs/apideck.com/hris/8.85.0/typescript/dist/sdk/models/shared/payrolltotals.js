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
var PayrollTotals = /** @class */ (function (_super) {
    __extends(PayrollTotals, _super);
    function PayrollTotals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_amount" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "checkAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_debit" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "companyDebit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_benefit_deductions" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "employeeBenefitDeductions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_taxes" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "employeeTaxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employer_benefit_contributions" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "employerBenefitContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employer_taxes" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "employerTaxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross_pay" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "grossPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_pay" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "netPay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_debit" }),
        __metadata("design:type", Number)
    ], PayrollTotals.prototype, "taxDebit", void 0);
    return PayrollTotals;
}(SpeakeasyBase));
export { PayrollTotals };
