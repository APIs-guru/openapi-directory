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
import { Image } from "./image";
import { User } from "./user";
// GifImages
/**
 * An object containing data for various available formats and sizes of this GIF.
**/
var GifImages = /** @class */ (function (_super) {
    __extends(GifImages, _super);
    function GifImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downsized" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "downsized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downsized_large" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "downsizedLarge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downsized_medium" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "downsizedMedium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downsized_small" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "downsizedSmall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downsized_still" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "downsizedStill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_height" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_height_downsampled" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedHeightDownsampled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_height_small" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedHeightSmall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_height_small_still" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedHeightSmallStill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_height_still" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedHeightStill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_width" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_width_downsampled" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedWidthDownsampled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_width_small" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedWidthSmall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_width_small_still" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedWidthSmallStill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_width_still" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "fixedWidthStill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=looping" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "looping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "original", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_still" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "originalStill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "preview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview_gif" }),
        __metadata("design:type", Image)
    ], GifImages.prototype, "previewGif", void 0);
    return GifImages;
}(SpeakeasyBase));
export { GifImages };
export var GifTypeEnum;
(function (GifTypeEnum) {
    GifTypeEnum["Gif"] = "gif";
})(GifTypeEnum || (GifTypeEnum = {}));
var Gif = /** @class */ (function (_super) {
    __extends(Gif, _super);
    function Gif() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitly_url" }),
        __metadata("design:type", String)
    ], Gif.prototype, "bitlyUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_url" }),
        __metadata("design:type", String)
    ], Gif.prototype, "contentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=create_datetime" }),
        __metadata("design:type", Date)
    ], Gif.prototype, "createDatetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embded_url" }),
        __metadata("design:type", String)
    ], Gif.prototype, "embdedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_tags" }),
        __metadata("design:type", Array)
    ], Gif.prototype, "featuredTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Gif.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images" }),
        __metadata("design:type", GifImages)
    ], Gif.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=import_datetime" }),
        __metadata("design:type", Date)
    ], Gif.prototype, "importDatetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", String)
    ], Gif.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Gif.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Gif.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_post_url" }),
        __metadata("design:type", String)
    ], Gif.prototype, "sourcePostUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_tld" }),
        __metadata("design:type", String)
    ], Gif.prototype, "sourceTld", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Gif.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trending_datetime" }),
        __metadata("design:type", Date)
    ], Gif.prototype, "trendingDatetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Gif.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_datetime" }),
        __metadata("design:type", Date)
    ], Gif.prototype, "updateDatetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Gif.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Gif.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Gif.prototype, "username", void 0);
    return Gif;
}(SpeakeasyBase));
export { Gif };
