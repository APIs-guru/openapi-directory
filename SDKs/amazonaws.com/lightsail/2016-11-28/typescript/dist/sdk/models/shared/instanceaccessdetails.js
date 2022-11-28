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
import { HostKeyAttributes } from "./hostkeyattributes";
import { PasswordData } from "./passworddata";
import { InstanceAccessProtocolEnum } from "./instanceaccessprotocolenum";
// InstanceAccessDetails
/**
 * The parameters for gaining temporary access to one of your Amazon Lightsail instances.
**/
var InstanceAccessDetails = /** @class */ (function (_super) {
    __extends(InstanceAccessDetails, _super);
    function InstanceAccessDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certKey" }),
        __metadata("design:type", String)
    ], InstanceAccessDetails.prototype, "certKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresAt" }),
        __metadata("design:type", Date)
    ], InstanceAccessDetails.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostKeys", elemType: HostKeyAttributes }),
        __metadata("design:type", Array)
    ], InstanceAccessDetails.prototype, "hostKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceName" }),
        __metadata("design:type", String)
    ], InstanceAccessDetails.prototype, "instanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], InstanceAccessDetails.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], InstanceAccessDetails.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordData" }),
        __metadata("design:type", PasswordData)
    ], InstanceAccessDetails.prototype, "passwordData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateKey" }),
        __metadata("design:type", String)
    ], InstanceAccessDetails.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], InstanceAccessDetails.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], InstanceAccessDetails.prototype, "username", void 0);
    return InstanceAccessDetails;
}(SpeakeasyBase));
export { InstanceAccessDetails };
