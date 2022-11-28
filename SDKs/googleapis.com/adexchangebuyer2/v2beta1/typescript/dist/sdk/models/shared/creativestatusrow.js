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
// CreativeStatusRow
/**
 * The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
**/
var CreativeStatusRow = /** @class */ (function (_super) {
    __extends(CreativeStatusRow, _super);
    function CreativeStatusRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidCount" }),
        __metadata("design:type", MetricValue)
    ], CreativeStatusRow.prototype, "bidCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeStatusId" }),
        __metadata("design:type", Number)
    ], CreativeStatusRow.prototype, "creativeStatusId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowDimensions" }),
        __metadata("design:type", RowDimensions)
    ], CreativeStatusRow.prototype, "rowDimensions", void 0);
    return CreativeStatusRow;
}(SpeakeasyBase));
export { CreativeStatusRow };
