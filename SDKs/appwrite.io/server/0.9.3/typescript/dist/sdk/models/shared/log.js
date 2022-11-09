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
// Log
/**
 * Log
**/
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientCode" }),
        __metadata("design:type", String)
    ], Log.prototype, "clientCode", void 0);
    __decorate([
        Metadata({ data: "json, name=clientEngine" }),
        __metadata("design:type", String)
    ], Log.prototype, "clientEngine", void 0);
    __decorate([
        Metadata({ data: "json, name=clientEngineVersion" }),
        __metadata("design:type", String)
    ], Log.prototype, "clientEngineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], Log.prototype, "clientName", void 0);
    __decorate([
        Metadata({ data: "json, name=clientType" }),
        __metadata("design:type", String)
    ], Log.prototype, "clientType", void 0);
    __decorate([
        Metadata({ data: "json, name=clientVersion" }),
        __metadata("design:type", String)
    ], Log.prototype, "clientVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], Log.prototype, "countryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=countryName" }),
        __metadata("design:type", String)
    ], Log.prototype, "countryName", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceBrand" }),
        __metadata("design:type", String)
    ], Log.prototype, "deviceBrand", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceModel" }),
        __metadata("design:type", String)
    ], Log.prototype, "deviceModel", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceName" }),
        __metadata("design:type", String)
    ], Log.prototype, "deviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], Log.prototype, "event", void 0);
    __decorate([
        Metadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], Log.prototype, "ip", void 0);
    __decorate([
        Metadata({ data: "json, name=osCode" }),
        __metadata("design:type", String)
    ], Log.prototype, "osCode", void 0);
    __decorate([
        Metadata({ data: "json, name=osName" }),
        __metadata("design:type", String)
    ], Log.prototype, "osName", void 0);
    __decorate([
        Metadata({ data: "json, name=osVersion" }),
        __metadata("design:type", String)
    ], Log.prototype, "osVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], Log.prototype, "time", void 0);
    return Log;
}(SpeakeasyBase));
export { Log };
