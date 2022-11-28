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
export var OrderByOrderTypeEnum;
(function (OrderByOrderTypeEnum) {
    OrderByOrderTypeEnum["OrderTypeUnspecified"] = "ORDER_TYPE_UNSPECIFIED";
    OrderByOrderTypeEnum["Value"] = "VALUE";
    OrderByOrderTypeEnum["Delta"] = "DELTA";
    OrderByOrderTypeEnum["Smart"] = "SMART";
    OrderByOrderTypeEnum["HistogramBucket"] = "HISTOGRAM_BUCKET";
    OrderByOrderTypeEnum["DimensionAsInteger"] = "DIMENSION_AS_INTEGER";
})(OrderByOrderTypeEnum || (OrderByOrderTypeEnum = {}));
export var OrderBySortOrderEnum;
(function (OrderBySortOrderEnum) {
    OrderBySortOrderEnum["SortOrderUnspecified"] = "SORT_ORDER_UNSPECIFIED";
    OrderBySortOrderEnum["Ascending"] = "ASCENDING";
    OrderBySortOrderEnum["Descending"] = "DESCENDING";
})(OrderBySortOrderEnum || (OrderBySortOrderEnum = {}));
// OrderBy
/**
 * Specifies the sorting options.
**/
var OrderBy = /** @class */ (function (_super) {
    __extends(OrderBy, _super);
    function OrderBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldName" }),
        __metadata("design:type", String)
    ], OrderBy.prototype, "fieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderType" }),
        __metadata("design:type", String)
    ], OrderBy.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], OrderBy.prototype, "sortOrder", void 0);
    return OrderBy;
}(SpeakeasyBase));
export { OrderBy };
