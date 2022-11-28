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
// Bundle
/**
 * Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).
**/
var Bundle = /** @class */ (function (_super) {
    __extends(Bundle, _super);
    function Bundle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], Bundle.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuCount" }),
        __metadata("design:type", Number)
    ], Bundle.prototype, "cpuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSizeInGb" }),
        __metadata("design:type", Number)
    ], Bundle.prototype, "diskSizeInGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], Bundle.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], Bundle.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Bundle.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power" }),
        __metadata("design:type", Number)
    ], Bundle.prototype, "power", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], Bundle.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ramSizeInGb" }),
        __metadata("design:type", Number)
    ], Bundle.prototype, "ramSizeInGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedPlatforms" }),
        __metadata("design:type", Array)
    ], Bundle.prototype, "supportedPlatforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferPerMonthInGb" }),
        __metadata("design:type", Number)
    ], Bundle.prototype, "transferPerMonthInGb", void 0);
    return Bundle;
}(SpeakeasyBase));
export { Bundle };
