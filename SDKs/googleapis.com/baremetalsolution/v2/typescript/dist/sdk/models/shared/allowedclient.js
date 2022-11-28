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
export var AllowedClientMountPermissionsEnum;
(function (AllowedClientMountPermissionsEnum) {
    AllowedClientMountPermissionsEnum["MountPermissionsUnspecified"] = "MOUNT_PERMISSIONS_UNSPECIFIED";
    AllowedClientMountPermissionsEnum["Read"] = "READ";
    AllowedClientMountPermissionsEnum["ReadWrite"] = "READ_WRITE";
})(AllowedClientMountPermissionsEnum || (AllowedClientMountPermissionsEnum = {}));
// AllowedClient
/**
 * Represents an 'access point' for the share.
**/
var AllowedClient = /** @class */ (function (_super) {
    __extends(AllowedClient, _super);
    function AllowedClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowDev" }),
        __metadata("design:type", Boolean)
    ], AllowedClient.prototype, "allowDev", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowSuid" }),
        __metadata("design:type", Boolean)
    ], AllowedClient.prototype, "allowSuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedClientsCidr" }),
        __metadata("design:type", String)
    ], AllowedClient.prototype, "allowedClientsCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mountPermissions" }),
        __metadata("design:type", String)
    ], AllowedClient.prototype, "mountPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], AllowedClient.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nfsPath" }),
        __metadata("design:type", String)
    ], AllowedClient.prototype, "nfsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noRootSquash" }),
        __metadata("design:type", Boolean)
    ], AllowedClient.prototype, "noRootSquash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareIp" }),
        __metadata("design:type", String)
    ], AllowedClient.prototype, "shareIp", void 0);
    return AllowedClient;
}(SpeakeasyBase));
export { AllowedClient };
// AllowedClientInput
/**
 * Represents an 'access point' for the share.
**/
var AllowedClientInput = /** @class */ (function (_super) {
    __extends(AllowedClientInput, _super);
    function AllowedClientInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowDev" }),
        __metadata("design:type", Boolean)
    ], AllowedClientInput.prototype, "allowDev", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowSuid" }),
        __metadata("design:type", Boolean)
    ], AllowedClientInput.prototype, "allowSuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedClientsCidr" }),
        __metadata("design:type", String)
    ], AllowedClientInput.prototype, "allowedClientsCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mountPermissions" }),
        __metadata("design:type", String)
    ], AllowedClientInput.prototype, "mountPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], AllowedClientInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noRootSquash" }),
        __metadata("design:type", Boolean)
    ], AllowedClientInput.prototype, "noRootSquash", void 0);
    return AllowedClientInput;
}(SpeakeasyBase));
export { AllowedClientInput };
