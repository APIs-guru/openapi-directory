import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListEventsForAuthenticatedUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ActivityListEventsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListEventsForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: ActivityListEventsForAuthenticatedUserPathParams;
    queryParams: ActivityListEventsForAuthenticatedUserQueryParams;
}
export declare class ActivityListEventsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
}
