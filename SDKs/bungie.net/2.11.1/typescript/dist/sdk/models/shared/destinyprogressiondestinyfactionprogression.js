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
// DestinyProgressionDestinyFactionProgression
/**
 * Mostly for historical purposes, we segregate Faction progressions from other progressions. This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition of the faction related to the progression.
**/
var DestinyProgressionDestinyFactionProgression = /** @class */ (function (_super) {
    __extends(DestinyProgressionDestinyFactionProgression, _super);
    function DestinyProgressionDestinyFactionProgression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "currentProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "currentResetCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "dailyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "dailyProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "factionHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "factionVendorIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "levelCap", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "nextLevelAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "progressToNextLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "progressionHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyProgressionDestinyFactionProgression.prototype, "rewardItemStates", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyProgressionResetEntry }),
        __metadata("design:type", Array)
    ], DestinyProgressionDestinyFactionProgression.prototype, "seasonResets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "stepIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "weeklyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyProgressionDestinyFactionProgression.prototype, "weeklyProgress", void 0);
    return DestinyProgressionDestinyFactionProgression;
}(SpeakeasyBase));
export { DestinyProgressionDestinyFactionProgression };
