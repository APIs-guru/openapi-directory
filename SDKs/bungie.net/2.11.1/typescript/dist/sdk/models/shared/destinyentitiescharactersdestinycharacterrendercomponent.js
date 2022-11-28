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
import { DestinyDyeReference } from "./destinydyereference";
import { DestinyCharacterDestinyItemPeerView } from "./destinycharacterdestinyitempeerview";
// DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization
/**
 * This is actually something that Spasm.js *doesn't* do right now, and that we don't return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user's face in 3D. We'll see if we ever end up with time for that.
**/
var DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization, _super);
    function DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "decalColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "decalIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "eyeColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "face", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "featureColors", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "featureIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "hairColors", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "hairIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "lipColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "personality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "skinColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization.prototype, "wearHelmet", void 0);
    return DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization };
// DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView
/**
 * A minimal view of:
 * - Equipped items
 * - The rendering-related custom options on those equipped items
 * Combined, that should be enough to render all of the items on the equipped character.
**/
var DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView, _super);
    function DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyCharacterDestinyItemPeerView }),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView.prototype, "equipment", void 0);
    return DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView };
// DestinyEntitiesCharactersDestinyCharacterRenderComponent
/**
 * Only really useful if you're attempting to render the character's current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.
 * Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
**/
var DestinyEntitiesCharactersDestinyCharacterRenderComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesCharactersDestinyCharacterRenderComponent, _super);
    function DestinyEntitiesCharactersDestinyCharacterRenderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDyeReference }),
        __metadata("design:type", Array)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponent.prototype, "customDyes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponent.prototype, "customization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView)
    ], DestinyEntitiesCharactersDestinyCharacterRenderComponent.prototype, "peerView", void 0);
    return DestinyEntitiesCharactersDestinyCharacterRenderComponent;
}(SpeakeasyBase));
export { DestinyEntitiesCharactersDestinyCharacterRenderComponent };
