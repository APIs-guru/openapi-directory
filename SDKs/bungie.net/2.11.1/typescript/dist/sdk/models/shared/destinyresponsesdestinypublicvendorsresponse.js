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
import { DestinyResponsesPublicDestinyVendorSaleItemSetComponent } from "./destinyresponsespublicdestinyvendorsaleitemsetcomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyComponentsVendorsDestinyVendorGroupComponent } from "./destinycomponentsvendorsdestinyvendorgroupcomponent";
import { DestinyComponentsVendorsDestinyPublicVendorComponent } from "./destinycomponentsvendorsdestinypublicvendorcomponent";
// DestinyResponsesDestinyPublicVendorsResponseCategories
/**
 * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
 * COMPONENT TYPE: VendorCategories
**/
var DestinyResponsesDestinyPublicVendorsResponseCategories = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyPublicVendorsResponseCategories, _super);
    function DestinyResponsesDestinyPublicVendorsResponseCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorCategoriesComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyPublicVendorsResponseCategories.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyPublicVendorsResponseCategories.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyPublicVendorsResponseCategories.prototype, "privacy", void 0);
    return DestinyResponsesDestinyPublicVendorsResponseCategories;
}(SpeakeasyBase));
export { DestinyResponsesDestinyPublicVendorsResponseCategories };
// DestinyResponsesDestinyPublicVendorsResponseSales
/**
 * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
 * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
 * COMPONENT TYPE: VendorSales
**/
var DestinyResponsesDestinyPublicVendorsResponseSales = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyPublicVendorsResponseSales, _super);
    function DestinyResponsesDestinyPublicVendorsResponseSales() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyResponsesPublicDestinyVendorSaleItemSetComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyPublicVendorsResponseSales.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyPublicVendorsResponseSales.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyPublicVendorsResponseSales.prototype, "privacy", void 0);
    return DestinyResponsesDestinyPublicVendorsResponseSales;
}(SpeakeasyBase));
export { DestinyResponsesDestinyPublicVendorsResponseSales };
// DestinyResponsesDestinyPublicVendorsResponseStringVariables
/**
 * A set of string variable values by hash for a public vendors context.
 * COMPONENT TYPE: StringVariables
**/
var DestinyResponsesDestinyPublicVendorsResponseStringVariables = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyPublicVendorsResponseStringVariables, _super);
    function DestinyResponsesDestinyPublicVendorsResponseStringVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsStringVariablesDestinyStringVariablesComponent)
    ], DestinyResponsesDestinyPublicVendorsResponseStringVariables.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyPublicVendorsResponseStringVariables.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyPublicVendorsResponseStringVariables.prototype, "privacy", void 0);
    return DestinyResponsesDestinyPublicVendorsResponseStringVariables;
}(SpeakeasyBase));
export { DestinyResponsesDestinyPublicVendorsResponseStringVariables };
// DestinyResponsesDestinyPublicVendorsResponseVendorGroups
/**
 * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
 * COMPONENT TYPE: Vendors
**/
var DestinyResponsesDestinyPublicVendorsResponseVendorGroups = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyPublicVendorsResponseVendorGroups, _super);
    function DestinyResponsesDestinyPublicVendorsResponseVendorGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsVendorsDestinyVendorGroupComponent)
    ], DestinyResponsesDestinyPublicVendorsResponseVendorGroups.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyPublicVendorsResponseVendorGroups.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyPublicVendorsResponseVendorGroups.prototype, "privacy", void 0);
    return DestinyResponsesDestinyPublicVendorsResponseVendorGroups;
}(SpeakeasyBase));
export { DestinyResponsesDestinyPublicVendorsResponseVendorGroups };
// DestinyResponsesDestinyPublicVendorsResponseVendors
/**
 * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
 * COMPONENT TYPE: Vendors
**/
var DestinyResponsesDestinyPublicVendorsResponseVendors = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyPublicVendorsResponseVendors, _super);
    function DestinyResponsesDestinyPublicVendorsResponseVendors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsVendorsDestinyPublicVendorComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyPublicVendorsResponseVendors.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyPublicVendorsResponseVendors.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyPublicVendorsResponseVendors.prototype, "privacy", void 0);
    return DestinyResponsesDestinyPublicVendorsResponseVendors;
}(SpeakeasyBase));
export { DestinyResponsesDestinyPublicVendorsResponseVendors };
// DestinyResponsesDestinyPublicVendorsResponse
/**
 * A response containing all valid components for the public Vendors endpoint.
 *  It is a decisively smaller subset of data compared to what we can get when we know the specific user making the request.
 *  If you want any of the other data - item details, whether or not you can buy it, etc... you'll have to call in the context of a character. I know, sad but true.
**/
var DestinyResponsesDestinyPublicVendorsResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyPublicVendorsResponse, _super);
    function DestinyResponsesDestinyPublicVendorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyPublicVendorsResponseCategories)
    ], DestinyResponsesDestinyPublicVendorsResponse.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyPublicVendorsResponseSales)
    ], DestinyResponsesDestinyPublicVendorsResponse.prototype, "sales", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyPublicVendorsResponseStringVariables)
    ], DestinyResponsesDestinyPublicVendorsResponse.prototype, "stringVariables", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyPublicVendorsResponseVendorGroups)
    ], DestinyResponsesDestinyPublicVendorsResponse.prototype, "vendorGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyPublicVendorsResponseVendors)
    ], DestinyResponsesDestinyPublicVendorsResponse.prototype, "vendors", void 0);
    return DestinyResponsesDestinyPublicVendorsResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyPublicVendorsResponse };
