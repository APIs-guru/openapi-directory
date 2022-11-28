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
import { JupyterServerAppSettings } from "./jupyterserverappsettings";
import { KernelGatewayAppSettings } from "./kernelgatewayappsettings";
import { SharingSettings } from "./sharingsettings";
import { TensorBoardAppSettings } from "./tensorboardappsettings";
// UserSettings
/**
 * <p>A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the <code>CreateUserProfile</code> API is called, and as <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called.</p> <p> <code>SecurityGroups</code> is aggregated when specified in both calls. For all other settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code> take precedence over those specified in <code>CreateDomain</code>.</p>
**/
var UserSettings = /** @class */ (function (_super) {
    __extends(UserSettings, _super);
    function UserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRole" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "executionRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JupyterServerAppSettings" }),
        __metadata("design:type", JupyterServerAppSettings)
    ], UserSettings.prototype, "jupyterServerAppSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KernelGatewayAppSettings" }),
        __metadata("design:type", KernelGatewayAppSettings)
    ], UserSettings.prototype, "kernelGatewayAppSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], UserSettings.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SharingSettings" }),
        __metadata("design:type", SharingSettings)
    ], UserSettings.prototype, "sharingSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TensorBoardAppSettings" }),
        __metadata("design:type", TensorBoardAppSettings)
    ], UserSettings.prototype, "tensorBoardAppSettings", void 0);
    return UserSettings;
}(SpeakeasyBase));
export { UserSettings };
