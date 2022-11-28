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
import { Price } from "./price";
import { GuaranteedFixedPriceTerms } from "./guaranteedfixedpriceterms";
import { NonGuaranteedAuctionTerms } from "./nonguaranteedauctionterms";
import { NonGuaranteedFixedPriceTerms } from "./nonguaranteedfixedpriceterms";
export var DealTermsBrandingTypeEnum;
(function (DealTermsBrandingTypeEnum) {
    DealTermsBrandingTypeEnum["BrandingTypeUnspecified"] = "BRANDING_TYPE_UNSPECIFIED";
    DealTermsBrandingTypeEnum["Branded"] = "BRANDED";
    DealTermsBrandingTypeEnum["SemiTransparent"] = "SEMI_TRANSPARENT";
})(DealTermsBrandingTypeEnum || (DealTermsBrandingTypeEnum = {}));
// DealTerms
/**
 * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
**/
var DealTerms = /** @class */ (function (_super) {
    __extends(DealTerms, _super);
    function DealTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandingType" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "brandingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" }),
        __metadata("design:type", Price)
    ], DealTerms.prototype, "estimatedGrossSpend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedImpressionsPerDay" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "estimatedImpressionsPerDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guaranteedFixedPriceTerms" }),
        __metadata("design:type", GuaranteedFixedPriceTerms)
    ], DealTerms.prototype, "guaranteedFixedPriceTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonGuaranteedAuctionTerms" }),
        __metadata("design:type", NonGuaranteedAuctionTerms)
    ], DealTerms.prototype, "nonGuaranteedAuctionTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonGuaranteedFixedPriceTerms" }),
        __metadata("design:type", NonGuaranteedFixedPriceTerms)
    ], DealTerms.prototype, "nonGuaranteedFixedPriceTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerTimeZone" }),
        __metadata("design:type", String)
    ], DealTerms.prototype, "sellerTimeZone", void 0);
    return DealTerms;
}(SpeakeasyBase));
export { DealTerms };
