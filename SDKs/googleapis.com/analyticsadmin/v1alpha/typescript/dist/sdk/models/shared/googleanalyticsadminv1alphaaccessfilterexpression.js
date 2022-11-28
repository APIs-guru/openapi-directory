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
import { GoogleAnalyticsAdminV1alphaAccessFilter } from "./googleanalyticsadminv1alphaaccessfilter";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpressionList } from "./googleanalyticsadminv1alphaaccessfilterexpressionlist";
// GoogleAnalyticsAdminV1alphaAccessFilterExpression
/**
 * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
**/
var GoogleAnalyticsAdminV1alphaAccessFilterExpression = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAccessFilterExpression, _super);
    function GoogleAnalyticsAdminV1alphaAccessFilterExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessFilter" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessFilter)
    ], GoogleAnalyticsAdminV1alphaAccessFilterExpression.prototype, "accessFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=andGroup" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessFilterExpressionList)
    ], GoogleAnalyticsAdminV1alphaAccessFilterExpression.prototype, "andGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notExpression" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessFilterExpression)
    ], GoogleAnalyticsAdminV1alphaAccessFilterExpression.prototype, "notExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orGroup" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessFilterExpressionList)
    ], GoogleAnalyticsAdminV1alphaAccessFilterExpression.prototype, "orGroup", void 0);
    return GoogleAnalyticsAdminV1alphaAccessFilterExpression;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAccessFilterExpression };
