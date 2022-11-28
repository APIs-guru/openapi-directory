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
var TeamRecordAwayGames = /** @class */ (function (_super) {
    __extends(TeamRecordAwayGames, _super);
    function TeamRecordAwayGames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=games" }),
        __metadata("design:type", Number)
    ], TeamRecordAwayGames.prototype, "games", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=losses" }),
        __metadata("design:type", Number)
    ], TeamRecordAwayGames.prototype, "losses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ties" }),
        __metadata("design:type", Number)
    ], TeamRecordAwayGames.prototype, "ties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wins" }),
        __metadata("design:type", Number)
    ], TeamRecordAwayGames.prototype, "wins", void 0);
    return TeamRecordAwayGames;
}(SpeakeasyBase));
export { TeamRecordAwayGames };
var TeamRecordConferenceGames = /** @class */ (function (_super) {
    __extends(TeamRecordConferenceGames, _super);
    function TeamRecordConferenceGames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=games" }),
        __metadata("design:type", Number)
    ], TeamRecordConferenceGames.prototype, "games", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=losses" }),
        __metadata("design:type", Number)
    ], TeamRecordConferenceGames.prototype, "losses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ties" }),
        __metadata("design:type", Number)
    ], TeamRecordConferenceGames.prototype, "ties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wins" }),
        __metadata("design:type", Number)
    ], TeamRecordConferenceGames.prototype, "wins", void 0);
    return TeamRecordConferenceGames;
}(SpeakeasyBase));
export { TeamRecordConferenceGames };
var TeamRecordHomeGames = /** @class */ (function (_super) {
    __extends(TeamRecordHomeGames, _super);
    function TeamRecordHomeGames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=games" }),
        __metadata("design:type", Number)
    ], TeamRecordHomeGames.prototype, "games", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=losses" }),
        __metadata("design:type", Number)
    ], TeamRecordHomeGames.prototype, "losses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ties" }),
        __metadata("design:type", Number)
    ], TeamRecordHomeGames.prototype, "ties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wins" }),
        __metadata("design:type", Number)
    ], TeamRecordHomeGames.prototype, "wins", void 0);
    return TeamRecordHomeGames;
}(SpeakeasyBase));
export { TeamRecordHomeGames };
var TeamRecordTotal = /** @class */ (function (_super) {
    __extends(TeamRecordTotal, _super);
    function TeamRecordTotal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=games" }),
        __metadata("design:type", Number)
    ], TeamRecordTotal.prototype, "games", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=losses" }),
        __metadata("design:type", Number)
    ], TeamRecordTotal.prototype, "losses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ties" }),
        __metadata("design:type", Number)
    ], TeamRecordTotal.prototype, "ties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wins" }),
        __metadata("design:type", Number)
    ], TeamRecordTotal.prototype, "wins", void 0);
    return TeamRecordTotal;
}(SpeakeasyBase));
export { TeamRecordTotal };
var TeamRecord = /** @class */ (function (_super) {
    __extends(TeamRecord, _super);
    function TeamRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayGames" }),
        __metadata("design:type", TeamRecordAwayGames)
    ], TeamRecord.prototype, "awayGames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], TeamRecord.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conferenceGames" }),
        __metadata("design:type", TeamRecordConferenceGames)
    ], TeamRecord.prototype, "conferenceGames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=division" }),
        __metadata("design:type", String)
    ], TeamRecord.prototype, "division", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeGames" }),
        __metadata("design:type", TeamRecordHomeGames)
    ], TeamRecord.prototype, "homeGames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], TeamRecord.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", TeamRecordTotal)
    ], TeamRecord.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], TeamRecord.prototype, "year", void 0);
    return TeamRecord;
}(SpeakeasyBase));
export { TeamRecord };
