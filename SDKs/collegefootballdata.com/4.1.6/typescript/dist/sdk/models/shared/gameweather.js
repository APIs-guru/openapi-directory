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
var GameWeather = /** @class */ (function (_super) {
    __extends(GameWeather, _super);
    function GameWeather() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayConference" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "awayConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awayTeam" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "awayTeam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dewPoint" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "dewPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeConference" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "homeConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeTeam" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "homeTeam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humidity" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "humidity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isStartTimeTBD" }),
        __metadata("design:type", Boolean)
    ], GameWeather.prototype, "isStartTimeTbd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precipitation" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "precipitation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pressure" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "pressure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonType" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "seasonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snowfall" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "snowfall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temperature" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "temperature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venue" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "venue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venueId" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "venueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weatherCondition" }),
        __metadata("design:type", String)
    ], GameWeather.prototype, "weatherCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weatherConditionCode" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "weatherConditionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "week", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windDirection" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "windDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windSpeed" }),
        __metadata("design:type", Number)
    ], GameWeather.prototype, "windSpeed", void 0);
    return GameWeather;
}(SpeakeasyBase));
export { GameWeather };
