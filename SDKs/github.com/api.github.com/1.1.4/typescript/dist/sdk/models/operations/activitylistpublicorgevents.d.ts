import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListPublicOrgEventsPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActivityListPublicOrgEventsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListPublicOrgEventsRequest extends SpeakeasyBase {
    pathParams: ActivityListPublicOrgEventsPathParams;
    queryParams: ActivityListPublicOrgEventsQueryParams;
}
export declare class ActivityListPublicOrgEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
}
