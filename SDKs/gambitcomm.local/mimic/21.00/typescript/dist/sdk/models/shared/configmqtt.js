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
var ConfigMqtt = /** @class */ (function (_super) {
    __extends(ConfigMqtt, _super);
    function ConfigMqtt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=broker" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "broker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientid" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "clientid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_tls" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "isTls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ConfigMqtt.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls_conf_filename" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "tlsConfFilename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ConfigMqtt.prototype, "version", void 0);
    return ConfigMqtt;
}(SpeakeasyBase));
export { ConfigMqtt };
