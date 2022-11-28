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
var Extension = /** @class */ (function (_super) {
    __extends(Extension, _super);
    function Extension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avg_rating" }),
        __metadata("design:type", Number)
    ], Extension.prototype, "avgRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension_id" }),
        __metadata("design:type", Number)
    ], Extension.prototype, "extensionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=install_count" }),
        __metadata("design:type", Number)
    ], Extension.prototype, "installCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prev_avg_rating" }),
        __metadata("design:type", Number)
    ], Extension.prototype, "prevAvgRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prev_install_count" }),
        __metadata("design:type", Number)
    ], Extension.prototype, "prevInstallCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prev_rating_count" }),
        __metadata("design:type", Number)
    ], Extension.prototype, "prevRatingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating_count" }),
        __metadata("design:type", Number)
    ], Extension.prototype, "ratingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_ts" }),
        __metadata("design:type", Date)
    ], Extension.prototype, "updateTs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Extension.prototype, "url", void 0);
    return Extension;
}(SpeakeasyBase));
export { Extension };
