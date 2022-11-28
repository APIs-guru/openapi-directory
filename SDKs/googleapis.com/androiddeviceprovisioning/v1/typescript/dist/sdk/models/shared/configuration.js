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
// Configuration
/**
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
**/
var Configuration = /** @class */ (function (_super) {
    __extends(Configuration, _super);
    function Configuration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationId" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "configurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationName" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "configurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactEmail" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactPhone" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "contactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMessage" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "customMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dpcExtras" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "dpcExtras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dpcResourcePath" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "dpcResourcePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefault" }),
        __metadata("design:type", Boolean)
    ], Configuration.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Configuration.prototype, "name", void 0);
    return Configuration;
}(SpeakeasyBase));
export { Configuration };
// ConfigurationInput
/**
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
**/
var ConfigurationInput = /** @class */ (function (_super) {
    __extends(ConfigurationInput, _super);
    function ConfigurationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], ConfigurationInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationName" }),
        __metadata("design:type", String)
    ], ConfigurationInput.prototype, "configurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactEmail" }),
        __metadata("design:type", String)
    ], ConfigurationInput.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactPhone" }),
        __metadata("design:type", String)
    ], ConfigurationInput.prototype, "contactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMessage" }),
        __metadata("design:type", String)
    ], ConfigurationInput.prototype, "customMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dpcExtras" }),
        __metadata("design:type", String)
    ], ConfigurationInput.prototype, "dpcExtras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dpcResourcePath" }),
        __metadata("design:type", String)
    ], ConfigurationInput.prototype, "dpcResourcePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefault" }),
        __metadata("design:type", Boolean)
    ], ConfigurationInput.prototype, "isDefault", void 0);
    return ConfigurationInput;
}(SpeakeasyBase));
export { ConfigurationInput };
