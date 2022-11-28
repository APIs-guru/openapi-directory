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
export var GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum;
(function (GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum) {
    GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum["PropertyTypeUnspecified"] = "PROPERTY_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum["PropertyTypeOrdinary"] = "PROPERTY_TYPE_ORDINARY";
    GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum["PropertyTypeSubproperty"] = "PROPERTY_TYPE_SUBPROPERTY";
    GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum["PropertyTypeRollup"] = "PROPERTY_TYPE_ROLLUP";
})(GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum || (GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum = {}));
// GoogleAnalyticsAdminV1alphaPropertySummary
/**
 * A virtual resource representing metadata for a GA4 property.
**/
var GoogleAnalyticsAdminV1alphaPropertySummary = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaPropertySummary, _super);
    function GoogleAnalyticsAdminV1alphaPropertySummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertySummary.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertySummary.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertySummary.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyType" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertySummary.prototype, "propertyType", void 0);
    return GoogleAnalyticsAdminV1alphaPropertySummary;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaPropertySummary };
