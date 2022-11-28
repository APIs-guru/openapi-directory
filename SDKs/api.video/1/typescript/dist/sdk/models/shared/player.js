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
var PlayerAssets = /** @class */ (function (_super) {
    __extends(PlayerAssets, _super);
    function PlayerAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PlayerAssets.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], PlayerAssets.prototype, "logo", void 0);
    return PlayerAssets;
}(SpeakeasyBase));
export { PlayerAssets };
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", PlayerAssets)
    ], Player.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundBottom" }),
        __metadata("design:type", String)
    ], Player.prototype, "backgroundBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundText" }),
        __metadata("design:type", String)
    ], Player.prototype, "backgroundText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundTop" }),
        __metadata("design:type", String)
    ], Player.prototype, "backgroundTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Player.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableApi" }),
        __metadata("design:type", Boolean)
    ], Player.prototype, "enableApi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableControls" }),
        __metadata("design:type", Boolean)
    ], Player.prototype, "enableControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceAutoplay" }),
        __metadata("design:type", Boolean)
    ], Player.prototype, "forceAutoplay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceLoop" }),
        __metadata("design:type", Boolean)
    ], Player.prototype, "forceLoop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideTitle" }),
        __metadata("design:type", Boolean)
    ], Player.prototype, "hideTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Player.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkActive" }),
        __metadata("design:type", String)
    ], Player.prototype, "linkActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkHover" }),
        __metadata("design:type", String)
    ], Player.prototype, "linkHover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playerId" }),
        __metadata("design:type", String)
    ], Player.prototype, "playerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeAspect" }),
        __metadata("design:type", String)
    ], Player.prototype, "shapeAspect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeBackgroundBottom" }),
        __metadata("design:type", String)
    ], Player.prototype, "shapeBackgroundBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeBackgroundTop" }),
        __metadata("design:type", String)
    ], Player.prototype, "shapeBackgroundTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeMargin" }),
        __metadata("design:type", Number)
    ], Player.prototype, "shapeMargin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeRadius" }),
        __metadata("design:type", Number)
    ], Player.prototype, "shapeRadius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], Player.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackBackground" }),
        __metadata("design:type", String)
    ], Player.prototype, "trackBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackPlayed" }),
        __metadata("design:type", String)
    ], Player.prototype, "trackPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackUnplayed" }),
        __metadata("design:type", String)
    ], Player.prototype, "trackUnplayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Player.prototype, "updatedAt", void 0);
    return Player;
}(SpeakeasyBase));
export { Player };
