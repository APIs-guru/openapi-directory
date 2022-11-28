import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNodeSubscriptionsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class ListNodeSubscriptionsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ListNodeSubscriptionsRequest extends SpeakeasyBase {
    queryParams: ListNodeSubscriptionsQueryParams;
    headers: ListNodeSubscriptionsHeaders;
}
export declare class ListNodeSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    subscribedNodeList?: shared.SubscribedNodeList;
}
