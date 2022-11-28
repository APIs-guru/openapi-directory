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
import { ArrayStats } from "./arraystats";
import { CategoryStats } from "./categorystats";
import { Float64Stats } from "./float64stats";
import { StringStats } from "./stringstats";
import { StructStats } from "./structstats";
import { TimestampStats } from "./timestampstats";
// DataStats
/**
 * The data statistics of a series of values that share the same DataType.
**/
var DataStats = /** @class */ (function (_super) {
    __extends(DataStats, _super);
    function DataStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrayStats" }),
        __metadata("design:type", ArrayStats)
    ], DataStats.prototype, "arrayStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryStats" }),
        __metadata("design:type", CategoryStats)
    ], DataStats.prototype, "categoryStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distinctValueCount" }),
        __metadata("design:type", String)
    ], DataStats.prototype, "distinctValueCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=float64Stats" }),
        __metadata("design:type", Float64Stats)
    ], DataStats.prototype, "float64Stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nullValueCount" }),
        __metadata("design:type", String)
    ], DataStats.prototype, "nullValueCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringStats" }),
        __metadata("design:type", StringStats)
    ], DataStats.prototype, "stringStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structStats" }),
        __metadata("design:type", StructStats)
    ], DataStats.prototype, "structStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampStats" }),
        __metadata("design:type", TimestampStats)
    ], DataStats.prototype, "timestampStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validValueCount" }),
        __metadata("design:type", String)
    ], DataStats.prototype, "validValueCount", void 0);
    return DataStats;
}(SpeakeasyBase));
export { DataStats };
