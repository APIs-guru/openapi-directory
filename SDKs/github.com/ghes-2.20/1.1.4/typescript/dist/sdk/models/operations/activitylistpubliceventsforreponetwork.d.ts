import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListPublicEventsForRepoNetworkPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityListPublicEventsForRepoNetworkQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListPublicEventsForRepoNetworkRequest extends SpeakeasyBase {
    pathParams: ActivityListPublicEventsForRepoNetworkPathParams;
    queryParams: ActivityListPublicEventsForRepoNetworkQueryParams;
}
export declare class ActivityListPublicEventsForRepoNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    events?: shared.Event[];
}
