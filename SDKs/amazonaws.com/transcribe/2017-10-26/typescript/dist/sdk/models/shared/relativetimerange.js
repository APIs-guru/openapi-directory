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
// RelativeTimeRange
/**
 * An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For example, you can specify the first half of the call. You can also specify the period of time between halfway through to three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply relative time ranges across all calls.
**/
var RelativeTimeRange = /** @class */ (function (_super) {
    __extends(RelativeTimeRange, _super);
    function RelativeTimeRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndPercentage" }),
        __metadata("design:type", Number)
    ], RelativeTimeRange.prototype, "endPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=First" }),
        __metadata("design:type", Number)
    ], RelativeTimeRange.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Last" }),
        __metadata("design:type", Number)
    ], RelativeTimeRange.prototype, "last", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPercentage" }),
        __metadata("design:type", Number)
    ], RelativeTimeRange.prototype, "startPercentage", void 0);
    return RelativeTimeRange;
}(SpeakeasyBase));
export { RelativeTimeRange };
