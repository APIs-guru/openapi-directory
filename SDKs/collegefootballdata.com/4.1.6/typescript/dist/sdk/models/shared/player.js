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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Player.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Player.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=home_city" }),
        __metadata("design:type", String)
    ], Player.prototype, "homeCity", void 0);
    __decorate([
        Metadata({ data: "json, name=home_country" }),
        __metadata("design:type", String)
    ], Player.prototype, "homeCountry", void 0);
    __decorate([
        Metadata({ data: "json, name=home_county_fips" }),
        __metadata("design:type", String)
    ], Player.prototype, "homeCountyFips", void 0);
    __decorate([
        Metadata({ data: "json, name=home_latitude" }),
        __metadata("design:type", Number)
    ], Player.prototype, "homeLatitude", void 0);
    __decorate([
        Metadata({ data: "json, name=home_longitude" }),
        __metadata("design:type", Number)
    ], Player.prototype, "homeLongitude", void 0);
    __decorate([
        Metadata({ data: "json, name=home_state" }),
        __metadata("design:type", String)
    ], Player.prototype, "homeState", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Player.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=jersey" }),
        __metadata("design:type", Number)
    ], Player.prototype, "jersey", void 0);
    __decorate([
        Metadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Player.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], Player.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=recruit_ids" }),
        __metadata("design:type", Array)
    ], Player.prototype, "recruitIds", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], Player.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], Player.prototype, "weight", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Player.prototype, "year", void 0);
    return Player;
}(SpeakeasyBase));
export { Player };
