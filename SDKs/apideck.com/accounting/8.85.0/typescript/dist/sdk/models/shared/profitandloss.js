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
var ProfitAndLossExpenses = /** @class */ (function (_super) {
    __extends(ProfitAndLossExpenses, _super);
    function ProfitAndLossExpenses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=records" }),
        __metadata("design:type", Array)
    ], ProfitAndLossExpenses.prototype, "records", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProfitAndLossExpenses.prototype, "total", void 0);
    return ProfitAndLossExpenses;
}(SpeakeasyBase));
export { ProfitAndLossExpenses };
var ProfitAndLossGrossProfit = /** @class */ (function (_super) {
    __extends(ProfitAndLossGrossProfit, _super);
    function ProfitAndLossGrossProfit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=records" }),
        __metadata("design:type", Array)
    ], ProfitAndLossGrossProfit.prototype, "records", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProfitAndLossGrossProfit.prototype, "total", void 0);
    return ProfitAndLossGrossProfit;
}(SpeakeasyBase));
export { ProfitAndLossGrossProfit };
var ProfitAndLossIncome = /** @class */ (function (_super) {
    __extends(ProfitAndLossIncome, _super);
    function ProfitAndLossIncome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=records" }),
        __metadata("design:type", Array)
    ], ProfitAndLossIncome.prototype, "records", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProfitAndLossIncome.prototype, "total", void 0);
    return ProfitAndLossIncome;
}(SpeakeasyBase));
export { ProfitAndLossIncome };
var ProfitAndLossNetIncome = /** @class */ (function (_super) {
    __extends(ProfitAndLossNetIncome, _super);
    function ProfitAndLossNetIncome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=records" }),
        __metadata("design:type", Array)
    ], ProfitAndLossNetIncome.prototype, "records", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProfitAndLossNetIncome.prototype, "total", void 0);
    return ProfitAndLossNetIncome;
}(SpeakeasyBase));
export { ProfitAndLossNetIncome };
var ProfitAndLossNetOperatingIncome = /** @class */ (function (_super) {
    __extends(ProfitAndLossNetOperatingIncome, _super);
    function ProfitAndLossNetOperatingIncome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=records" }),
        __metadata("design:type", Array)
    ], ProfitAndLossNetOperatingIncome.prototype, "records", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProfitAndLossNetOperatingIncome.prototype, "total", void 0);
    return ProfitAndLossNetOperatingIncome;
}(SpeakeasyBase));
export { ProfitAndLossNetOperatingIncome };
var ProfitAndLoss = /** @class */ (function (_super) {
    __extends(ProfitAndLoss, _super);
    function ProfitAndLoss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ProfitAndLoss.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], ProfitAndLoss.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], ProfitAndLoss.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenses" }),
        __metadata("design:type", ProfitAndLossExpenses)
    ], ProfitAndLoss.prototype, "expenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross_profit" }),
        __metadata("design:type", ProfitAndLossGrossProfit)
    ], ProfitAndLoss.prototype, "grossProfit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ProfitAndLoss.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=income" }),
        __metadata("design:type", ProfitAndLossIncome)
    ], ProfitAndLoss.prototype, "income", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_income" }),
        __metadata("design:type", ProfitAndLossNetIncome)
    ], ProfitAndLoss.prototype, "netIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_operating_income" }),
        __metadata("design:type", ProfitAndLossNetOperatingIncome)
    ], ProfitAndLoss.prototype, "netOperatingIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_name" }),
        __metadata("design:type", String)
    ], ProfitAndLoss.prototype, "reportName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], ProfitAndLoss.prototype, "startDate", void 0);
    return ProfitAndLoss;
}(SpeakeasyBase));
export { ProfitAndLoss };
