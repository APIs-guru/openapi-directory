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
// GoogleCloudApigeeV1CertInfo
/**
 * X.509 certificate as defined in RFC 5280.
**/
var GoogleCloudApigeeV1CertInfo = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1CertInfo, _super);
    function GoogleCloudApigeeV1CertInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicConstraints" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "basicConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryDate" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isValid" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "isValid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKey" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sigAlgName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "sigAlgName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CertInfo.prototype, "subjectAlternativeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validFrom" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CertInfo.prototype, "validFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1CertInfo.prototype, "version", void 0);
    return GoogleCloudApigeeV1CertInfo;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1CertInfo };
