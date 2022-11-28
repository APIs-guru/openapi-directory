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
import { AccessTypeEnum } from "./accesstypeenum";
import { EnvironmentAccessModel } from "./environmentaccessmodel";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";
var CreatePermissionGroupRequest = /** @class */ (function (_super) {
    __extends(CreatePermissionGroupRequest, _super);
    function CreatePermissionGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessType" }),
        __metadata("design:type", String)
    ], CreatePermissionGroupRequest.prototype, "accessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateConfig" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canCreateOrUpdateConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateEnvironment" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canCreateOrUpdateEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateSetting" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canCreateOrUpdateSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateTag" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canCreateOrUpdateTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteConfig" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canDeleteConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteEnvironment" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canDeleteEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteSetting" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canDeleteSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDeleteTag" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canDeleteTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canManageIntegrations" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canManageIntegrations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canManageMembers" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canManageMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canManageProductPreferences" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canManageProductPreferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canManageWebhook" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canManageWebhook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRotateSdkKey" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canRotateSdkKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canTagSetting" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canTagSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canUseExportImport" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canUseExportImport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canViewProductAuditLog" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canViewProductAuditLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canViewProductStatistics" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canViewProductStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canViewSdkKey" }),
        __metadata("design:type", Boolean)
    ], CreatePermissionGroupRequest.prototype, "canViewSdkKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentAccesses", elemType: EnvironmentAccessModel }),
        __metadata("design:type", Array)
    ], CreatePermissionGroupRequest.prototype, "environmentAccesses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreatePermissionGroupRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newEnvironmentAccessType" }),
        __metadata("design:type", String)
    ], CreatePermissionGroupRequest.prototype, "newEnvironmentAccessType", void 0);
    return CreatePermissionGroupRequest;
}(SpeakeasyBase));
export { CreatePermissionGroupRequest };
