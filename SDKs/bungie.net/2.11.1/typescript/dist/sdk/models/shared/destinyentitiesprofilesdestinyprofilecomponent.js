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
// DestinyEntitiesProfilesDestinyProfileComponentUserInfo
/**
 * If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
**/
var DestinyEntitiesProfilesDestinyProfileComponentUserInfo = /** @class */ (function (_super) {
    __extends(DestinyEntitiesProfilesDestinyProfileComponentUserInfo, _super);
    function DestinyEntitiesProfilesDestinyProfileComponentUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesProfilesDestinyProfileComponentUserInfo.prototype, "supplementalDisplayName", void 0);
    return DestinyEntitiesProfilesDestinyProfileComponentUserInfo;
}(SpeakeasyBase));
export { DestinyEntitiesProfilesDestinyProfileComponentUserInfo };
// DestinyEntitiesProfilesDestinyProfileComponent
/**
 * The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
**/
var DestinyEntitiesProfilesDestinyProfileComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesProfilesDestinyProfileComponent, _super);
    function DestinyEntitiesProfilesDestinyProfileComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesProfilesDestinyProfileComponent.prototype, "characterIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesProfilesDestinyProfileComponent.prototype, "currentSeasonHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesProfilesDestinyProfileComponent.prototype, "currentSeasonRewardPowerCap", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyEntitiesProfilesDestinyProfileComponent.prototype, "dateLastPlayed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesProfilesDestinyProfileComponent.prototype, "seasonHashes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesProfilesDestinyProfileComponentUserInfo)
    ], DestinyEntitiesProfilesDestinyProfileComponent.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesProfilesDestinyProfileComponent.prototype, "versionsOwned", void 0);
    return DestinyEntitiesProfilesDestinyProfileComponent;
}(SpeakeasyBase));
export { DestinyEntitiesProfilesDestinyProfileComponent };
