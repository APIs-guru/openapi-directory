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
import * as shared from "../shared";
export var PostOrdersOrderRequestV2IntegratorEnum;
(function (PostOrdersOrderRequestV2IntegratorEnum) {
    PostOrdersOrderRequestV2IntegratorEnum["OneShoppingCart"] = "1ShoppingCart";
    PostOrdersOrderRequestV2IntegratorEnum["ThreedCart"] = "3dCart";
    PostOrdersOrderRequestV2IntegratorEnum["AdobeBc"] = "AdobeBC";
    PostOrdersOrderRequestV2IntegratorEnum["AmazonAu"] = "AmazonAU";
    PostOrdersOrderRequestV2IntegratorEnum["AmazonEu"] = "AmazonEU";
    PostOrdersOrderRequestV2IntegratorEnum["AmazonNa"] = "AmazonNA";
    PostOrdersOrderRequestV2IntegratorEnum["BigCommerce"] = "BigCommerce";
    PostOrdersOrderRequestV2IntegratorEnum["BrandBoom"] = "BrandBoom";
    PostOrdersOrderRequestV2IntegratorEnum["BrightPearl"] = "BrightPearl";
    PostOrdersOrderRequestV2IntegratorEnum["BuyGoods"] = "BuyGoods";
    PostOrdersOrderRequestV2IntegratorEnum["Celery"] = "Celery";
    PostOrdersOrderRequestV2IntegratorEnum["ChannelAdvisor"] = "ChannelAdvisor";
    PostOrdersOrderRequestV2IntegratorEnum["Clickbank"] = "Clickbank";
    PostOrdersOrderRequestV2IntegratorEnum["CommerceHub"] = "CommerceHub";
    PostOrdersOrderRequestV2IntegratorEnum["Custom"] = "Custom";
    PostOrdersOrderRequestV2IntegratorEnum["Demandware"] = "Demandware";
    PostOrdersOrderRequestV2IntegratorEnum["Ebay"] = "Ebay";
    PostOrdersOrderRequestV2IntegratorEnum["Ecwid"] = "Ecwid";
    PostOrdersOrderRequestV2IntegratorEnum["Etsy"] = "Etsy";
    PostOrdersOrderRequestV2IntegratorEnum["FoxyCart"] = "FoxyCart";
    PostOrdersOrderRequestV2IntegratorEnum["Goodsie"] = "Goodsie";
    PostOrdersOrderRequestV2IntegratorEnum["Infusionsoft"] = "Infusionsoft";
    PostOrdersOrderRequestV2IntegratorEnum["Konnektive"] = "Konnektive";
    PostOrdersOrderRequestV2IntegratorEnum["LimeLight"] = "LimeLight";
    PostOrdersOrderRequestV2IntegratorEnum["Linio"] = "Linio";
    PostOrdersOrderRequestV2IntegratorEnum["Linnworks"] = "Linnworks";
    PostOrdersOrderRequestV2IntegratorEnum["Magento"] = "Magento";
    PostOrdersOrderRequestV2IntegratorEnum["Netsuite"] = "Netsuite";
    PostOrdersOrderRequestV2IntegratorEnum["NewEgg"] = "NewEgg";
    PostOrdersOrderRequestV2IntegratorEnum["Nexternal"] = "Nexternal";
    PostOrdersOrderRequestV2IntegratorEnum["NuOrder"] = "NuOrder";
    PostOrdersOrderRequestV2IntegratorEnum["Opencart"] = "Opencart";
    PostOrdersOrderRequestV2IntegratorEnum["OrderWave"] = "OrderWave";
    PostOrdersOrderRequestV2IntegratorEnum["OsCommerce1"] = "osCommerce1";
    PostOrdersOrderRequestV2IntegratorEnum["Overstock"] = "Overstock";
    PostOrdersOrderRequestV2IntegratorEnum["PayPal"] = "PayPal";
    PostOrdersOrderRequestV2IntegratorEnum["PrestaShop"] = "PrestaShop";
    PostOrdersOrderRequestV2IntegratorEnum["Pricefalls"] = "Pricefalls";
    PostOrdersOrderRequestV2IntegratorEnum["Quickbooks"] = "Quickbooks";
    PostOrdersOrderRequestV2IntegratorEnum["Rakuten"] = "Rakuten";
    PostOrdersOrderRequestV2IntegratorEnum["Sears"] = "Sears";
    PostOrdersOrderRequestV2IntegratorEnum["Sellbrite"] = "Sellbrite";
    PostOrdersOrderRequestV2IntegratorEnum["SellerCloud"] = "SellerCloud";
    PostOrdersOrderRequestV2IntegratorEnum["Shipstation"] = "Shipstation";
    PostOrdersOrderRequestV2IntegratorEnum["Shopify"] = "Shopify";
    PostOrdersOrderRequestV2IntegratorEnum["Skubana"] = "Skubana";
    PostOrdersOrderRequestV2IntegratorEnum["SolidCommerce"] = "SolidCommerce";
    PostOrdersOrderRequestV2IntegratorEnum["SparkPay"] = "SparkPay";
    PostOrdersOrderRequestV2IntegratorEnum["SpreeCommerce"] = "SpreeCommerce";
    PostOrdersOrderRequestV2IntegratorEnum["SpsCommerce"] = "spsCommerce";
    PostOrdersOrderRequestV2IntegratorEnum["StitchLabs"] = "StitchLabs";
    PostOrdersOrderRequestV2IntegratorEnum["StoneEdge"] = "StoneEdge";
    PostOrdersOrderRequestV2IntegratorEnum["TradeGecko"] = "TradeGecko";
    PostOrdersOrderRequestV2IntegratorEnum["UltraCart"] = "UltraCart";
    PostOrdersOrderRequestV2IntegratorEnum["Volusion"] = "Volusion";
    PostOrdersOrderRequestV2IntegratorEnum["Vtex"] = "VTEX";
    PostOrdersOrderRequestV2IntegratorEnum["Walmart"] = "Walmart";
    PostOrdersOrderRequestV2IntegratorEnum["WooCommerce"] = "WooCommerce";
    PostOrdersOrderRequestV2IntegratorEnum["Yahoo"] = "Yahoo";
})(PostOrdersOrderRequestV2IntegratorEnum || (PostOrdersOrderRequestV2IntegratorEnum = {}));
var PostOrdersOrderRequestV2Items = /** @class */ (function (_super) {
    __extends(PostOrdersOrderRequestV2Items, _super);
    function PostOrdersOrderRequestV2Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declaredValue" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2Items.prototype, "declaredValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderRequestV2Items.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2Items.prototype, "sku", void 0);
    return PostOrdersOrderRequestV2Items;
}(SpeakeasyBase));
export { PostOrdersOrderRequestV2Items };
var PostOrdersOrderRequestV2ConsigneeNewV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderRequestV2ConsigneeNewV2, _super);
    function PostOrdersOrderRequestV2ConsigneeNewV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLocality" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "addressLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressRegion" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "addressRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2ConsigneeNewV2.prototype, "postalCode", void 0);
    return PostOrdersOrderRequestV2ConsigneeNewV2;
}(SpeakeasyBase));
export { PostOrdersOrderRequestV2ConsigneeNewV2 };
// PostOrdersOrderRequestV2Warehouse
/**
 * We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
**/
var PostOrdersOrderRequestV2Warehouse = /** @class */ (function (_super) {
    __extends(PostOrdersOrderRequestV2Warehouse, _super);
    function PostOrdersOrderRequestV2Warehouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderRequestV2Warehouse.prototype, "id", void 0);
    return PostOrdersOrderRequestV2Warehouse;
}(SpeakeasyBase));
export { PostOrdersOrderRequestV2Warehouse };
var PostOrdersOrderRequestV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderRequestV2, _super);
    function PostOrdersOrderRequestV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrator" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2.prototype, "integrator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: PostOrdersOrderRequestV2Items }),
        __metadata("design:type", Array)
    ], PostOrdersOrderRequestV2.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderRequestV2.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2.prototype, "merchantOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient" }),
        __metadata("design:type", PostOrdersOrderRequestV2ConsigneeNewV2)
    ], PostOrdersOrderRequestV2.prototype, "recipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingMethod" }),
        __metadata("design:type", String)
    ], PostOrdersOrderRequestV2.prototype, "shippingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warehouse" }),
        __metadata("design:type", PostOrdersOrderRequestV2Warehouse)
    ], PostOrdersOrderRequestV2.prototype, "warehouse", void 0);
    return PostOrdersOrderRequestV2;
}(SpeakeasyBase));
export { PostOrdersOrderRequestV2 };
var PostOrdersSecurity = /** @class */ (function (_super) {
    __extends(PostOrdersSecurity, _super);
    function PostOrdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], PostOrdersSecurity.prototype, "fdcAuth", void 0);
    return PostOrdersSecurity;
}(SpeakeasyBase));
export { PostOrdersSecurity };
var PostOrdersErrorStandardWithContextV2 = /** @class */ (function (_super) {
    __extends(PostOrdersErrorStandardWithContextV2, _super);
    function PostOrdersErrorStandardWithContextV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", Array)
    ], PostOrdersErrorStandardWithContextV2.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostOrdersErrorStandardWithContextV2.prototype, "message", void 0);
    return PostOrdersErrorStandardWithContextV2;
}(SpeakeasyBase));
export { PostOrdersErrorStandardWithContextV2 };
// PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
/**
 * Responsibility for resolving this issue
**/
var PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy, _super);
    function PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy.prototype, "name", void 0);
    return PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy };
var PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage, _super);
    function PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage.prototype, "name", void 0);
    return PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage };
var PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State, _super);
    function PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State.prototype, "name", void 0);
    return PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State };
var PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2StatusEventV2StatusTypeV2, _super);
    function PostOrdersOrderResponseV2StatusEventV2StatusTypeV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionRequiredBy" }),
        __metadata("design:type", PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "actionRequiredBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailCode" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "detailCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isClosed" }),
        __metadata("design:type", Boolean)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "isClosed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage" }),
        __metadata("design:type", PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "stage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State)
    ], PostOrdersOrderResponseV2StatusEventV2StatusTypeV2.prototype, "state", void 0);
    return PostOrdersOrderResponseV2StatusEventV2StatusTypeV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 };
var PostOrdersOrderResponseV2StatusEventV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2StatusEventV2, _super);
    function PostOrdersOrderResponseV2StatusEventV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], PostOrdersOrderResponseV2StatusEventV2.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], PostOrdersOrderResponseV2StatusEventV2.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2StatusEventV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2StatusEventV2.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", PostOrdersOrderResponseV2StatusEventV2StatusTypeV2)
    ], PostOrdersOrderResponseV2StatusEventV2.prototype, "status", void 0);
    return PostOrdersOrderResponseV2StatusEventV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2StatusEventV2 };
var PostOrdersOrderResponseV2MerchantV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2MerchantV2, _super);
    function PostOrdersOrderResponseV2MerchantV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2MerchantV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2MerchantV2.prototype, "name", void 0);
    return PostOrdersOrderResponseV2MerchantV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2MerchantV2 };
var PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2, _super);
    function PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso2" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2.prototype, "iso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2.prototype, "name", void 0);
    return PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 };
var PostOrdersOrderResponseV2ConsigneeV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2ConsigneeV2, _super);
    function PostOrdersOrderResponseV2ConsigneeV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLocality" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "addressLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressRegion" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "addressRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "iso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], PostOrdersOrderResponseV2ConsigneeV2.prototype, "updatedBy", void 0);
    return PostOrdersOrderResponseV2ConsigneeV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2ConsigneeV2 };
var PostOrdersOrderResponseV2ParentOrder = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2ParentOrder, _super);
    function PostOrdersOrderResponseV2ParentOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2ParentOrder.prototype, "id", void 0);
    return PostOrdersOrderResponseV2ParentOrder;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2ParentOrder };
var PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2, _super);
    function PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2.prototype, "id", void 0);
    return PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 };
var PostOrdersOrderResponseV2TrackingNumberV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2TrackingNumberV2, _super);
    function PostOrdersOrderResponseV2TrackingNumberV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeScanValue" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2TrackingNumberV2.prototype, "barcodeScanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrier" }),
        __metadata("design:type", PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2)
    ], PostOrdersOrderResponseV2TrackingNumberV2.prototype, "carrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2TrackingNumberV2.prototype, "value", void 0);
    return PostOrdersOrderResponseV2TrackingNumberV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2TrackingNumberV2 };
var PostOrdersOrderResponseV2WarehouseV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2WarehouseV2, _super);
    function PostOrdersOrderResponseV2WarehouseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2WarehouseV2.prototype, "id", void 0);
    return PostOrdersOrderResponseV2WarehouseV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2WarehouseV2 };
var PostOrdersOrderResponseV2 = /** @class */ (function (_super) {
    __extends(PostOrdersOrderResponseV2, _super);
    function PostOrdersOrderResponseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentStatus" }),
        __metadata("design:type", PostOrdersOrderResponseV2StatusEventV2)
    ], PostOrdersOrderResponseV2.prototype, "currentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departDate" }),
        __metadata("design:type", Date)
    ], PostOrdersOrderResponseV2.prototype, "departDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dispatchDate" }),
        __metadata("design:type", Date)
    ], PostOrdersOrderResponseV2.prototype, "dispatchDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostOrdersOrderResponseV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant" }),
        __metadata("design:type", PostOrdersOrderResponseV2MerchantV2)
    ], PostOrdersOrderResponseV2.prototype, "merchant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2.prototype, "merchantOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantShippingMethod" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2.prototype, "merchantShippingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalConsignee" }),
        __metadata("design:type", PostOrdersOrderResponseV2ConsigneeV2)
    ], PostOrdersOrderResponseV2.prototype, "originalConsignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentOrder" }),
        __metadata("design:type", PostOrdersOrderResponseV2ParentOrder)
    ], PostOrdersOrderResponseV2.prototype, "parentOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseOrderNum" }),
        __metadata("design:type", String)
    ], PostOrdersOrderResponseV2.prototype, "purchaseOrderNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordedOn" }),
        __metadata("design:type", Date)
    ], PostOrdersOrderResponseV2.prototype, "recordedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingNumbers", elemType: PostOrdersOrderResponseV2TrackingNumberV2 }),
        __metadata("design:type", Array)
    ], PostOrdersOrderResponseV2.prototype, "trackingNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validatedConsignee" }),
        __metadata("design:type", shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee)
    ], PostOrdersOrderResponseV2.prototype, "validatedConsignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warehouse" }),
        __metadata("design:type", PostOrdersOrderResponseV2WarehouseV2)
    ], PostOrdersOrderResponseV2.prototype, "warehouse", void 0);
    return PostOrdersOrderResponseV2;
}(SpeakeasyBase));
export { PostOrdersOrderResponseV2 };
var PostOrdersRequest = /** @class */ (function (_super) {
    __extends(PostOrdersRequest, _super);
    function PostOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostOrdersOrderRequestV2)
    ], PostOrdersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOrdersSecurity)
    ], PostOrdersRequest.prototype, "security", void 0);
    return PostOrdersRequest;
}(SpeakeasyBase));
export { PostOrdersRequest };
var PostOrdersResponse = /** @class */ (function (_super) {
    __extends(PostOrdersResponse, _super);
    function PostOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOrdersErrorStandardWithContextV2)
    ], PostOrdersResponse.prototype, "errorStandardWithContextV2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOrdersOrderResponseV2)
    ], PostOrdersResponse.prototype, "orderResponseV2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOrdersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneordersGetResponses404ContentApplication1jsonSchema)
    ], PostOrdersResponse.prototype, "oneordersGetResponses404ContentApplication1jsonSchema", void 0);
    return PostOrdersResponse;
}(SpeakeasyBase));
export { PostOrdersResponse };
