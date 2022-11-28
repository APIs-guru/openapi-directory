import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    groupId?: number;
    includeAncestors?: boolean;
    path?: string;
    perPage?: number;
    sortBy?: Map<string, any>;
    userId?: number;
}
export declare class GetNotificationsRequest extends SpeakeasyBase {
    queryParams: GetNotificationsQueryParams;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notificationEntities?: shared.NotificationEntity[];
    statusCode: number;
}
