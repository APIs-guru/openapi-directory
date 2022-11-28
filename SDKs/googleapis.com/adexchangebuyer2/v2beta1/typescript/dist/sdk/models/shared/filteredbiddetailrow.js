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
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
// FilteredBidDetailRow
/**
 * The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
**/
var FilteredBidDetailRow = /** @class */ (function (_super) {
    __extends(FilteredBidDetailRow, _super);
    function FilteredBidDetailRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidCount" }),
        __metadata("design:type", MetricValue)
    ], FilteredBidDetailRow.prototype, "bidCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], FilteredBidDetailRow.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailId" }),
        __metadata("design:type", Number)
    ], FilteredBidDetailRow.prototype, "detailId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowDimensions" }),
        __metadata("design:type", RowDimensions)
    ], FilteredBidDetailRow.prototype, "rowDimensions", void 0);
    return FilteredBidDetailRow;
}(SpeakeasyBase));
export { FilteredBidDetailRow };
