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
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1Credential } from "./googlecloudapigeev1credential";
var GoogleCloudApigeeV1DeveloperApp = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DeveloperApp, _super);
    function GoogleCloudApigeeV1DeveloperApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiProducts" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "apiProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appFamily" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "appFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callbackUrl" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials", elemType: GoogleCloudApigeeV1Credential }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyExpiresIn" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "keyExpiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperApp.prototype, "status", void 0);
    return GoogleCloudApigeeV1DeveloperApp;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DeveloperApp };
var GoogleCloudApigeeV1DeveloperAppInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DeveloperAppInput, _super);
    function GoogleCloudApigeeV1DeveloperAppInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiProducts" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "apiProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appFamily" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "appFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callbackUrl" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyExpiresIn" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "keyExpiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperAppInput.prototype, "status", void 0);
    return GoogleCloudApigeeV1DeveloperAppInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DeveloperAppInput };
