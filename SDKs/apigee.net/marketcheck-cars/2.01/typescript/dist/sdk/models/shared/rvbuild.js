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
// RvBuild
/**
 * Describes the RV specification
**/
var RvBuild = /** @class */ (function (_super) {
    __extends(RvBuild, _super);
    function RvBuild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=area" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "area", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=class" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "class", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fuel_type" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gvwr" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "gvwr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=made_in" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "madeIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sleeps" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "sleeps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slideouts" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "slideouts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmission" }),
        __metadata("design:type", String)
    ], RvBuild.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], RvBuild.prototype, "year", void 0);
    return RvBuild;
}(SpeakeasyBase));
export { RvBuild };
