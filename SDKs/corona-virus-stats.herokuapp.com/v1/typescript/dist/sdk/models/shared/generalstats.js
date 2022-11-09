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
var GeneralStats = /** @class */ (function (_super) {
    __extends(GeneralStats, _super);
    function GeneralStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cases_with_outcome" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "casesWithOutcome", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], GeneralStats.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=critical_condition_active_cases" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "criticalConditionActiveCases", void 0);
    __decorate([
        Metadata({ data: "json, name=currently_infected" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "currentlyInfected", void 0);
    __decorate([
        Metadata({ data: "json, name=death_cases" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "deathCases", void 0);
    __decorate([
        Metadata({ data: "json, name=death_closed_cases" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "deathClosedCases", void 0);
    __decorate([
        Metadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], GeneralStats.prototype, "deleted", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GeneralStats.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=last_update" }),
        __metadata("design:type", Date)
    ], GeneralStats.prototype, "lastUpdate", void 0);
    __decorate([
        Metadata({ data: "json, name=mild_condition_active_cases" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "mildConditionActiveCases", void 0);
    __decorate([
        Metadata({ data: "json, name=recovered_closed_cases" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "recoveredClosedCases", void 0);
    __decorate([
        Metadata({ data: "json, name=recovery_cases" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "recoveryCases", void 0);
    __decorate([
        Metadata({ data: "json, name=total_cases" }),
        __metadata("design:type", Number)
    ], GeneralStats.prototype, "totalCases", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], GeneralStats.prototype, "updatedAt", void 0);
    return GeneralStats;
}(SpeakeasyBase));
export { GeneralStats };
