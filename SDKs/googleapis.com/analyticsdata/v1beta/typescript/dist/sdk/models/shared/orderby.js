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
import { DimensionOrderBy } from "./dimensionorderby";
import { MetricOrderBy } from "./metricorderby";
import { PivotOrderBy } from "./pivotorderby";
// OrderBy
/**
 * Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
**/
var OrderBy = /** @class */ (function (_super) {
    __extends(OrderBy, _super);
    function OrderBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desc" }),
        __metadata("design:type", Boolean)
    ], OrderBy.prototype, "desc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", DimensionOrderBy)
    ], OrderBy.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", MetricOrderBy)
    ], OrderBy.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pivot" }),
        __metadata("design:type", PivotOrderBy)
    ], OrderBy.prototype, "pivot", void 0);
    return OrderBy;
}(SpeakeasyBase));
export { OrderBy };
