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
var AppApiWmmEndpointsWmmMagneticFieldQueryParams = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticFieldQueryParams, _super);
    function AppApiWmmEndpointsWmmMagneticFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=altitude" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticFieldQueryParams.prototype, "altitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticFieldQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticFieldQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticFieldQueryParams.prototype, "year", void 0);
    return AppApiWmmEndpointsWmmMagneticFieldQueryParams;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticFieldQueryParams };
// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination
/**
 * The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
 *
**/
var AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination, _super);
    function AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination.prototype, "units", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination.prototype, "value", void 0);
    return AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination };
// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation
/**
 * Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
 *
**/
var AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation, _super);
    function AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation.prototype, "units", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation.prototype, "value", void 0);
    return AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation };
// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination
/**
 * Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing.
 *
**/
var AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination, _super);
    function AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination.prototype, "units", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination.prototype, "value", void 0);
    return AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination };
// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity
/**
 * Total magnetic field intensity in nano Teslas.
 *
**/
var AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity, _super);
    function AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity.prototype, "units", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity.prototype, "value", void 0);
    return AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity };
var AppApiWmmEndpointsWmmMagneticField200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticField200ApplicationJson, _super);
    function AppApiWmmEndpointsWmmMagneticField200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=declination" }),
        __metadata("design:type", AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJson.prototype, "declination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grid_variation" }),
        __metadata("design:type", AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJson.prototype, "gridVariation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inclination" }),
        __metadata("design:type", AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJson.prototype, "inclination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_intensity" }),
        __metadata("design:type", AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity)
    ], AppApiWmmEndpointsWmmMagneticField200ApplicationJson.prototype, "totalIntensity", void 0);
    return AppApiWmmEndpointsWmmMagneticField200ApplicationJson;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticField200ApplicationJson };
var AppApiWmmEndpointsWmmMagneticFieldRequest = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticFieldRequest, _super);
    function AppApiWmmEndpointsWmmMagneticFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppApiWmmEndpointsWmmMagneticFieldQueryParams)
    ], AppApiWmmEndpointsWmmMagneticFieldRequest.prototype, "queryParams", void 0);
    return AppApiWmmEndpointsWmmMagneticFieldRequest;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticFieldRequest };
var AppApiWmmEndpointsWmmMagneticFieldResponse = /** @class */ (function (_super) {
    __extends(AppApiWmmEndpointsWmmMagneticFieldResponse, _super);
    function AppApiWmmEndpointsWmmMagneticFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppApiWmmEndpointsWmmMagneticFieldResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppApiWmmEndpointsWmmMagneticFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppApiWmmEndpointsWmmMagneticField200ApplicationJson)
    ], AppApiWmmEndpointsWmmMagneticFieldResponse.prototype, "appApiWmmEndpointsWmmMagneticField200ApplicationJsonObject", void 0);
    return AppApiWmmEndpointsWmmMagneticFieldResponse;
}(SpeakeasyBase));
export { AppApiWmmEndpointsWmmMagneticFieldResponse };
