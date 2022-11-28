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
import { DestinyResponsesDestinyProfileUserInfoCard } from "./destinyresponsesdestinyprofileuserinfocard";
import { DestinyResponsesDestinyErrorProfile } from "./destinyresponsesdestinyerrorprofile";
// DestinyResponsesDestinyLinkedProfilesResponseBnetMembership
/**
 * If the requested membership had a linked Bungie.Net membership ID, this is the basic information about that BNet account.
 * I know, Tetron; I know this is mixing UserServices concerns with DestinyServices concerns. But it's so damn convenient! https://www.youtube.com/watch?v=X5R-bB-gKVI
**/
var DestinyResponsesDestinyLinkedProfilesResponseBnetMembership = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyLinkedProfilesResponseBnetMembership, _super);
    function DestinyResponsesDestinyLinkedProfilesResponseBnetMembership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyResponsesDestinyLinkedProfilesResponseBnetMembership.prototype, "supplementalDisplayName", void 0);
    return DestinyResponsesDestinyLinkedProfilesResponseBnetMembership;
}(SpeakeasyBase));
export { DestinyResponsesDestinyLinkedProfilesResponseBnetMembership };
// DestinyResponsesDestinyLinkedProfilesResponse
/**
 * I know what you seek. You seek linked accounts. Found them, you have.
 * This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
**/
var DestinyResponsesDestinyLinkedProfilesResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyLinkedProfilesResponse, _super);
    function DestinyResponsesDestinyLinkedProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyLinkedProfilesResponseBnetMembership)
    ], DestinyResponsesDestinyLinkedProfilesResponse.prototype, "bnetMembership", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyResponsesDestinyProfileUserInfoCard }),
        __metadata("design:type", Array)
    ], DestinyResponsesDestinyLinkedProfilesResponse.prototype, "profiles", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyResponsesDestinyErrorProfile }),
        __metadata("design:type", Array)
    ], DestinyResponsesDestinyLinkedProfilesResponse.prototype, "profilesWithErrors", void 0);
    return DestinyResponsesDestinyLinkedProfilesResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyLinkedProfilesResponse };
