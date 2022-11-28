import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListUserSSubscriptionGroupSmsQueryParams extends SpeakeasyBase {
    externalId?: string;
    limit?: string;
    offset?: string;
    phone?: string;
}
export declare class ListUserSSubscriptionGroupSmsRequest extends SpeakeasyBase {
    queryParams: ListUserSSubscriptionGroupSmsQueryParams;
}
export declare class ListUserSSubscriptionGroupSmsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
