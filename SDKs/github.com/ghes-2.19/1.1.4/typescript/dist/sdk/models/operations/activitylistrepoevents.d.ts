import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListRepoEventsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityListRepoEventsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListRepoEventsRequest extends SpeakeasyBase {
    pathParams: ActivityListRepoEventsPathParams;
    queryParams: ActivityListRepoEventsQueryParams;
}
export declare class ActivityListRepoEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
}
