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
var GameMedia = /** @class */ (function (_super) {
    __extends(GameMedia, _super);
    function GameMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayConference" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "awayConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayTeam" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "awayTeam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeConference" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "homeConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeTeam" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "homeTeam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GameMedia.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isStartTimeTBD" }),
        __metadata("design:type", Boolean)
    ], GameMedia.prototype, "isStartTimeTbd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaType" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "mediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlet" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "outlet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], GameMedia.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonType" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "seasonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GameMedia.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], GameMedia.prototype, "week", void 0);
    return GameMedia;
}(SpeakeasyBase));
export { GameMedia };
