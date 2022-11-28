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
import { DestinyComponentsProfilesDestinyProfileTransitoryPartyMember } from "./destinycomponentsprofilesdestinyprofiletransitorypartymember";
import { DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry } from "./destinycomponentsprofilesdestinyprofiletransitorytrackingentry";
// DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity
/**
 * If you are in an activity, this is some transitory info about the activity currently being played.
**/
var DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity = /** @class */ (function (_super) {
    __extends(DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity, _super);
    function DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity.prototype, "highestOpposingFactionScore", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity.prototype, "numberOfOpponents", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity.prototype, "numberOfPlayers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity.prototype, "startTime", void 0);
    return DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity;
}(SpeakeasyBase));
export { DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity };
// DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability
/**
 * Information about whether and what might prevent you from joining this person on a fireteam.
**/
var DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability = /** @class */ (function (_super) {
    __extends(DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability, _super);
    function DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability.prototype, "closedReasons", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability.prototype, "openSlots", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability.prototype, "privacySetting", void 0);
    return DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability;
}(SpeakeasyBase));
export { DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability };
// DestinyComponentsProfilesDestinyProfileTransitoryComponent
/**
 * This is an experimental set of data that Bungie considers to be "transitory" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.
 * This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
**/
var DestinyComponentsProfilesDestinyProfileTransitoryComponent = /** @class */ (function (_super) {
    __extends(DestinyComponentsProfilesDestinyProfileTransitoryComponent, _super);
    function DestinyComponentsProfilesDestinyProfileTransitoryComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponent.prototype, "currentActivity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponent.prototype, "joinability", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponent.prototype, "lastOrbitedDestinationHash", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsProfilesDestinyProfileTransitoryPartyMember }),
        __metadata("design:type", Array)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponent.prototype, "partyMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry }),
        __metadata("design:type", Array)
    ], DestinyComponentsProfilesDestinyProfileTransitoryComponent.prototype, "tracking", void 0);
    return DestinyComponentsProfilesDestinyProfileTransitoryComponent;
}(SpeakeasyBase));
export { DestinyComponentsProfilesDestinyProfileTransitoryComponent };
