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
var ConfigTftp = /** @class */ (function (_super) {
    __extends(ConfigTftp, _super);
    function ConfigTftp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cache" }),
        __metadata("design:type", Number)
    ], ConfigTftp.prototype, "cache", void 0);
    __decorate([
        Metadata({ data: "json, name=client" }),
        __metadata("design:type", String)
    ], ConfigTftp.prototype, "client", void 0);
    __decorate([
        Metadata({ data: "json, name=dstfile" }),
        __metadata("design:type", String)
    ], ConfigTftp.prototype, "dstfile", void 0);
    __decorate([
        Metadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], ConfigTftp.prototype, "mode", void 0);
    __decorate([
        Metadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ConfigTftp.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], ConfigTftp.prototype, "retries", void 0);
    __decorate([
        Metadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], ConfigTftp.prototype, "script", void 0);
    __decorate([
        Metadata({ data: "json, name=server" }),
        __metadata("design:type", String)
    ], ConfigTftp.prototype, "server", void 0);
    __decorate([
        Metadata({ data: "json, name=srcfile" }),
        __metadata("design:type", String)
    ], ConfigTftp.prototype, "srcfile", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], ConfigTftp.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=trace" }),
        __metadata("design:type", String)
    ], ConfigTftp.prototype, "trace", void 0);
    return ConfigTftp;
}(SpeakeasyBase));
export { ConfigTftp };
