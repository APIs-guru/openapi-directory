import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDownloadShareSubscriptionsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class ListDownloadShareSubscriptionsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ListDownloadShareSubscriptionsRequest extends SpeakeasyBase {
    queryParams: ListDownloadShareSubscriptionsQueryParams;
    headers: ListDownloadShareSubscriptionsHeaders;
}
export declare class ListDownloadShareSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    subscribedDownloadShareList?: shared.SubscribedDownloadShareList;
}
