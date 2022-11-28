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
import { Grant } from "./grant";
export var UserDeveloperAccountPermissionsEnum;
(function (UserDeveloperAccountPermissionsEnum) {
    UserDeveloperAccountPermissionsEnum["DeveloperLevelPermissionUnspecified"] = "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED";
    UserDeveloperAccountPermissionsEnum["CanSeeAllApps"] = "CAN_SEE_ALL_APPS";
    UserDeveloperAccountPermissionsEnum["CanViewFinancialDataGlobal"] = "CAN_VIEW_FINANCIAL_DATA_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanManagePermissionsGlobal"] = "CAN_MANAGE_PERMISSIONS_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanEditGamesGlobal"] = "CAN_EDIT_GAMES_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanPublishGamesGlobal"] = "CAN_PUBLISH_GAMES_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanReplyToReviewsGlobal"] = "CAN_REPLY_TO_REVIEWS_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanManagePublicApksGlobal"] = "CAN_MANAGE_PUBLIC_APKS_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanManageTrackApksGlobal"] = "CAN_MANAGE_TRACK_APKS_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanManageTrackUsersGlobal"] = "CAN_MANAGE_TRACK_USERS_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanManagePublicListingGlobal"] = "CAN_MANAGE_PUBLIC_LISTING_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanManageDraftAppsGlobal"] = "CAN_MANAGE_DRAFT_APPS_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanCreateManagedPlayAppsGlobal"] = "CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanChangeManagedPlaySettingGlobal"] = "CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL";
    UserDeveloperAccountPermissionsEnum["CanManageOrdersGlobal"] = "CAN_MANAGE_ORDERS_GLOBAL";
})(UserDeveloperAccountPermissionsEnum || (UserDeveloperAccountPermissionsEnum = {}));
export var UserAccessStateEnum;
(function (UserAccessStateEnum) {
    UserAccessStateEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    UserAccessStateEnum["Invited"] = "INVITED";
    UserAccessStateEnum["InvitationExpired"] = "INVITATION_EXPIRED";
    UserAccessStateEnum["AccessGranted"] = "ACCESS_GRANTED";
    UserAccessStateEnum["AccessExpired"] = "ACCESS_EXPIRED";
})(UserAccessStateEnum || (UserAccessStateEnum = {}));
// UserInput
/**
 * A user resource.
**/
var UserInput = /** @class */ (function (_super) {
    __extends(UserInput, _super);
    function UserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerAccountPermissions" }),
        __metadata("design:type", Array)
    ], UserInput.prototype, "developerAccountPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "name", void 0);
    return UserInput;
}(SpeakeasyBase));
export { UserInput };
// User
/**
 * A user resource.
**/
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessState" }),
        __metadata("design:type", String)
    ], User.prototype, "accessState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerAccountPermissions" }),
        __metadata("design:type", Array)
    ], User.prototype, "developerAccountPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], User.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grants", elemType: Grant }),
        __metadata("design:type", Array)
    ], User.prototype, "grants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partial" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "partial", void 0);
    return User;
}(SpeakeasyBase));
export { User };
