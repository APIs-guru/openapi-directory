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
import { Classification } from "./classification";
import { AppConfigDisplay } from "./appconfigdisplay";
import { AppConfigGeneral } from "./appconfiggeneral";
import { AppConfigI18n } from "./appconfigi18n";
import { AppConfigLinear } from "./appconfiglinear";
import { Navigation } from "./navigation";
import { AppConfigPlayback } from "./appconfigplayback";
import { PageSummary } from "./pagesummary";
import { AppConfigSubscription } from "./appconfigsubscription";
var AppConfig = /** @class */ (function (_super) {
    __extends(AppConfig, _super);
    function AppConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification", elemType: Classification }),
        __metadata("design:type", Map)
    ], AppConfig.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display" }),
        __metadata("design:type", AppConfigDisplay)
    ], AppConfig.prototype, "display", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=general" }),
        __metadata("design:type", AppConfigGeneral)
    ], AppConfig.prototype, "general", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i18n" }),
        __metadata("design:type", AppConfigI18n)
    ], AppConfig.prototype, "i18n", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linear" }),
        __metadata("design:type", AppConfigLinear)
    ], AppConfig.prototype, "linear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=navigation" }),
        __metadata("design:type", Navigation)
    ], AppConfig.prototype, "navigation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback" }),
        __metadata("design:type", AppConfigPlayback)
    ], AppConfig.prototype, "playback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sitemap", elemType: PageSummary }),
        __metadata("design:type", Array)
    ], AppConfig.prototype, "sitemap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription" }),
        __metadata("design:type", AppConfigSubscription)
    ], AppConfig.prototype, "subscription", void 0);
    return AppConfig;
}(SpeakeasyBase));
export { AppConfig };
