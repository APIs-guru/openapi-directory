import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListUserSSubscriptionGroupStatusSmsQueryParams extends SpeakeasyBase {
    externalId?: string;
    phone?: string;
    subscriptionGroupId?: string;
}
export declare class ListUserSSubscriptionGroupStatusSmsRequest extends SpeakeasyBase {
    queryParams: ListUserSSubscriptionGroupStatusSmsQueryParams;
}
export declare class ListUserSSubscriptionGroupStatusSmsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
