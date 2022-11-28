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
// DestinyResponsesDestinyErrorProfileInfoCard
/**
 * Basic info about the account that failed. Don't expect anything other than membership ID, Membership Type, and displayName to be populated.
**/
var DestinyResponsesDestinyErrorProfileInfoCard = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyErrorProfileInfoCard, _super);
    function DestinyResponsesDestinyErrorProfileInfoCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyErrorProfileInfoCard.prototype, "supplementalDisplayName", void 0);
    return DestinyResponsesDestinyErrorProfileInfoCard;
}(SpeakeasyBase));
export { DestinyResponsesDestinyErrorProfileInfoCard };
// DestinyResponsesDestinyErrorProfile
/**
 * If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account, this will contain as much info as we can get about the profile for your use.
 * Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
**/
var DestinyResponsesDestinyErrorProfile = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyErrorProfile, _super);
    function DestinyResponsesDestinyErrorProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyErrorProfile.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyErrorProfileInfoCard)
    ], DestinyResponsesDestinyErrorProfile.prototype, "infoCard", void 0);
    return DestinyResponsesDestinyErrorProfile;
}(SpeakeasyBase));
export { DestinyResponsesDestinyErrorProfile };
