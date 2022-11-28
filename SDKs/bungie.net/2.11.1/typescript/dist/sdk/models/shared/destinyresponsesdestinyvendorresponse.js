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
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint32anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint32anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint32anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint32anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint32anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint32anddestinyitemtalentgridcomponent";
import { DestinyEntitiesVendorsDestinyVendorSaleItemComponent } from "./destinyentitiesvendorsdestinyvendorsaleitemcomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyEntitiesVendorsDestinyVendorComponent } from "./destinyentitiesvendorsdestinyvendorcomponent";
// DestinyResponsesDestinyVendorResponseCategories
/**
 * Categories that the vendor has available, and references to the sales therein.
 * COMPONENT TYPE: VendorCategories
**/
var DestinyResponsesDestinyVendorResponseCategories = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorResponseCategories, _super);
    function DestinyResponsesDestinyVendorResponseCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesVendorsDestinyVendorCategoriesComponent)
    ], DestinyResponsesDestinyVendorResponseCategories.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorResponseCategories.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorResponseCategories.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorResponseCategories;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorResponseCategories };
// DestinyResponsesDestinyVendorResponseCurrencyLookups
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
var DestinyResponsesDestinyVendorResponseCurrencyLookups = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorResponseCurrencyLookups, _super);
    function DestinyResponsesDestinyVendorResponseCurrencyLookups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsInventoryDestinyCurrenciesComponent)
    ], DestinyResponsesDestinyVendorResponseCurrencyLookups.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorResponseCurrencyLookups.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorResponseCurrencyLookups.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorResponseCurrencyLookups;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorResponseCurrencyLookups };
// DestinyResponsesDestinyVendorResponseItemComponents
/**
 * Item components, keyed by the vendorItemIndex of the active sale items.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
var DestinyResponsesDestinyVendorResponseItemComponents = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorResponseItemComponents, _super);
    function DestinyResponsesDestinyVendorResponseItemComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "objectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemPerksComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "perks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "plugObjectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "plugStates", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemRenderComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "renderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "reusablePlugs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "sockets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemStatsComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent)
    ], DestinyResponsesDestinyVendorResponseItemComponents.prototype, "talentGrids", void 0);
    return DestinyResponsesDestinyVendorResponseItemComponents;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorResponseItemComponents };
// DestinyResponsesDestinyVendorResponseSales
/**
 * Sales, keyed by the vendorItemIndex of the item being sold.
 * COMPONENT TYPE: VendorSales
**/
var DestinyResponsesDestinyVendorResponseSales = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorResponseSales, _super);
    function DestinyResponsesDestinyVendorResponseSales() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorSaleItemComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyVendorResponseSales.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorResponseSales.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorResponseSales.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorResponseSales;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorResponseSales };
// DestinyResponsesDestinyVendorResponseStringVariables
/**
 * A map of string variable values by hash for this character context.
 * COMPONENT TYPE: StringVariables
**/
var DestinyResponsesDestinyVendorResponseStringVariables = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorResponseStringVariables, _super);
    function DestinyResponsesDestinyVendorResponseStringVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsStringVariablesDestinyStringVariablesComponent)
    ], DestinyResponsesDestinyVendorResponseStringVariables.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorResponseStringVariables.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorResponseStringVariables.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorResponseStringVariables;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorResponseStringVariables };
// DestinyResponsesDestinyVendorResponseVendor
/**
 * The base properties of the vendor.
 * COMPONENT TYPE: Vendors
**/
var DestinyResponsesDestinyVendorResponseVendor = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorResponseVendor, _super);
    function DestinyResponsesDestinyVendorResponseVendor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesVendorsDestinyVendorComponent)
    ], DestinyResponsesDestinyVendorResponseVendor.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorResponseVendor.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorResponseVendor.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorResponseVendor;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorResponseVendor };
// DestinyResponsesDestinyVendorResponse
/**
 * A response containing all of the components for a vendor.
**/
var DestinyResponsesDestinyVendorResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorResponse, _super);
    function DestinyResponsesDestinyVendorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorResponseCategories)
    ], DestinyResponsesDestinyVendorResponse.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorResponseCurrencyLookups)
    ], DestinyResponsesDestinyVendorResponse.prototype, "currencyLookups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorResponseItemComponents)
    ], DestinyResponsesDestinyVendorResponse.prototype, "itemComponents", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorResponseSales)
    ], DestinyResponsesDestinyVendorResponse.prototype, "sales", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorResponseStringVariables)
    ], DestinyResponsesDestinyVendorResponse.prototype, "stringVariables", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorResponseVendor)
    ], DestinyResponsesDestinyVendorResponse.prototype, "vendor", void 0);
    return DestinyResponsesDestinyVendorResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorResponse };
