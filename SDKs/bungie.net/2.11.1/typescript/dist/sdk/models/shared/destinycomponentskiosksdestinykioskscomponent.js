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
import { DestinyComponentsKiosksDestinyKioskItem } from "./destinycomponentskiosksdestinykioskitem";
// DestinyComponentsKiosksDestinyKiosksComponent
/**
 * A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether you have already acquired that item before.
 * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the individual character's DestinyCharacterKiosksComponent.
 * Note that, because this component returns vendorItemIndexes (that is to say, indexes into the Kiosk Vendor's itemList property), these results are necessarily content version dependent. Make sure that you have the latest version of the content manifest databases before using this data.
**/
var DestinyComponentsKiosksDestinyKiosksComponent = /** @class */ (function (_super) {
    __extends(DestinyComponentsKiosksDestinyKiosksComponent, _super);
    function DestinyComponentsKiosksDestinyKiosksComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsKiosksDestinyKioskItem, elemDepth: 2 }),
        __metadata("design:type", Map)
    ], DestinyComponentsKiosksDestinyKiosksComponent.prototype, "kioskItems", void 0);
    return DestinyComponentsKiosksDestinyKiosksComponent;
}(SpeakeasyBase));
export { DestinyComponentsKiosksDestinyKiosksComponent };
