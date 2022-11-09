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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PlayWp = /** @class */ (function (_super) {
    __extends(PlayWp, _super);
    function PlayWp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=away" }),
        __metadata("design:type", String)
    ], PlayWp.prototype, "away", void 0);
    __decorate([
        Metadata({ data: "json, name=awayId" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "awayId", void 0);
    __decorate([
        Metadata({ data: "json, name=awayScore" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "awayScore", void 0);
    __decorate([
        Metadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "distance", void 0);
    __decorate([
        Metadata({ data: "json, name=down" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "down", void 0);
    __decorate([
        Metadata({ data: "json, name=gamesId" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "gamesId", void 0);
    __decorate([
        Metadata({ data: "json, name=home" }),
        __metadata("design:type", String)
    ], PlayWp.prototype, "home", void 0);
    __decorate([
        Metadata({ data: "json, name=homeBall" }),
        __metadata("design:type", Boolean)
    ], PlayWp.prototype, "homeBall", void 0);
    __decorate([
        Metadata({ data: "json, name=homeId" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "homeId", void 0);
    __decorate([
        Metadata({ data: "json, name=homeScore" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "homeScore", void 0);
    __decorate([
        Metadata({ data: "json, name=homeWinProb" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "homeWinProb", void 0);
    __decorate([
        Metadata({ data: "json, name=playId" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "playId", void 0);
    __decorate([
        Metadata({ data: "json, name=playNumber" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "playNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=playText" }),
        __metadata("design:type", String)
    ], PlayWp.prototype, "playText", void 0);
    __decorate([
        Metadata({ data: "json, name=spread" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "spread", void 0);
    __decorate([
        Metadata({ data: "json, name=timeRemaining" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "timeRemaining", void 0);
    __decorate([
        Metadata({ data: "json, name=yardLine" }),
        __metadata("design:type", Number)
    ], PlayWp.prototype, "yardLine", void 0);
    return PlayWp;
}(SpeakeasyBase));
export { PlayWp };
