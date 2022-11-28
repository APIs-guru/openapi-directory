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
var ProductDto = /** @class */ (function (_super) {
    __extends(ProductDto, _super);
    function ProductDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], ProductDto.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grossUnitPrice" }),
        __metadata("design:type", Boolean)
    ], ProductDto.prototype, "grossUnitPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasDefaultVatRate" }),
        __metadata("design:type", Boolean)
    ], ProductDto.prototype, "hasDefaultVatRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProductDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stockCode" }),
        __metadata("design:type", String)
    ], ProductDto.prototype, "stockCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], ProductDto.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitPrice" }),
        __metadata("design:type", Number)
    ], ProductDto.prototype, "unitPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatAnalysisTypeId" }),
        __metadata("design:type", Number)
    ], ProductDto.prototype, "vatAnalysisTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatRateId" }),
        __metadata("design:type", Number)
    ], ProductDto.prototype, "vatRateId", void 0);
    return ProductDto;
}(SpeakeasyBase));
export { ProductDto };
