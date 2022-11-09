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
var Listing = /** @class */ (function (_super) {
    __extends(Listing, _super);
    function Listing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=askPrice" }),
        __metadata("design:type", Number)
    ], Listing.prototype, "askPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=brandName" }),
        __metadata("design:type", String)
    ], Listing.prototype, "brandName", void 0);
    __decorate([
        Metadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], Listing.prototype, "color", void 0);
    __decorate([
        Metadata({ data: "json, name=dealerID" }),
        __metadata("design:type", Number)
    ], Listing.prototype, "dealerId", void 0);
    __decorate([
        Metadata({ data: "json, name=firstSeen" }),
        __metadata("design:type", Date)
    ], Listing.prototype, "firstSeen", void 0);
    __decorate([
        Metadata({ data: "json, name=interiorColor" }),
        __metadata("design:type", String)
    ], Listing.prototype, "interiorColor", void 0);
    __decorate([
        Metadata({ data: "json, name=isNew" }),
        __metadata("design:type", Boolean)
    ], Listing.prototype, "isNew", void 0);
    __decorate([
        Metadata({ data: "json, name=lastSeen" }),
        __metadata("design:type", Date)
    ], Listing.prototype, "lastSeen", void 0);
    __decorate([
        Metadata({ data: "json, name=mileage" }),
        __metadata("design:type", Number)
    ], Listing.prototype, "mileage", void 0);
    __decorate([
        Metadata({ data: "json, name=modelName" }),
        __metadata("design:type", String)
    ], Listing.prototype, "modelName", void 0);
    __decorate([
        Metadata({ data: "json, name=msrp" }),
        __metadata("design:type", Number)
    ], Listing.prototype, "msrp", void 0);
    __decorate([
        Metadata({ data: "json, name=vin" }),
        __metadata("design:type", String)
    ], Listing.prototype, "vin", void 0);
    __decorate([
        Metadata({ data: "json, name=vinDecode" }),
        __metadata("design:type", Map)
    ], Listing.prototype, "vinDecode", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Listing.prototype, "year", void 0);
    return Listing;
}(SpeakeasyBase));
export { Listing };
