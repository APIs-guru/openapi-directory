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
export var WebTokenEnabledFeaturesEnum;
(function (WebTokenEnabledFeaturesEnum) {
    WebTokenEnabledFeaturesEnum["FeatureUnspecified"] = "FEATURE_UNSPECIFIED";
    WebTokenEnabledFeaturesEnum["PlaySearch"] = "PLAY_SEARCH";
    WebTokenEnabledFeaturesEnum["PrivateApps"] = "PRIVATE_APPS";
    WebTokenEnabledFeaturesEnum["WebApps"] = "WEB_APPS";
    WebTokenEnabledFeaturesEnum["StoreBuilder"] = "STORE_BUILDER";
    WebTokenEnabledFeaturesEnum["ManagedConfigurations"] = "MANAGED_CONFIGURATIONS";
    WebTokenEnabledFeaturesEnum["ZeroTouchCustomerManagement"] = "ZERO_TOUCH_CUSTOMER_MANAGEMENT";
})(WebTokenEnabledFeaturesEnum || (WebTokenEnabledFeaturesEnum = {}));
export var WebTokenPermissionsEnum;
(function (WebTokenPermissionsEnum) {
    WebTokenPermissionsEnum["WebTokenPermissionUnspecified"] = "WEB_TOKEN_PERMISSION_UNSPECIFIED";
    WebTokenPermissionsEnum["ApproveApps"] = "APPROVE_APPS";
})(WebTokenPermissionsEnum || (WebTokenPermissionsEnum = {}));
// WebToken
/**
 * A web token used to access the managed Google Play iframe.
**/
var WebToken = /** @class */ (function (_super) {
    __extends(WebToken, _super);
    function WebToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledFeatures" }),
        __metadata("design:type", Array)
    ], WebToken.prototype, "enabledFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebToken.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFrameUrl" }),
        __metadata("design:type", String)
    ], WebToken.prototype, "parentFrameUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], WebToken.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebToken.prototype, "value", void 0);
    return WebToken;
}(SpeakeasyBase));
export { WebToken };
