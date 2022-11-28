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
var TeamLocation = /** @class */ (function (_super) {
    __extends(TeamLocation, _super);
    function TeamLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", Number)
    ], TeamLocation.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], TeamLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], TeamLocation.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dome" }),
        __metadata("design:type", Boolean)
    ], TeamLocation.prototype, "dome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elevation" }),
        __metadata("design:type", Number)
    ], TeamLocation.prototype, "elevation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grass" }),
        __metadata("design:type", Boolean)
    ], TeamLocation.prototype, "grass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], TeamLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], TeamLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], TeamLocation.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], TeamLocation.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venue_id" }),
        __metadata("design:type", Number)
    ], TeamLocation.prototype, "venueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year_constructed" }),
        __metadata("design:type", Number)
    ], TeamLocation.prototype, "yearConstructed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], TeamLocation.prototype, "zip", void 0);
    return TeamLocation;
}(SpeakeasyBase));
export { TeamLocation };
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abbreviation" }),
        __metadata("design:type", String)
    ], Team.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alt_color" }),
        __metadata("design:type", String)
    ], Team.prototype, "altColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alt_name_1" }),
        __metadata("design:type", String)
    ], Team.prototype, "altName1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alt_name_2" }),
        __metadata("design:type", String)
    ], Team.prototype, "altName2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alt_name_3" }),
        __metadata("design:type", String)
    ], Team.prototype, "altName3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], Team.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], Team.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=division" }),
        __metadata("design:type", String)
    ], Team.prototype, "division", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Team.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", TeamLocation)
    ], Team.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logos" }),
        __metadata("design:type", Array)
    ], Team.prototype, "logos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mascot" }),
        __metadata("design:type", String)
    ], Team.prototype, "mascot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], Team.prototype, "school", void 0);
    return Team;
}(SpeakeasyBase));
export { Team };
