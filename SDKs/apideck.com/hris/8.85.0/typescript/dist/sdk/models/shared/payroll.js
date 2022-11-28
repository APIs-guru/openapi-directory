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
import { Compensation } from "./compensation";
import { PayrollTotals } from "./payrolltotals";
var Payroll = /** @class */ (function (_super) {
    __extends(Payroll, _super);
    function Payroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_date" }),
        __metadata("design:type", String)
    ], Payroll.prototype, "checkDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], Payroll.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensations", elemType: Compensation }),
        __metadata("design:type", Array)
    ], Payroll.prototype, "compensations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], Payroll.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Payroll.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processed" }),
        __metadata("design:type", Boolean)
    ], Payroll.prototype, "processed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processed_date" }),
        __metadata("design:type", String)
    ], Payroll.prototype, "processedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], Payroll.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totals" }),
        __metadata("design:type", PayrollTotals)
    ], Payroll.prototype, "totals", void 0);
    return Payroll;
}(SpeakeasyBase));
export { Payroll };
