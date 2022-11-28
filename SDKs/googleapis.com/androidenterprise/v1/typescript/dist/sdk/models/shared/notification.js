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
import { AppRestrictionsSchemaChangeEvent } from "./apprestrictionsschemachangeevent";
import { AppUpdateEvent } from "./appupdateevent";
import { DeviceReportUpdateEvent } from "./devicereportupdateevent";
import { InstallFailureEvent } from "./installfailureevent";
import { NewDeviceEvent } from "./newdeviceevent";
import { NewPermissionsEvent } from "./newpermissionsevent";
import { ProductApprovalEvent } from "./productapprovalevent";
import { ProductAvailabilityChangeEvent } from "./productavailabilitychangeevent";
export var NotificationNotificationTypeEnum;
(function (NotificationNotificationTypeEnum) {
    NotificationNotificationTypeEnum["Unknown"] = "unknown";
    NotificationNotificationTypeEnum["TestNotification"] = "testNotification";
    NotificationNotificationTypeEnum["ProductApproval"] = "productApproval";
    NotificationNotificationTypeEnum["InstallFailure"] = "installFailure";
    NotificationNotificationTypeEnum["AppUpdate"] = "appUpdate";
    NotificationNotificationTypeEnum["NewPermissions"] = "newPermissions";
    NotificationNotificationTypeEnum["AppRestricionsSchemaChange"] = "appRestricionsSchemaChange";
    NotificationNotificationTypeEnum["ProductAvailabilityChange"] = "productAvailabilityChange";
    NotificationNotificationTypeEnum["NewDevice"] = "newDevice";
    NotificationNotificationTypeEnum["DeviceReportUpdate"] = "deviceReportUpdate";
})(NotificationNotificationTypeEnum || (NotificationNotificationTypeEnum = {}));
// Notification
/**
 * A notification of one event relating to an enterprise.
**/
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appRestrictionsSchemaChangeEvent" }),
        __metadata("design:type", AppRestrictionsSchemaChangeEvent)
    ], Notification.prototype, "appRestrictionsSchemaChangeEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appUpdateEvent" }),
        __metadata("design:type", AppUpdateEvent)
    ], Notification.prototype, "appUpdateEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceReportUpdateEvent" }),
        __metadata("design:type", DeviceReportUpdateEvent)
    ], Notification.prototype, "deviceReportUpdateEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterpriseId" }),
        __metadata("design:type", String)
    ], Notification.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installFailureEvent" }),
        __metadata("design:type", InstallFailureEvent)
    ], Notification.prototype, "installFailureEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newDeviceEvent" }),
        __metadata("design:type", NewDeviceEvent)
    ], Notification.prototype, "newDeviceEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newPermissionsEvent" }),
        __metadata("design:type", NewPermissionsEvent)
    ], Notification.prototype, "newPermissionsEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationType" }),
        __metadata("design:type", String)
    ], Notification.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productApprovalEvent" }),
        __metadata("design:type", ProductApprovalEvent)
    ], Notification.prototype, "productApprovalEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productAvailabilityChangeEvent" }),
        __metadata("design:type", ProductAvailabilityChangeEvent)
    ], Notification.prototype, "productAvailabilityChangeEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampMillis" }),
        __metadata("design:type", String)
    ], Notification.prototype, "timestampMillis", void 0);
    return Notification;
}(SpeakeasyBase));
export { Notification };
