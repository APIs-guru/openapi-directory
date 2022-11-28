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
var VideoUploadRequestResumable = /** @class */ (function (_super) {
    __extends(VideoUploadRequestResumable, _super);
    function VideoUploadRequestResumable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", Number)
    ], VideoUploadRequestResumable.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", Number)
    ], VideoUploadRequestResumable.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentsEnabled" }),
        __metadata("design:type", Boolean)
    ], VideoUploadRequestResumable.prototype, "commentsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VideoUploadRequestResumable.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadEnabled" }),
        __metadata("design:type", Boolean)
    ], VideoUploadRequestResumable.prototype, "downloadEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], VideoUploadRequestResumable.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], VideoUploadRequestResumable.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licence" }),
        __metadata("design:type", Number)
    ], VideoUploadRequestResumable.prototype, "licence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoUploadRequestResumable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsfw" }),
        __metadata("design:type", Boolean)
    ], VideoUploadRequestResumable.prototype, "nsfw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originallyPublishedAt" }),
        __metadata("design:type", Date)
    ], VideoUploadRequestResumable.prototype, "originallyPublishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previewfile" }),
        __metadata("design:type", Uint8Array)
    ], VideoUploadRequestResumable.prototype, "previewfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", Number)
    ], VideoUploadRequestResumable.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleUpdate" }),
        __metadata("design:type", Object)
    ], VideoUploadRequestResumable.prototype, "scheduleUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support" }),
        __metadata("design:type", String)
    ], VideoUploadRequestResumable.prototype, "support", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VideoUploadRequestResumable.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailfile" }),
        __metadata("design:type", Uint8Array)
    ], VideoUploadRequestResumable.prototype, "thumbnailfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitTranscoding" }),
        __metadata("design:type", Boolean)
    ], VideoUploadRequestResumable.prototype, "waitTranscoding", void 0);
    return VideoUploadRequestResumable;
}(SpeakeasyBase));
export { VideoUploadRequestResumable };
