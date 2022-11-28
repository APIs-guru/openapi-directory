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
var GameLinesLines = /** @class */ (function (_super) {
    __extends(GameLinesLines, _super);
    function GameLinesLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayMoneyline" }),
        __metadata("design:type", Number)
    ], GameLinesLines.prototype, "awayMoneyline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedSpread" }),
        __metadata("design:type", String)
    ], GameLinesLines.prototype, "formattedSpread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeMoneyline" }),
        __metadata("design:type", Number)
    ], GameLinesLines.prototype, "homeMoneyline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overUnder" }),
        __metadata("design:type", Number)
    ], GameLinesLines.prototype, "overUnder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overUnderOpen" }),
        __metadata("design:type", Number)
    ], GameLinesLines.prototype, "overUnderOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], GameLinesLines.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spread" }),
        __metadata("design:type", Number)
    ], GameLinesLines.prototype, "spread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spreadOpen" }),
        __metadata("design:type", Number)
    ], GameLinesLines.prototype, "spreadOpen", void 0);
    return GameLinesLines;
}(SpeakeasyBase));
export { GameLinesLines };
var GameLines = /** @class */ (function (_super) {
    __extends(GameLines, _super);
    function GameLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayConference" }),
        __metadata("design:type", String)
    ], GameLines.prototype, "awayConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayScore" }),
        __metadata("design:type", Number)
    ], GameLines.prototype, "awayScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayTeam" }),
        __metadata("design:type", String)
    ], GameLines.prototype, "awayTeam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeConference" }),
        __metadata("design:type", String)
    ], GameLines.prototype, "homeConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeScore" }),
        __metadata("design:type", Number)
    ], GameLines.prototype, "homeScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeTeam" }),
        __metadata("design:type", String)
    ], GameLines.prototype, "homeTeam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GameLines.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lines", elemType: GameLinesLines }),
        __metadata("design:type", Array)
    ], GameLines.prototype, "lines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], GameLines.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonType" }),
        __metadata("design:type", String)
    ], GameLines.prototype, "seasonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], GameLines.prototype, "week", void 0);
    return GameLines;
}(SpeakeasyBase));
export { GameLines };
