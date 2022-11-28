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
var GetNotificationsJson200ApplicationJsonNotificationsData = /** @class */ (function (_super) {
    __extends(GetNotificationsJson200ApplicationJsonNotificationsData, _super);
    function GetNotificationsJson200ApplicationJsonNotificationsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge_id" }),
        __metadata("design:type", Number)
    ], GetNotificationsJson200ApplicationJsonNotificationsData.prototype, "badgeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge_name" }),
        __metadata("design:type", String)
    ], GetNotificationsJson200ApplicationJsonNotificationsData.prototype, "badgeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge_slug" }),
        __metadata("design:type", String)
    ], GetNotificationsJson200ApplicationJsonNotificationsData.prototype, "badgeSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge_title" }),
        __metadata("design:type", Boolean)
    ], GetNotificationsJson200ApplicationJsonNotificationsData.prototype, "badgeTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetNotificationsJson200ApplicationJsonNotificationsData.prototype, "username", void 0);
    return GetNotificationsJson200ApplicationJsonNotificationsData;
}(SpeakeasyBase));
export { GetNotificationsJson200ApplicationJsonNotificationsData };
var GetNotificationsJson200ApplicationJsonNotifications = /** @class */ (function (_super) {
    __extends(GetNotificationsJson200ApplicationJsonNotifications, _super);
    function GetNotificationsJson200ApplicationJsonNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetNotificationsJson200ApplicationJsonNotificationsData)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_type" }),
        __metadata("design:type", Number)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_number" }),
        __metadata("design:type", String)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "postNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Boolean)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetNotificationsJson200ApplicationJsonNotifications.prototype, "userId", void 0);
    return GetNotificationsJson200ApplicationJsonNotifications;
}(SpeakeasyBase));
export { GetNotificationsJson200ApplicationJsonNotifications };
var GetNotificationsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNotificationsJson200ApplicationJson, _super);
    function GetNotificationsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_more_notifications" }),
        __metadata("design:type", String)
    ], GetNotificationsJson200ApplicationJson.prototype, "loadMoreNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications", elemType: GetNotificationsJson200ApplicationJsonNotifications }),
        __metadata("design:type", Array)
    ], GetNotificationsJson200ApplicationJson.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seen_notification_id" }),
        __metadata("design:type", Number)
    ], GetNotificationsJson200ApplicationJson.prototype, "seenNotificationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_rows_notifications" }),
        __metadata("design:type", Number)
    ], GetNotificationsJson200ApplicationJson.prototype, "totalRowsNotifications", void 0);
    return GetNotificationsJson200ApplicationJson;
}(SpeakeasyBase));
export { GetNotificationsJson200ApplicationJson };
var GetNotificationsJsonResponse = /** @class */ (function (_super) {
    __extends(GetNotificationsJsonResponse, _super);
    function GetNotificationsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNotificationsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNotificationsJson200ApplicationJson)
    ], GetNotificationsJsonResponse.prototype, "getNotificationsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNotificationsJsonResponse.prototype, "statusCode", void 0);
    return GetNotificationsJsonResponse;
}(SpeakeasyBase));
export { GetNotificationsJsonResponse };
