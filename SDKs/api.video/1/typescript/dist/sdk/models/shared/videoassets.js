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
// VideoAssets
/**
 * Collection of details about the video object that you can use to work with the video object.
**/
var VideoAssets = /** @class */ (function (_super) {
    __extends(VideoAssets, _super);
    function VideoAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hls" }),
        __metadata("design:type", String)
    ], VideoAssets.prototype, "hls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iframe" }),
        __metadata("design:type", String)
    ], VideoAssets.prototype, "iframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mp4" }),
        __metadata("design:type", String)
    ], VideoAssets.prototype, "mp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=player" }),
        __metadata("design:type", String)
    ], VideoAssets.prototype, "player", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail" }),
        __metadata("design:type", String)
    ], VideoAssets.prototype, "thumbnail", void 0);
    return VideoAssets;
}(SpeakeasyBase));
export { VideoAssets };
