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
// DestinyComponentsProfilesDestinyProfileTransitoryPartyMember
/**
 * This is some bare minimum information about a party member in a Fireteam. Unfortunately, without great computational expense on our side we can only get at the data contained here. I'd like to give you a character ID for example, but we don't have it. But we do have these three pieces of information. May they help you on your quest to show meaningful data about current Fireteams.
 * Notably, we don't and can't feasibly return info on characters. If you can, try to use just the data below for your UI and purposes. Only hit us with further queries if you absolutely must know the character ID of the currently playing character. Pretty please with sugar on top.
**/
var DestinyComponentsProfilesDestinyProfileTransitoryPartyMember = /** @class */ (function (_super) {
    __extends(DestinyComponentsProfilesDestinyProfileTransitoryPartyMember, _super);
    function DestinyComponentsProfilesDestinyProfileTransitoryPartyMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyComponentsProfilesDestinyProfileTransitoryPartyMember.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryPartyMember.prototype, "emblemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryPartyMember.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsProfilesDestinyProfileTransitoryPartyMember.prototype, "status", void 0);
    return DestinyComponentsProfilesDestinyProfileTransitoryPartyMember;
}(SpeakeasyBase));
export { DestinyComponentsProfilesDestinyProfileTransitoryPartyMember };
