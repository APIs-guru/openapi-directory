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
export var ActionEntityActionEnum;
(function (ActionEntityActionEnum) {
    ActionEntityActionEnum["Create"] = "create";
    ActionEntityActionEnum["Read"] = "read";
    ActionEntityActionEnum["Update"] = "update";
    ActionEntityActionEnum["Destroy"] = "destroy";
    ActionEntityActionEnum["Move"] = "move";
    ActionEntityActionEnum["Login"] = "login";
    ActionEntityActionEnum["Failedlogin"] = "failedlogin";
    ActionEntityActionEnum["Copy"] = "copy";
    ActionEntityActionEnum["UserCreate"] = "user_create";
    ActionEntityActionEnum["UserUpdate"] = "user_update";
    ActionEntityActionEnum["UserDestroy"] = "user_destroy";
    ActionEntityActionEnum["GroupCreate"] = "group_create";
    ActionEntityActionEnum["GroupUpdate"] = "group_update";
    ActionEntityActionEnum["GroupDestroy"] = "group_destroy";
    ActionEntityActionEnum["PermissionCreate"] = "permission_create";
    ActionEntityActionEnum["PermissionDestroy"] = "permission_destroy";
    ActionEntityActionEnum["ApiKeyCreate"] = "api_key_create";
    ActionEntityActionEnum["ApiKeyUpdate"] = "api_key_update";
    ActionEntityActionEnum["ApiKeyDestroy"] = "api_key_destroy";
})(ActionEntityActionEnum || (ActionEntityActionEnum = {}));
export var ActionEntityFailureTypeEnum;
(function (ActionEntityFailureTypeEnum) {
    ActionEntityFailureTypeEnum["ExpiredTrial"] = "expired_trial";
    ActionEntityFailureTypeEnum["AccountOverdue"] = "account_overdue";
    ActionEntityFailureTypeEnum["LockedOut"] = "locked_out";
    ActionEntityFailureTypeEnum["IpMismatch"] = "ip_mismatch";
    ActionEntityFailureTypeEnum["PasswordMismatch"] = "password_mismatch";
    ActionEntityFailureTypeEnum["SiteMismatch"] = "site_mismatch";
    ActionEntityFailureTypeEnum["UsernameNotFound"] = "username_not_found";
    ActionEntityFailureTypeEnum["None"] = "none";
    ActionEntityFailureTypeEnum["NoFtpPermission"] = "no_ftp_permission";
    ActionEntityFailureTypeEnum["NoWebPermission"] = "no_web_permission";
    ActionEntityFailureTypeEnum["NoDirectory"] = "no_directory";
    ActionEntityFailureTypeEnum["ErrnoEnoent"] = "errno_enoent";
    ActionEntityFailureTypeEnum["NoSftpPermission"] = "no_sftp_permission";
    ActionEntityFailureTypeEnum["NoDavPermission"] = "no_dav_permission";
    ActionEntityFailureTypeEnum["NoRestapiPermission"] = "no_restapi_permission";
    ActionEntityFailureTypeEnum["KeyMismatch"] = "key_mismatch";
    ActionEntityFailureTypeEnum["RegionMismatch"] = "region_mismatch";
    ActionEntityFailureTypeEnum["ExpiredAccess"] = "expired_access";
    ActionEntityFailureTypeEnum["DesktopIpMismatch"] = "desktop_ip_mismatch";
    ActionEntityFailureTypeEnum["DesktopApiKeyNotUsedQuicklyEnough"] = "desktop_api_key_not_used_quickly_enough";
    ActionEntityFailureTypeEnum["Disabled"] = "disabled";
    ActionEntityFailureTypeEnum["CountryMismatch"] = "country_mismatch";
})(ActionEntityFailureTypeEnum || (ActionEntityFailureTypeEnum = {}));
export var ActionEntityInterfaceEnum;
(function (ActionEntityInterfaceEnum) {
    ActionEntityInterfaceEnum["Web"] = "web";
    ActionEntityInterfaceEnum["Ftp"] = "ftp";
    ActionEntityInterfaceEnum["Robot"] = "robot";
    ActionEntityInterfaceEnum["Jsapi"] = "jsapi";
    ActionEntityInterfaceEnum["Webdesktopapi"] = "webdesktopapi";
    ActionEntityInterfaceEnum["Sftp"] = "sftp";
    ActionEntityInterfaceEnum["Dav"] = "dav";
    ActionEntityInterfaceEnum["Desktop"] = "desktop";
    ActionEntityInterfaceEnum["Restapi"] = "restapi";
    ActionEntityInterfaceEnum["Scim"] = "scim";
    ActionEntityInterfaceEnum["Office"] = "office";
    ActionEntityInterfaceEnum["Mobile"] = "mobile";
})(ActionEntityInterfaceEnum || (ActionEntityInterfaceEnum = {}));
// ActionEntity
/**
 * List site full action history.
**/
var ActionEntity = /** @class */ (function (_super) {
    __extends(ActionEntity, _super);
    function ActionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "display", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failure_type" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "failureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ActionEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interface" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "interface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], ActionEntity.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], ActionEntity.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ActionEntity.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=when" }),
        __metadata("design:type", Date)
    ], ActionEntity.prototype, "when", void 0);
    return ActionEntity;
}(SpeakeasyBase));
export { ActionEntity };
