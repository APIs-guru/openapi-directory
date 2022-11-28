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
var GoogleCloudApigeeV1Developer = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1Developer, _super);
    function GoogleCloudApigeeV1Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "accessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appFamily" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "appFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apps" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Developer.prototype, "apps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Developer.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companies" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Developer.prototype, "companies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "organizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Developer.prototype, "userName", void 0);
    return GoogleCloudApigeeV1Developer;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1Developer };
var GoogleCloudApigeeV1DeveloperInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DeveloperInput, _super);
    function GoogleCloudApigeeV1DeveloperInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "accessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appFamily" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "appFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apps" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "apps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companies" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "companies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DeveloperInput.prototype, "userName", void 0);
    return GoogleCloudApigeeV1DeveloperInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DeveloperInput };
