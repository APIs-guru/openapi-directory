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
import { Aogh } from "./aogh";
import { Audio } from "./audio";
import { BuildInfo } from "./buildinfo";
import { Detail } from "./detail";
import { DeviceInfo } from "./deviceinfo";
import { Multizone } from "./multizone";
import { Net } from "./net";
import { NightModeParams } from "./nightmodeparams";
import { Opencast } from "./opencast";
import { OptIn } from "./optin";
import { Proxy } from "./proxy";
import { Settings } from "./settings";
import { Setup } from "./setup";
import { Sign } from "./sign";
import { UserEq } from "./usereq";
import { Wifi } from "./wifi";
var Example1 = /** @class */ (function (_super) {
    __extends(Example1, _super);
    function Example1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aogh" }),
        __metadata("design:type", Aogh)
    ], Example1.prototype, "aogh", void 0);
    __decorate([
        Metadata({ data: "json, name=audio" }),
        __metadata("design:type", Audio)
    ], Example1.prototype, "audio", void 0);
    __decorate([
        Metadata({ data: "json, name=build_info" }),
        __metadata("design:type", BuildInfo)
    ], Example1.prototype, "buildInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=detail" }),
        __metadata("design:type", Detail)
    ], Example1.prototype, "detail", void 0);
    __decorate([
        Metadata({ data: "json, name=device_info" }),
        __metadata("design:type", DeviceInfo)
    ], Example1.prototype, "deviceInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=multizone" }),
        __metadata("design:type", Multizone)
    ], Example1.prototype, "multizone", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Example1.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=net" }),
        __metadata("design:type", Net)
    ], Example1.prototype, "net", void 0);
    __decorate([
        Metadata({ data: "json, name=night_mode_params" }),
        __metadata("design:type", NightModeParams)
    ], Example1.prototype, "nightModeParams", void 0);
    __decorate([
        Metadata({ data: "json, name=opencast" }),
        __metadata("design:type", Opencast)
    ], Example1.prototype, "opencast", void 0);
    __decorate([
        Metadata({ data: "json, name=opt_in" }),
        __metadata("design:type", OptIn)
    ], Example1.prototype, "optIn", void 0);
    __decorate([
        Metadata({ data: "json, name=proxy" }),
        __metadata("design:type", Proxy)
    ], Example1.prototype, "proxy", void 0);
    __decorate([
        Metadata({ data: "json, name=settings" }),
        __metadata("design:type", Settings)
    ], Example1.prototype, "settings", void 0);
    __decorate([
        Metadata({ data: "json, name=setup" }),
        __metadata("design:type", Setup)
    ], Example1.prototype, "setup", void 0);
    __decorate([
        Metadata({ data: "json, name=sign" }),
        __metadata("design:type", Sign)
    ], Example1.prototype, "sign", void 0);
    __decorate([
        Metadata({ data: "json, name=user_eq" }),
        __metadata("design:type", UserEq)
    ], Example1.prototype, "userEq", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Example1.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "json, name=wifi" }),
        __metadata("design:type", Wifi)
    ], Example1.prototype, "wifi", void 0);
    return Example1;
}(SpeakeasyBase));
export { Example1 };
