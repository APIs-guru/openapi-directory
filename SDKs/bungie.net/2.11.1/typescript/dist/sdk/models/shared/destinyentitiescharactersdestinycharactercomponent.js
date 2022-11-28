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
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
// DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor
/**
 * A shortcut for getting the background color of the user's currently equipped emblem without having to do a DestinyInventoryItemDefinition lookup.
**/
var DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor, _super);
    function DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor.prototype, "alpha", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor.prototype, "blue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor.prototype, "green", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor.prototype, "red", void 0);
    return DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor };
// DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression
/**
 * The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
**/
var DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression, _super);
    function DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "currentProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "currentResetCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "dailyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "dailyProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "levelCap", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "nextLevelAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "progressToNextLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "progressionHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "rewardItemStates", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyProgressionResetEntry }),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "seasonResets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "stepIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "weeklyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression.prototype, "weeklyProgress", void 0);
    return DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression };
// DestinyEntitiesCharactersDestinyCharacterComponent
/**
 * This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
**/
var DestinyEntitiesCharactersDestinyCharacterComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterComponent, _super);
    function DestinyEntitiesCharactersDestinyCharacterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "baseCharacterLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "classHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "classType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "dateLastPlayed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "emblemBackgroundPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "emblemColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "emblemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "emblemPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "genderHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "genderType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "levelProgression", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "light", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "minutesPlayedThisSession", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "minutesPlayedTotal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "percentToNextLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "raceHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "raceType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterComponent.prototype, "titleRecordHash", void 0);
    return DestinyEntitiesCharactersDestinyCharacterComponent;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterComponent };
