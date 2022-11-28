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
import { GoogleCloudApigeeV1TlsInfoCommonName } from "./googlecloudapigeev1tlsinfocommonname";
// GoogleCloudApigeeV1TlsInfo
/**
 * TLS configuration information for virtual hosts and TargetServers.
**/
var GoogleCloudApigeeV1TlsInfo = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1TlsInfo, _super);
    function GoogleCloudApigeeV1TlsInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ciphers" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "ciphers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientAuthEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "clientAuthEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonName" }),
        __metadata("design:type", GoogleCloudApigeeV1TlsInfoCommonName)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "commonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreValidationErrors" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "ignoreValidationErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyAlias" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "keyAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyStore" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "keyStore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocols" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trustStore" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1TlsInfo.prototype, "trustStore", void 0);
    return GoogleCloudApigeeV1TlsInfo;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1TlsInfo };
