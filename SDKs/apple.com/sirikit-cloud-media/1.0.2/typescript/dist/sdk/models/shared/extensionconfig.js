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
export var ExtensionConfigIntentAddMediaOptEnum;
(function (ExtensionConfigIntentAddMediaOptEnum) {
    ExtensionConfigIntentAddMediaOptEnum["ResolveMediaDestination"] = "resolveMediaDestination";
    ExtensionConfigIntentAddMediaOptEnum["Confirm"] = "confirm";
})(ExtensionConfigIntentAddMediaOptEnum || (ExtensionConfigIntentAddMediaOptEnum = {}));
var ExtensionConfigIntentAddMedia = /** @class */ (function (_super) {
    __extends(ExtensionConfigIntentAddMedia, _super);
    function ExtensionConfigIntentAddMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigIntentAddMedia.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ExtensionConfigIntentAddMedia.prototype, "opt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfigIntentAddMedia.prototype, "url", void 0);
    return ExtensionConfigIntentAddMedia;
}(SpeakeasyBase));
export { ExtensionConfigIntentAddMedia };
export var ExtensionConfigIntentPlayMediaOptEnum;
(function (ExtensionConfigIntentPlayMediaOptEnum) {
    ExtensionConfigIntentPlayMediaOptEnum["ResolvePlayShuffled"] = "resolvePlayShuffled";
    ExtensionConfigIntentPlayMediaOptEnum["ResolvePlaybackRepeatMode"] = "resolvePlaybackRepeatMode";
    ExtensionConfigIntentPlayMediaOptEnum["ResolvePlaybackQueueLocation"] = "resolvePlaybackQueueLocation";
    ExtensionConfigIntentPlayMediaOptEnum["ResolveResumePlayback"] = "resolveResumePlayback";
})(ExtensionConfigIntentPlayMediaOptEnum || (ExtensionConfigIntentPlayMediaOptEnum = {}));
var ExtensionConfigIntentPlayMedia = /** @class */ (function (_super) {
    __extends(ExtensionConfigIntentPlayMedia, _super);
    function ExtensionConfigIntentPlayMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigIntentPlayMedia.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ExtensionConfigIntentPlayMedia.prototype, "opt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfigIntentPlayMedia.prototype, "url", void 0);
    return ExtensionConfigIntentPlayMedia;
}(SpeakeasyBase));
export { ExtensionConfigIntentPlayMedia };
export var ExtensionConfigIntentUpdateMediaAffinityOptEnum;
(function (ExtensionConfigIntentUpdateMediaAffinityOptEnum) {
    ExtensionConfigIntentUpdateMediaAffinityOptEnum["ResolveAffinityType"] = "resolveAffinityType";
})(ExtensionConfigIntentUpdateMediaAffinityOptEnum || (ExtensionConfigIntentUpdateMediaAffinityOptEnum = {}));
var ExtensionConfigIntentUpdateMediaAffinity = /** @class */ (function (_super) {
    __extends(ExtensionConfigIntentUpdateMediaAffinity, _super);
    function ExtensionConfigIntentUpdateMediaAffinity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigIntentUpdateMediaAffinity.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ExtensionConfigIntentUpdateMediaAffinity.prototype, "opt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfigIntentUpdateMediaAffinity.prototype, "url", void 0);
    return ExtensionConfigIntentUpdateMediaAffinity;
}(SpeakeasyBase));
export { ExtensionConfigIntentUpdateMediaAffinity };
var ExtensionConfigIntent = /** @class */ (function (_super) {
    __extends(ExtensionConfigIntent, _super);
    function ExtensionConfigIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigIntentAddMedia)
    ], ExtensionConfigIntent.prototype, "addMedia", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigIntent.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigIntentPlayMedia)
    ], ExtensionConfigIntent.prototype, "playMedia", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigIntentUpdateMediaAffinity)
    ], ExtensionConfigIntent.prototype, "updateMediaAffinity", void 0);
    return ExtensionConfigIntent;
}(SpeakeasyBase));
export { ExtensionConfigIntent };
var ExtensionConfigMediaQueuesPlayMedia = /** @class */ (function (_super) {
    __extends(ExtensionConfigMediaQueuesPlayMedia, _super);
    function ExtensionConfigMediaQueuesPlayMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigMediaQueuesPlayMedia.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfigMediaQueuesPlayMedia.prototype, "url", void 0);
    return ExtensionConfigMediaQueuesPlayMedia;
}(SpeakeasyBase));
export { ExtensionConfigMediaQueuesPlayMedia };
var ExtensionConfigMediaQueuesUpdateActivity = /** @class */ (function (_super) {
    __extends(ExtensionConfigMediaQueuesUpdateActivity, _super);
    function ExtensionConfigMediaQueuesUpdateActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigMediaQueuesUpdateActivity.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfigMediaQueuesUpdateActivity.prototype, "url", void 0);
    return ExtensionConfigMediaQueuesUpdateActivity;
}(SpeakeasyBase));
export { ExtensionConfigMediaQueuesUpdateActivity };
var ExtensionConfigMediaQueues = /** @class */ (function (_super) {
    __extends(ExtensionConfigMediaQueues, _super);
    function ExtensionConfigMediaQueues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigMediaQueues.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigMediaQueuesPlayMedia)
    ], ExtensionConfigMediaQueues.prototype, "playMedia", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigMediaQueuesUpdateActivity)
    ], ExtensionConfigMediaQueues.prototype, "updateActivity", void 0);
    return ExtensionConfigMediaQueues;
}(SpeakeasyBase));
export { ExtensionConfigMediaQueues };
var ExtensionConfigMedia = /** @class */ (function (_super) {
    __extends(ExtensionConfigMedia, _super);
    function ExtensionConfigMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigMediaQueues)
    ], ExtensionConfigMedia.prototype, "queues", void 0);
    return ExtensionConfigMedia;
}(SpeakeasyBase));
export { ExtensionConfigMedia };
var ExtensionConfig = /** @class */ (function (_super) {
    __extends(ExtensionConfig, _super);
    function ExtensionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfig.prototype, "hdr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigIntent)
    ], ExtensionConfig.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigMedia)
    ], ExtensionConfig.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfig.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfig.prototype, "version", void 0);
    return ExtensionConfig;
}(SpeakeasyBase));
export { ExtensionConfig };
