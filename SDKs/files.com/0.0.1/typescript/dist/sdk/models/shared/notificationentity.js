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
export var NotificationEntitySendIntervalEnum;
(function (NotificationEntitySendIntervalEnum) {
    NotificationEntitySendIntervalEnum["FiveMinutes"] = "five_minutes";
    NotificationEntitySendIntervalEnum["FifteenMinutes"] = "fifteen_minutes";
    NotificationEntitySendIntervalEnum["Hourly"] = "hourly";
    NotificationEntitySendIntervalEnum["Daily"] = "daily";
})(NotificationEntitySendIntervalEnum || (NotificationEntitySendIntervalEnum = {}));
export var NotificationEntityUnsubscribedReasonEnum;
(function (NotificationEntityUnsubscribedReasonEnum) {
    NotificationEntityUnsubscribedReasonEnum["None"] = "none";
    NotificationEntityUnsubscribedReasonEnum["UnsubscribeLinkClicked"] = "unsubscribe_link_clicked";
    NotificationEntityUnsubscribedReasonEnum["MailBounced"] = "mail_bounced";
    NotificationEntityUnsubscribedReasonEnum["MailMarkedAsSpam"] = "mail_marked_as_spam";
})(NotificationEntityUnsubscribedReasonEnum || (NotificationEntityUnsubscribedReasonEnum = {}));
// NotificationEntity
/**
 * List Notifications
**/
var NotificationEntity = /** @class */ (function (_super) {
    __extends(NotificationEntity, _super);
    function NotificationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_id" }),
        __metadata("design:type", Number)
    ], NotificationEntity.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_name" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NotificationEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notify_on_copy" }),
        __metadata("design:type", Boolean)
    ], NotificationEntity.prototype, "notifyOnCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notify_user_actions" }),
        __metadata("design:type", Boolean)
    ], NotificationEntity.prototype, "notifyUserActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recursive" }),
        __metadata("design:type", Boolean)
    ], NotificationEntity.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=send_interval" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "sendInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suppressed_email" }),
        __metadata("design:type", Boolean)
    ], NotificationEntity.prototype, "suppressedEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unsubscribed" }),
        __metadata("design:type", Boolean)
    ], NotificationEntity.prototype, "unsubscribed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unsubscribed_reason" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "unsubscribedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], NotificationEntity.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "username", void 0);
    return NotificationEntity;
}(SpeakeasyBase));
export { NotificationEntity };
