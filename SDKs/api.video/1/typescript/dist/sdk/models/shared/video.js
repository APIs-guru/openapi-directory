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
import { VideoAssets } from "./videoassets";
import { Metadata } from "./metadata";
import { VideoSource } from "./videosource";
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", VideoAssets)
    ], Video.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Video.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata", elemType: Metadata }),
        __metadata("design:type", Array)
    ], Video.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mp4Support" }),
        __metadata("design:type", Boolean)
    ], Video.prototype, "mp4Support", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panoramic" }),
        __metadata("design:type", Boolean)
    ], Video.prototype, "panoramic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playerId" }),
        __metadata("design:type", String)
    ], Video.prototype, "playerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], Video.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedAt" }),
        __metadata("design:type", String)
    ], Video.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", VideoSource)
    ], Video.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Video.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Video.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Video.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoId" }),
        __metadata("design:type", String)
    ], Video.prototype, "videoId", void 0);
    return Video;
}(SpeakeasyBase));
export { Video };
