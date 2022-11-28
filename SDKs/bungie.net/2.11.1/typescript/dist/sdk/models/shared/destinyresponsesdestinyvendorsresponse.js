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
import { DestinyItemComponentSetOfint32 } from "./destinyitemcomponentsetofint32";
import { DestinyResponsesPersonalDestinyVendorSaleItemSetComponent } from "./destinyresponsespersonaldestinyvendorsaleitemsetcomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyComponentsVendorsDestinyVendorGroupComponent } from "./destinycomponentsvendorsdestinyvendorgroupcomponent";
import { DestinyEntitiesVendorsDestinyVendorComponent } from "./destinyentitiesvendorsdestinyvendorcomponent";
// DestinyResponsesDestinyVendorsResponseCategories
/**
 * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
 * COMPONENT TYPE: VendorCategories
**/
var DestinyResponsesDestinyVendorsResponseCategories = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorsResponseCategories, _super);
    function DestinyResponsesDestinyVendorsResponseCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorCategoriesComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyVendorsResponseCategories.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorsResponseCategories.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorsResponseCategories.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorsResponseCategories;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorsResponseCategories };
// DestinyResponsesDestinyVendorsResponseCurrencyLookups
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
var DestinyResponsesDestinyVendorsResponseCurrencyLookups = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorsResponseCurrencyLookups, _super);
    function DestinyResponsesDestinyVendorsResponseCurrencyLookups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsInventoryDestinyCurrenciesComponent)
    ], DestinyResponsesDestinyVendorsResponseCurrencyLookups.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorsResponseCurrencyLookups.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorsResponseCurrencyLookups.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorsResponseCurrencyLookups;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorsResponseCurrencyLookups };
// DestinyResponsesDestinyVendorsResponseSales
/**
 * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
 * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
 * COMPONENT TYPE: VendorSales
**/
var DestinyResponsesDestinyVendorsResponseSales = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorsResponseSales, _super);
    function DestinyResponsesDestinyVendorsResponseSales() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyResponsesPersonalDestinyVendorSaleItemSetComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyVendorsResponseSales.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorsResponseSales.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorsResponseSales.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorsResponseSales;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorsResponseSales };
// DestinyResponsesDestinyVendorsResponseStringVariables
/**
 * A map of string variable values by hash for this character context.
 * COMPONENT TYPE: StringVariables
**/
var DestinyResponsesDestinyVendorsResponseStringVariables = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorsResponseStringVariables, _super);
    function DestinyResponsesDestinyVendorsResponseStringVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsStringVariablesDestinyStringVariablesComponent)
    ], DestinyResponsesDestinyVendorsResponseStringVariables.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorsResponseStringVariables.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorsResponseStringVariables.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorsResponseStringVariables;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorsResponseStringVariables };
// DestinyResponsesDestinyVendorsResponseVendorGroups
/**
 * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
 * COMPONENT TYPE: Vendors
**/
var DestinyResponsesDestinyVendorsResponseVendorGroups = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorsResponseVendorGroups, _super);
    function DestinyResponsesDestinyVendorsResponseVendorGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsVendorsDestinyVendorGroupComponent)
    ], DestinyResponsesDestinyVendorsResponseVendorGroups.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorsResponseVendorGroups.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorsResponseVendorGroups.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorsResponseVendorGroups;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorsResponseVendorGroups };
// DestinyResponsesDestinyVendorsResponseVendors
/**
 * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
 * COMPONENT TYPE: Vendors
**/
var DestinyResponsesDestinyVendorsResponseVendors = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorsResponseVendors, _super);
    function DestinyResponsesDestinyVendorsResponseVendors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyVendorsResponseVendors.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyVendorsResponseVendors.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyVendorsResponseVendors.prototype, "privacy", void 0);
    return DestinyResponsesDestinyVendorsResponseVendors;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorsResponseVendors };
// DestinyResponsesDestinyVendorsResponse
/**
 * A response containing all of the components for all requested vendors.
**/
var DestinyResponsesDestinyVendorsResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyVendorsResponse, _super);
    function DestinyResponsesDestinyVendorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorsResponseCategories)
    ], DestinyResponsesDestinyVendorsResponse.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorsResponseCurrencyLookups)
    ], DestinyResponsesDestinyVendorsResponse.prototype, "currencyLookups", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyItemComponentSetOfint32 }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyVendorsResponse.prototype, "itemComponents", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorsResponseSales)
    ], DestinyResponsesDestinyVendorsResponse.prototype, "sales", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorsResponseStringVariables)
    ], DestinyResponsesDestinyVendorsResponse.prototype, "stringVariables", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorsResponseVendorGroups)
    ], DestinyResponsesDestinyVendorsResponse.prototype, "vendorGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyVendorsResponseVendors)
    ], DestinyResponsesDestinyVendorsResponse.prototype, "vendors", void 0);
    return DestinyResponsesDestinyVendorsResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyVendorsResponse };
