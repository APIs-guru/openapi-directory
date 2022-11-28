import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListOrgEventsForAuthenticatedUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class ActivityListOrgEventsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListOrgEventsForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: ActivityListOrgEventsForAuthenticatedUserPathParams;
    queryParams: ActivityListOrgEventsForAuthenticatedUserQueryParams;
}
export declare class ActivityListOrgEventsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
}
