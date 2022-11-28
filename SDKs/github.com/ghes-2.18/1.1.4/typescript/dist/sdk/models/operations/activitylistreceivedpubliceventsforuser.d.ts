import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListReceivedPublicEventsForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ActivityListReceivedPublicEventsForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListReceivedPublicEventsForUserRequest extends SpeakeasyBase {
    pathParams: ActivityListReceivedPublicEventsForUserPathParams;
    queryParams: ActivityListReceivedPublicEventsForUserQueryParams;
}
export declare class ActivityListReceivedPublicEventsForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
}
