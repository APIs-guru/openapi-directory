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
import { CreativeSpecification } from "./creativespecification";
export var CreativeRestrictionsCreativeFormatEnum;
(function (CreativeRestrictionsCreativeFormatEnum) {
    CreativeRestrictionsCreativeFormatEnum["CreativeFormatUnspecified"] = "CREATIVE_FORMAT_UNSPECIFIED";
    CreativeRestrictionsCreativeFormatEnum["Display"] = "DISPLAY";
    CreativeRestrictionsCreativeFormatEnum["Video"] = "VIDEO";
})(CreativeRestrictionsCreativeFormatEnum || (CreativeRestrictionsCreativeFormatEnum = {}));
export var CreativeRestrictionsSkippableAdTypeEnum;
(function (CreativeRestrictionsSkippableAdTypeEnum) {
    CreativeRestrictionsSkippableAdTypeEnum["SkippableAdTypeUnspecified"] = "SKIPPABLE_AD_TYPE_UNSPECIFIED";
    CreativeRestrictionsSkippableAdTypeEnum["Skippable"] = "SKIPPABLE";
    CreativeRestrictionsSkippableAdTypeEnum["InstreamSelect"] = "INSTREAM_SELECT";
    CreativeRestrictionsSkippableAdTypeEnum["NotSkippable"] = "NOT_SKIPPABLE";
})(CreativeRestrictionsSkippableAdTypeEnum || (CreativeRestrictionsSkippableAdTypeEnum = {}));
// CreativeRestrictions
/**
 * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
**/
var CreativeRestrictions = /** @class */ (function (_super) {
    __extends(CreativeRestrictions, _super);
    function CreativeRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeFormat" }),
        __metadata("design:type", String)
    ], CreativeRestrictions.prototype, "creativeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeSpecifications", elemType: CreativeSpecification }),
        __metadata("design:type", Array)
    ], CreativeRestrictions.prototype, "creativeSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippableAdType" }),
        __metadata("design:type", String)
    ], CreativeRestrictions.prototype, "skippableAdType", void 0);
    return CreativeRestrictions;
}(SpeakeasyBase));
export { CreativeRestrictions };
