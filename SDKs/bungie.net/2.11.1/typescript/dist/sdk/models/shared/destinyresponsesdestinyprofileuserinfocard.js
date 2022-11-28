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
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
// DestinyResponsesDestinyProfileUserInfoCardPlatformSilver
/**
 * This is the silver available on this Profile across any platforms on which they have purchased silver.
 *  This is only available if you are requesting yourself.
**/
var DestinyResponsesDestinyProfileUserInfoCardPlatformSilver = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileUserInfoCardPlatformSilver, _super);
    function DestinyResponsesDestinyProfileUserInfoCardPlatformSilver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileUserInfoCardPlatformSilver.prototype, "platformSilver", void 0);
    return DestinyResponsesDestinyProfileUserInfoCardPlatformSilver;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileUserInfoCardPlatformSilver };
var DestinyResponsesDestinyProfileUserInfoCard = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileUserInfoCard, _super);
    function DestinyResponsesDestinyProfileUserInfoCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "dateLastPlayed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "isCrossSavePrimary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "isOverridden", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileUserInfoCardPlatformSilver)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "platformSilver", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "supplementalDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileUserInfoCard.prototype, "unpairedGameVersions", void 0);
    return DestinyResponsesDestinyProfileUserInfoCard;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileUserInfoCard };
