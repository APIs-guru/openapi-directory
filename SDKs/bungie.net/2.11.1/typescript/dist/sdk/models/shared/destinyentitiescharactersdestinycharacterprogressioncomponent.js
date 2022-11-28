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
import { DestinyProgressionDestinyFactionProgression } from "./destinyprogressiondestinyfactionprogression";
import { DestinyMilestonesDestinyMilestone } from "./destinymilestonesdestinymilestone";
import { DestinyDestinyProgression } from "./destinydestinyprogression";
import { DestinyQuestsDestinyQuestStatus } from "./destinyquestsdestinyqueststatus";
import { DestinyArtifactsDestinyArtifactTier } from "./destinyartifactsdestinyartifacttier";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
// DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact
/**
 * Data related to your progress on the current season's artifact that can vary per character.
**/
var DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact, _super);
    function DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact.prototype, "artifactHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact.prototype, "pointsUsed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact.prototype, "resetCount", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyArtifactsDestinyArtifactTier }),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact.prototype, "tiers", void 0);
    return DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact };
// DestinyEntitiesCharactersDestinyCharacterProgressionComponent
/**
 * This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
**/
var DestinyEntitiesCharactersDestinyCharacterProgressionComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterProgressionComponent, _super);
    function DestinyEntitiesCharactersDestinyCharacterProgressionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponent.prototype, "checklists", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyProgressionDestinyFactionProgression }),
        __metadata("design:type", Map)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponent.prototype, "factions", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestone }),
        __metadata("design:type", Map)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponent.prototype, "milestones", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyProgression }),
        __metadata("design:type", Map)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponent.prototype, "progressions", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyQuestsDestinyQuestStatus }),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponent.prototype, "quests", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponent.prototype, "seasonalArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress, elemDepth: 2 }),
        __metadata("design:type", Map)
    ], DestinyEntitiesCharactersDestinyCharacterProgressionComponent.prototype, "uninstancedItemObjectives", void 0);
    return DestinyEntitiesCharactersDestinyCharacterProgressionComponent;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterProgressionComponent };
