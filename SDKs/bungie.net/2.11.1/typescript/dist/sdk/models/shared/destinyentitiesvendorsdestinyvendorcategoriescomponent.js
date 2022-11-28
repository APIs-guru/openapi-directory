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
import { DestinyEntitiesVendorsDestinyVendorCategory } from "./destinyentitiesvendorsdestinyvendorcategory";
// DestinyEntitiesVendorsDestinyVendorCategoriesComponent
/**
 * A vendor can have many categories of items that they sell. This component will return the category information for available items, as well as the index into those items in the user's sale item list.
 * Note that, since both the category and items are indexes, this data is Content Version dependent. Be sure to check that your content is up to date before using this data. This is an unfortunate, but permanent, limitation of Vendor data.
**/
var DestinyEntitiesVendorsDestinyVendorCategoriesComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesVendorsDestinyVendorCategoriesComponent, _super);
    function DestinyEntitiesVendorsDestinyVendorCategoriesComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorCategory }),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorCategoriesComponent.prototype, "categories", void 0);
    return DestinyEntitiesVendorsDestinyVendorCategoriesComponent;
}(SpeakeasyBase));
export { DestinyEntitiesVendorsDestinyVendorCategoriesComponent };
