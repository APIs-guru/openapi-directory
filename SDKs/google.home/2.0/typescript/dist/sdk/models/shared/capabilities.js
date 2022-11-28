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
var Capabilities = /** @class */ (function (_super) {
    __extends(Capabilities, _super);
    function Capabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aogh_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "aoghSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assistant_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "assistantSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_hdr_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "audioHdrSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_surround_mode_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "audioSurroundModeSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ble_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "bleSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bluetooth_audio_sink_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "bluetoothAudioSinkSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bluetooth_audio_source_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "bluetoothAudioSourceSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bluetooth_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "bluetoothSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudcast_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "cloudcastSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filters_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "contentFiltersSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "displaySupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fdr_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "fdrSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hdmi_prefer_50hz_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "hdmiPrefer50hzSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hdmi_prefer_high_fps_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "hdmiPreferHighFpsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotspot_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "hotspotSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=https_setup_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "httpsSetupSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=input_management_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "inputManagementSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keep_hotspot_until_connected_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "keepHotspotUntilConnectedSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multi_user_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "multiUserSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multichannel_group_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "multichannelGroupSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multizone_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "multizoneSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=night_mode_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "nightModeSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=night_mode_supported_v2" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "nightModeSupportedV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opencast_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "opencastSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview_channel_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "previewChannelSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reboot_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "rebootSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remote_ducking_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "remoteDuckingSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=separate_tts_volume_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "separateTtsVolumeSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setup_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "setupSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sleep_mode_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "sleepModeSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "statsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system_sound_effects_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "systemSoundEffectsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_eq_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "userEqSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifi_auto_save_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "wifiAutoSaveSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifi_regulatory_domain_locked" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "wifiRegulatoryDomainLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifi_supported" }),
        __metadata("design:type", Boolean)
    ], Capabilities.prototype, "wifiSupported", void 0);
    return Capabilities;
}(SpeakeasyBase));
export { Capabilities };
