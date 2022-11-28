import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListReceivedEventsForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ActivityListReceivedEventsForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListReceivedEventsForUserRequest extends SpeakeasyBase {
    pathParams: ActivityListReceivedEventsForUserPathParams;
    queryParams: ActivityListReceivedEventsForUserQueryParams;
}
export declare class ActivityListReceivedEventsForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
}
