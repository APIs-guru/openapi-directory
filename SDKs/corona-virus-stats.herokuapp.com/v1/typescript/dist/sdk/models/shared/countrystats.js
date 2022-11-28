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
var CountryStats = /** @class */ (function (_super) {
    __extends(CountryStats, _super);
    function CountryStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_cases" }),
        __metadata("design:type", Number)
    ], CountryStats.prototype, "activeCases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cases_per_mill_pop" }),
        __metadata("design:type", Number)
    ], CountryStats.prototype, "casesPerMillPop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CountryStats.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag" }),
        __metadata("design:type", String)
    ], CountryStats.prototype, "flag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_update" }),
        __metadata("design:type", Date)
    ], CountryStats.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_cases" }),
        __metadata("design:type", Number)
    ], CountryStats.prototype, "newCases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_deaths" }),
        __metadata("design:type", Number)
    ], CountryStats.prototype, "newDeaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serious_critical" }),
        __metadata("design:type", Number)
    ], CountryStats.prototype, "seriousCritical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_cases" }),
        __metadata("design:type", Number)
    ], CountryStats.prototype, "totalCases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_deaths" }),
        __metadata("design:type", Number)
    ], CountryStats.prototype, "totalDeaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_recovered" }),
        __metadata("design:type", String)
    ], CountryStats.prototype, "totalRecovered", void 0);
    return CountryStats;
}(SpeakeasyBase));
export { CountryStats };
