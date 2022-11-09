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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessTypeEnum } from "./accesstypeenum";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";
var UpdatePermissionGroupRequest = /** @class */ (function (_super) {
    __extends(UpdatePermissionGroupRequest, _super);
    function UpdatePermissionGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accessType" }),
        __metadata("design:type", String)
    ], UpdatePermissionGroupRequest.prototype, "accessType", void 0);
    __decorate([
        Metadata({ data: "json, name=canCreateOrUpdateConfig" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canCreateOrUpdateConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=canCreateOrUpdateEnvironment" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canCreateOrUpdateEnvironment", void 0);
    __decorate([
        Metadata({ data: "json, name=canCreateOrUpdateSetting" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canCreateOrUpdateSetting", void 0);
    __decorate([
        Metadata({ data: "json, name=canCreateOrUpdateTag" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canCreateOrUpdateTag", void 0);
    __decorate([
        Metadata({ data: "json, name=canDeleteConfig" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canDeleteConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=canDeleteEnvironment" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canDeleteEnvironment", void 0);
    __decorate([
        Metadata({ data: "json, name=canDeleteSetting" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canDeleteSetting", void 0);
    __decorate([
        Metadata({ data: "json, name=canDeleteTag" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canDeleteTag", void 0);
    __decorate([
        Metadata({ data: "json, name=canManageIntegrations" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canManageIntegrations", void 0);
    __decorate([
        Metadata({ data: "json, name=canManageMembers" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canManageMembers", void 0);
    __decorate([
        Metadata({ data: "json, name=canManageProductPreferences" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canManageProductPreferences", void 0);
    __decorate([
        Metadata({ data: "json, name=canManageWebhook" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canManageWebhook", void 0);
    __decorate([
        Metadata({ data: "json, name=canRotateSdkKey" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canRotateSdkKey", void 0);
    __decorate([
        Metadata({ data: "json, name=canTagSetting" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canTagSetting", void 0);
    __decorate([
        Metadata({ data: "json, name=canUseExportImport" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canUseExportImport", void 0);
    __decorate([
        Metadata({ data: "json, name=canViewProductAuditLog" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canViewProductAuditLog", void 0);
    __decorate([
        Metadata({ data: "json, name=canViewProductStatistics" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canViewProductStatistics", void 0);
    __decorate([
        Metadata({ data: "json, name=canViewSdkKey" }),
        __metadata("design:type", Boolean)
    ], UpdatePermissionGroupRequest.prototype, "canViewSdkKey", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentAccesses", elemType: shared.EnvironmentAccessModel }),
        __metadata("design:type", Array)
    ], UpdatePermissionGroupRequest.prototype, "environmentAccesses", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePermissionGroupRequest.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=newEnvironmentAccessType" }),
        __metadata("design:type", String)
    ], UpdatePermissionGroupRequest.prototype, "newEnvironmentAccessType", void 0);
    return UpdatePermissionGroupRequest;
}(SpeakeasyBase));
export { UpdatePermissionGroupRequest };
