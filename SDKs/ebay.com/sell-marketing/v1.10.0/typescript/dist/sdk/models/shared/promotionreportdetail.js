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
import { Amount } from "./amount";
// PromotionReportDetail
/**
 * This type defines the fields in a promotion-level report.
**/
var PromotionReportDetail = /** @class */ (function (_super) {
    __extends(PromotionReportDetail, _super);
    function PromotionReportDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageItemDiscount" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "averageItemDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageItemRevenue" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "averageItemRevenue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageOrderDiscount" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "averageOrderDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageOrderRevenue" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "averageOrderRevenue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageOrderSize" }),
        __metadata("design:type", String)
    ], PromotionReportDetail.prototype, "averageOrderSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseSale" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "baseSale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsSoldQuantity" }),
        __metadata("design:type", Number)
    ], PromotionReportDetail.prototype, "itemsSoldQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfOrdersSold" }),
        __metadata("design:type", Number)
    ], PromotionReportDetail.prototype, "numberOfOrdersSold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentageSalesLift" }),
        __metadata("design:type", String)
    ], PromotionReportDetail.prototype, "percentageSalesLift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionHref" }),
        __metadata("design:type", String)
    ], PromotionReportDetail.prototype, "promotionHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionId" }),
        __metadata("design:type", String)
    ], PromotionReportDetail.prototype, "promotionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionReportId" }),
        __metadata("design:type", String)
    ], PromotionReportDetail.prototype, "promotionReportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionSale" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "promotionSale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionType" }),
        __metadata("design:type", String)
    ], PromotionReportDetail.prototype, "promotionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalDiscount" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "totalDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSale" }),
        __metadata("design:type", Amount)
    ], PromotionReportDetail.prototype, "totalSale", void 0);
    return PromotionReportDetail;
}(SpeakeasyBase));
export { PromotionReportDetail };
