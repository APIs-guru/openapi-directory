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
// DestinyDestinyProgression
/**
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
**/
var DestinyDestinyProgression = /** @class */ (function (_super) {
    __extends(DestinyDestinyProgression, _super);
    function DestinyDestinyProgression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "currentProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "currentResetCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "dailyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "dailyProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "levelCap", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "nextLevelAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "progressToNextLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "progressionHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyDestinyProgression.prototype, "rewardItemStates", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyProgressionResetEntry }),
        __metadata("design:type", Array)
    ], DestinyDestinyProgression.prototype, "seasonResets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "stepIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "weeklyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyProgression.prototype, "weeklyProgress", void 0);
    return DestinyDestinyProgression;
}(SpeakeasyBase));
export { DestinyDestinyProgression };
