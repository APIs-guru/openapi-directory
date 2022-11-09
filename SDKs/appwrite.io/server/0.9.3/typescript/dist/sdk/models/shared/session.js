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
// Session
/**
 * Session
**/
var Session = /** @class */ (function (_super) {
    __extends(Session, _super);
    function Session() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=$id" }),
        __metadata("design:type", String)
    ], Session.prototype, "dollarId", void 0);
    __decorate([
        Metadata({ data: "json, name=clientCode" }),
        __metadata("design:type", String)
    ], Session.prototype, "clientCode", void 0);
    __decorate([
        Metadata({ data: "json, name=clientEngine" }),
        __metadata("design:type", String)
    ], Session.prototype, "clientEngine", void 0);
    __decorate([
        Metadata({ data: "json, name=clientEngineVersion" }),
        __metadata("design:type", String)
    ], Session.prototype, "clientEngineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], Session.prototype, "clientName", void 0);
    __decorate([
        Metadata({ data: "json, name=clientType" }),
        __metadata("design:type", String)
    ], Session.prototype, "clientType", void 0);
    __decorate([
        Metadata({ data: "json, name=clientVersion" }),
        __metadata("design:type", String)
    ], Session.prototype, "clientVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], Session.prototype, "countryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=countryName" }),
        __metadata("design:type", String)
    ], Session.prototype, "countryName", void 0);
    __decorate([
        Metadata({ data: "json, name=current" }),
        __metadata("design:type", Boolean)
    ], Session.prototype, "current", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceBrand" }),
        __metadata("design:type", String)
    ], Session.prototype, "deviceBrand", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceModel" }),
        __metadata("design:type", String)
    ], Session.prototype, "deviceModel", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceName" }),
        __metadata("design:type", String)
    ], Session.prototype, "deviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=expire" }),
        __metadata("design:type", Number)
    ], Session.prototype, "expire", void 0);
    __decorate([
        Metadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], Session.prototype, "ip", void 0);
    __decorate([
        Metadata({ data: "json, name=osCode" }),
        __metadata("design:type", String)
    ], Session.prototype, "osCode", void 0);
    __decorate([
        Metadata({ data: "json, name=osName" }),
        __metadata("design:type", String)
    ], Session.prototype, "osName", void 0);
    __decorate([
        Metadata({ data: "json, name=osVersion" }),
        __metadata("design:type", String)
    ], Session.prototype, "osVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], Session.prototype, "provider", void 0);
    __decorate([
        Metadata({ data: "json, name=providerToken" }),
        __metadata("design:type", String)
    ], Session.prototype, "providerToken", void 0);
    __decorate([
        Metadata({ data: "json, name=providerUid" }),
        __metadata("design:type", String)
    ], Session.prototype, "providerUid", void 0);
    __decorate([
        Metadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], Session.prototype, "userId", void 0);
    return Session;
}(SpeakeasyBase));
export { Session };
