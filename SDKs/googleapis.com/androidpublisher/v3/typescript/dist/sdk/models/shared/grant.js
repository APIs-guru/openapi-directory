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
export var GrantAppLevelPermissionsEnum;
(function (GrantAppLevelPermissionsEnum) {
    GrantAppLevelPermissionsEnum["AppLevelPermissionUnspecified"] = "APP_LEVEL_PERMISSION_UNSPECIFIED";
    GrantAppLevelPermissionsEnum["CanAccessApp"] = "CAN_ACCESS_APP";
    GrantAppLevelPermissionsEnum["CanViewFinancialData"] = "CAN_VIEW_FINANCIAL_DATA";
    GrantAppLevelPermissionsEnum["CanManagePermissions"] = "CAN_MANAGE_PERMISSIONS";
    GrantAppLevelPermissionsEnum["CanReplyToReviews"] = "CAN_REPLY_TO_REVIEWS";
    GrantAppLevelPermissionsEnum["CanManagePublicApks"] = "CAN_MANAGE_PUBLIC_APKS";
    GrantAppLevelPermissionsEnum["CanManageTrackApks"] = "CAN_MANAGE_TRACK_APKS";
    GrantAppLevelPermissionsEnum["CanManageTrackUsers"] = "CAN_MANAGE_TRACK_USERS";
    GrantAppLevelPermissionsEnum["CanManagePublicListing"] = "CAN_MANAGE_PUBLIC_LISTING";
    GrantAppLevelPermissionsEnum["CanManageDraftApps"] = "CAN_MANAGE_DRAFT_APPS";
    GrantAppLevelPermissionsEnum["CanManageOrders"] = "CAN_MANAGE_ORDERS";
})(GrantAppLevelPermissionsEnum || (GrantAppLevelPermissionsEnum = {}));
// Grant
/**
 * An access grant resource.
**/
var Grant = /** @class */ (function (_super) {
    __extends(Grant, _super);
    function Grant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appLevelPermissions" }),
        __metadata("design:type", Array)
    ], Grant.prototype, "appLevelPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Grant.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], Grant.prototype, "packageName", void 0);
    return Grant;
}(SpeakeasyBase));
export { Grant };
