import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNotificationsJson200ApplicationJsonNotificationsData extends SpeakeasyBase {
    badgeId?: number;
    badgeName?: string;
    badgeSlug?: string;
    badgeTitle?: boolean;
    username?: string;
}
export declare class GetNotificationsJson200ApplicationJsonNotifications extends SpeakeasyBase {
    createdAt?: string;
    data?: GetNotificationsJson200ApplicationJsonNotificationsData;
    id?: number;
    notificationType?: number;
    postNumber?: string;
    read?: boolean;
    slug?: string;
    topicId?: number;
    userId?: number;
}
export declare class GetNotificationsJson200ApplicationJson extends SpeakeasyBase {
    loadMoreNotifications?: string;
    notifications?: GetNotificationsJson200ApplicationJsonNotifications[];
    seenNotificationId?: number;
    totalRowsNotifications?: number;
}
export declare class GetNotificationsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationsJson200ApplicationJsonObject?: GetNotificationsJson200ApplicationJson;
    statusCode: number;
}
