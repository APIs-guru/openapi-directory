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
var OptIn = /** @class */ (function (_super) {
    __extends(OptIn, _super);
    function OptIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=audio_hdr" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "audioHdr", void 0);
    __decorate([
        Metadata({ data: "json, name=audio_surround_mode" }),
        __metadata("design:type", Number)
    ], OptIn.prototype, "audioSurroundMode", void 0);
    __decorate([
        Metadata({ data: "json, name=autoplay_on_signal" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "autoplayOnSignal", void 0);
    __decorate([
        Metadata({ data: "json, name=cloud_ipc" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "cloudIpc", void 0);
    __decorate([
        Metadata({ data: "json, name=hdmi_prefer_50hz" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "hdmiPrefer50hz", void 0);
    __decorate([
        Metadata({ data: "json, name=hdmi_prefer_high_fps" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "hdmiPreferHighFps", void 0);
    __decorate([
        Metadata({ data: "json, name=managed_mode" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "managedMode", void 0);
    __decorate([
        Metadata({ data: "json, name=opencast" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "opencast", void 0);
    __decorate([
        Metadata({ data: "json, name=preview_channel" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "previewChannel", void 0);
    __decorate([
        Metadata({ data: "json, name=remote_ducking" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "remoteDucking", void 0);
    __decorate([
        Metadata({ data: "json, name=stats" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "stats", void 0);
    __decorate([
        Metadata({ data: "json, name=ui_flipped" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "uiFlipped", void 0);
    __decorate([
        Metadata({ data: "json, name=wpa3_support_enabled" }),
        __metadata("design:type", Boolean)
    ], OptIn.prototype, "wpa3SupportEnabled", void 0);
    return OptIn;
}(SpeakeasyBase));
export { OptIn };
