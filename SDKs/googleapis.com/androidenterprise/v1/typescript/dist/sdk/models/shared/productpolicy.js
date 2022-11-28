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
import { AutoInstallPolicy } from "./autoinstallpolicy";
import { EnterpriseAuthenticationAppLinkConfig } from "./enterpriseauthenticationapplinkconfig";
import { ManagedConfiguration } from "./managedconfiguration";
export var ProductPolicyAutoUpdateModeEnum;
(function (ProductPolicyAutoUpdateModeEnum) {
    ProductPolicyAutoUpdateModeEnum["AutoUpdateModeUnspecified"] = "autoUpdateModeUnspecified";
    ProductPolicyAutoUpdateModeEnum["AutoUpdateDefault"] = "autoUpdateDefault";
    ProductPolicyAutoUpdateModeEnum["AutoUpdatePostponed"] = "autoUpdatePostponed";
    ProductPolicyAutoUpdateModeEnum["AutoUpdateHighPriority"] = "autoUpdateHighPriority";
})(ProductPolicyAutoUpdateModeEnum || (ProductPolicyAutoUpdateModeEnum = {}));
export var ProductPolicyTracksEnum;
(function (ProductPolicyTracksEnum) {
    ProductPolicyTracksEnum["AppTrackUnspecified"] = "appTrackUnspecified";
    ProductPolicyTracksEnum["Production"] = "production";
    ProductPolicyTracksEnum["Beta"] = "beta";
    ProductPolicyTracksEnum["Alpha"] = "alpha";
})(ProductPolicyTracksEnum || (ProductPolicyTracksEnum = {}));
// ProductPolicy
/**
 * The policy for a product.
**/
var ProductPolicy = /** @class */ (function (_super) {
    __extends(ProductPolicy, _super);
    function ProductPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoInstallPolicy" }),
        __metadata("design:type", AutoInstallPolicy)
    ], ProductPolicy.prototype, "autoInstallPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoUpdateMode" }),
        __metadata("design:type", String)
    ], ProductPolicy.prototype, "autoUpdateMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterpriseAuthenticationAppLinkConfigs", elemType: EnterpriseAuthenticationAppLinkConfig }),
        __metadata("design:type", Array)
    ], ProductPolicy.prototype, "enterpriseAuthenticationAppLinkConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedConfiguration" }),
        __metadata("design:type", ManagedConfiguration)
    ], ProductPolicy.prototype, "managedConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], ProductPolicy.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackIds" }),
        __metadata("design:type", Array)
    ], ProductPolicy.prototype, "trackIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracks" }),
        __metadata("design:type", Array)
    ], ProductPolicy.prototype, "tracks", void 0);
    return ProductPolicy;
}(SpeakeasyBase));
export { ProductPolicy };
