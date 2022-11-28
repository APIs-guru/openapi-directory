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
var VenueLocation = /** @class */ (function (_super) {
    __extends(VenueLocation, _super);
    function VenueLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x" }),
        __metadata("design:type", Number)
    ], VenueLocation.prototype, "x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=y" }),
        __metadata("design:type", Number)
    ], VenueLocation.prototype, "y", void 0);
    return VenueLocation;
}(SpeakeasyBase));
export { VenueLocation };
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", Number)
    ], Venue.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Venue.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], Venue.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dome" }),
        __metadata("design:type", Boolean)
    ], Venue.prototype, "dome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elevation" }),
        __metadata("design:type", Number)
    ], Venue.prototype, "elevation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grass" }),
        __metadata("design:type", Boolean)
    ], Venue.prototype, "grass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Venue.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", VenueLocation)
    ], Venue.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Venue.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Venue.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Venue.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Venue.prototype, "year", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], Venue.prototype, "zip", void 0);
    return Venue;
}(SpeakeasyBase));
export { Venue };
