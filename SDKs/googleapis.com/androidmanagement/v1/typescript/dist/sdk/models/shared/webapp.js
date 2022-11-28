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
import { WebAppIcon } from "./webappicon";
export var WebAppDisplayModeEnum;
(function (WebAppDisplayModeEnum) {
    WebAppDisplayModeEnum["DisplayModeUnspecified"] = "DISPLAY_MODE_UNSPECIFIED";
    WebAppDisplayModeEnum["MinimalUi"] = "MINIMAL_UI";
    WebAppDisplayModeEnum["Standalone"] = "STANDALONE";
    WebAppDisplayModeEnum["FullScreen"] = "FULL_SCREEN";
})(WebAppDisplayModeEnum || (WebAppDisplayModeEnum = {}));
// WebApp
/**
 * A web app.
**/
var WebApp = /** @class */ (function (_super) {
    __extends(WebApp, _super);
    function WebApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayMode" }),
        __metadata("design:type", String)
    ], WebApp.prototype, "displayMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icons", elemType: WebAppIcon }),
        __metadata("design:type", Array)
    ], WebApp.prototype, "icons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebApp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startUrl" }),
        __metadata("design:type", String)
    ], WebApp.prototype, "startUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebApp.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionCode" }),
        __metadata("design:type", String)
    ], WebApp.prototype, "versionCode", void 0);
    return WebApp;
}(SpeakeasyBase));
export { WebApp };
