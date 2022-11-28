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
// DestinyChallengesDestinyChallengeStatusObjective
/**
 * The progress - including completion status - of the active challenge.
**/
var DestinyChallengesDestinyChallengeStatusObjective = /** @class */ (function (_super) {
    __extends(DestinyChallengesDestinyChallengeStatusObjective, _super);
    function DestinyChallengesDestinyChallengeStatusObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyChallengesDestinyChallengeStatusObjective.prototype, "activityHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyChallengesDestinyChallengeStatusObjective.prototype, "complete", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyChallengesDestinyChallengeStatusObjective.prototype, "completionValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyChallengesDestinyChallengeStatusObjective.prototype, "destinationHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyChallengesDestinyChallengeStatusObjective.prototype, "objectiveHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyChallengesDestinyChallengeStatusObjective.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyChallengesDestinyChallengeStatusObjective.prototype, "visible", void 0);
    return DestinyChallengesDestinyChallengeStatusObjective;
}(SpeakeasyBase));
export { DestinyChallengesDestinyChallengeStatusObjective };
// DestinyChallengesDestinyChallengeStatus
/**
 * Represents the status and other related information for a challenge that is - or was - available to a player.
 * A challenge is a bonus objective, generally tacked onto Quests or Activities, that provide additional variations on play.
**/
var DestinyChallengesDestinyChallengeStatus = /** @class */ (function (_super) {
    __extends(DestinyChallengesDestinyChallengeStatus, _super);
    function DestinyChallengesDestinyChallengeStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyChallengesDestinyChallengeStatusObjective)
    ], DestinyChallengesDestinyChallengeStatus.prototype, "objective", void 0);
    return DestinyChallengesDestinyChallengeStatus;
}(SpeakeasyBase));
export { DestinyChallengesDestinyChallengeStatus };
