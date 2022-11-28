import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUploadShareSubscriptionsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class ListUploadShareSubscriptionsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ListUploadShareSubscriptionsRequest extends SpeakeasyBase {
    queryParams: ListUploadShareSubscriptionsQueryParams;
    headers: ListUploadShareSubscriptionsHeaders;
}
export declare class ListUploadShareSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    subscribedUploadShareList?: shared.SubscribedUploadShareList;
}
