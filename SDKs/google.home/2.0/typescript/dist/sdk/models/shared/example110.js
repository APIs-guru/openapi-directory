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
import { ConnectedDevice } from "./connecteddevice";
import { RemoteSink } from "./remotesink";
var Example110 = /** @class */ (function (_super) {
    __extends(Example110, _super);
    function Example110() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_mode" }),
        __metadata("design:type", Number)
    ], Example110.prototype, "audioMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected_devices", elemType: ConnectedDevice }),
        __metadata("design:type", Array)
    ], Example110.prototype, "connectedDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connecting_devices" }),
        __metadata("design:type", Array)
    ], Example110.prototype, "connectingDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discovery_enabled" }),
        __metadata("design:type", Boolean)
    ], Example110.prototype, "discoveryEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remote_sink" }),
        __metadata("design:type", RemoteSink)
    ], Example110.prototype, "remoteSink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scanning_enabled" }),
        __metadata("design:type", Boolean)
    ], Example110.prototype, "scanningEnabled", void 0);
    return Example110;
}(SpeakeasyBase));
export { Example110 };
