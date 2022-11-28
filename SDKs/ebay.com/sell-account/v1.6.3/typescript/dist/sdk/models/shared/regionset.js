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
import { Region } from "./region";
// RegionSet
/**
 * This complex type contains the regionIncluded and regionExcluded fields, which indicate the areas to where the seller does and doesn't ship. Normally a seller ships to as many areas as possible using both DOMESTIC and INTERNATIONAL shipping options, and they don't have a need to exclude any regions from their ship-to locations. Here, there's no reason to set regionExcluded fields. However, it makes sense to set the regionExcluded field when a seller wants to exclude a small area that's within a larger area they service. For example, suppose a seller indicates they ship 'Worldwide', but for some reason must exclude a specific country, or world region. Note: Configuring the shipToLocations is tricky because the regionIncluded and regionExcluded fields are valid in different parts of the schema and their allowable settings vary upon the context. For details on setting these fields, see .
**/
var RegionSet = /** @class */ (function (_super) {
    __extends(RegionSet, _super);
    function RegionSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionExcluded", elemType: Region }),
        __metadata("design:type", Array)
    ], RegionSet.prototype, "regionExcluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionIncluded", elemType: Region }),
        __metadata("design:type", Array)
    ], RegionSet.prototype, "regionIncluded", void 0);
    return RegionSet;
}(SpeakeasyBase));
export { RegionSet };
