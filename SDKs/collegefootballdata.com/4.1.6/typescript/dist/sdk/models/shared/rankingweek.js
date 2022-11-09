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
import * as shared from "../shared";
var RankingWeekPollsRanks = /** @class */ (function (_super) {
    __extends(RankingWeekPollsRanks, _super);
    function RankingWeekPollsRanks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], RankingWeekPollsRanks.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "json, name=firstPlaceVotes" }),
        __metadata("design:type", Number)
    ], RankingWeekPollsRanks.prototype, "firstPlaceVotes", void 0);
    __decorate([
        Metadata({ data: "json, name=points" }),
        __metadata("design:type", Number)
    ], RankingWeekPollsRanks.prototype, "points", void 0);
    __decorate([
        Metadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], RankingWeekPollsRanks.prototype, "rank", void 0);
    __decorate([
        Metadata({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], RankingWeekPollsRanks.prototype, "school", void 0);
    return RankingWeekPollsRanks;
}(SpeakeasyBase));
export { RankingWeekPollsRanks };
var RankingWeekPolls = /** @class */ (function (_super) {
    __extends(RankingWeekPolls, _super);
    function RankingWeekPolls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=poll" }),
        __metadata("design:type", String)
    ], RankingWeekPolls.prototype, "poll", void 0);
    __decorate([
        Metadata({ data: "json, name=ranks", elemType: shared.RankingWeekPollsRanks }),
        __metadata("design:type", Array)
    ], RankingWeekPolls.prototype, "ranks", void 0);
    return RankingWeekPolls;
}(SpeakeasyBase));
export { RankingWeekPolls };
var RankingWeek = /** @class */ (function (_super) {
    __extends(RankingWeek, _super);
    function RankingWeek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=polls", elemType: shared.RankingWeekPolls }),
        __metadata("design:type", Array)
    ], RankingWeek.prototype, "polls", void 0);
    __decorate([
        Metadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], RankingWeek.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "json, name=seasonType" }),
        __metadata("design:type", String)
    ], RankingWeek.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], RankingWeek.prototype, "week", void 0);
    return RankingWeek;
}(SpeakeasyBase));
export { RankingWeek };
