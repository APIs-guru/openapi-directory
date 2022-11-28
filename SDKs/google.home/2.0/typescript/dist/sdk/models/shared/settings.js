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
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_caption" }),
        __metadata("design:type", Map)
    ], Settings.prototype, "closedCaption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=control_notifications" }),
        __metadata("design:type", Number)
    ], Settings.prototype, "controlNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], Settings.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], Settings.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_standby" }),
        __metadata("design:type", Number)
    ], Settings.prototype, "networkStandby", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system_sound_effects" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "systemSoundEffects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_format" }),
        __metadata("design:type", Number)
    ], Settings.prototype, "timeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Settings.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wake_on_cast" }),
        __metadata("design:type", Number)
    ], Settings.prototype, "wakeOnCast", void 0);
    return Settings;
}(SpeakeasyBase));
export { Settings };
