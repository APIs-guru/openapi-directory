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
import { Account } from "./account";
import { VideoStreamingPlaylists } from "./videostreamingplaylists";
var VideoDetailsScheduledUpdate = /** @class */ (function (_super) {
    __extends(VideoDetailsScheduledUpdate, _super);
    function VideoDetailsScheduledUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", Number)
    ], VideoDetailsScheduledUpdate.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateAt" }),
        __metadata("design:type", Date)
    ], VideoDetailsScheduledUpdate.prototype, "updateAt", void 0);
    return VideoDetailsScheduledUpdate;
}(SpeakeasyBase));
export { VideoDetailsScheduledUpdate };
var VideoDetailsUserHistory = /** @class */ (function (_super) {
    __extends(VideoDetailsUserHistory, _super);
    function VideoDetailsUserHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentTime" }),
        __metadata("design:type", Number)
    ], VideoDetailsUserHistory.prototype, "currentTime", void 0);
    return VideoDetailsUserHistory;
}(SpeakeasyBase));
export { VideoDetailsUserHistory };
var VideoDetails = /** @class */ (function (_super) {
    __extends(VideoDetails, _super);
    function VideoDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", Account)
    ], VideoDetails.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blacklisted" }),
        __metadata("design:type", Boolean)
    ], VideoDetails.prototype, "blacklisted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blacklistedReason" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "blacklistedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", Object)
    ], VideoDetails.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", Object)
    ], VideoDetails.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentsEnabled" }),
        __metadata("design:type", Boolean)
    ], VideoDetails.prototype, "commentsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], VideoDetails.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptionPath" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "descriptionPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dislikes" }),
        __metadata("design:type", Number)
    ], VideoDetails.prototype, "dislikes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadEnabled" }),
        __metadata("design:type", Boolean)
    ], VideoDetails.prototype, "downloadEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], VideoDetails.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embedPath" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "embedPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files" }),
        __metadata("design:type", Array)
    ], VideoDetails.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VideoDetails.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLive" }),
        __metadata("design:type", Boolean)
    ], VideoDetails.prototype, "isLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLocal" }),
        __metadata("design:type", Boolean)
    ], VideoDetails.prototype, "isLocal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", Object)
    ], VideoDetails.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licence" }),
        __metadata("design:type", Object)
    ], VideoDetails.prototype, "licence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", Number)
    ], VideoDetails.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsfw" }),
        __metadata("design:type", Boolean)
    ], VideoDetails.prototype, "nsfw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originallyPublishedAt" }),
        __metadata("design:type", Date)
    ], VideoDetails.prototype, "originallyPublishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previewPath" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "previewPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", Object)
    ], VideoDetails.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedAt" }),
        __metadata("design:type", Date)
    ], VideoDetails.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledUpdate" }),
        __metadata("design:type", VideoDetailsScheduledUpdate)
    ], VideoDetails.prototype, "scheduledUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortUUID" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "shortUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", Object)
    ], VideoDetails.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingPlaylists", elemType: VideoStreamingPlaylists }),
        __metadata("design:type", Array)
    ], VideoDetails.prototype, "streamingPlaylists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "support", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VideoDetails.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailPath" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "thumbnailPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackerUrls" }),
        __metadata("design:type", Array)
    ], VideoDetails.prototype, "trackerUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], VideoDetails.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userHistory" }),
        __metadata("design:type", VideoDetailsUserHistory)
    ], VideoDetails.prototype, "userHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], VideoDetails.prototype, "uuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", Number)
    ], VideoDetails.prototype, "views", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitTranscoding" }),
        __metadata("design:type", Boolean)
    ], VideoDetails.prototype, "waitTranscoding", void 0);
    return VideoDetails;
}(SpeakeasyBase));
export { VideoDetails };
