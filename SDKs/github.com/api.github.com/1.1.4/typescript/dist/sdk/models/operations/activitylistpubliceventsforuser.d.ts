import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListPublicEventsForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ActivityListPublicEventsForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListPublicEventsForUserRequest extends SpeakeasyBase {
    pathParams: ActivityListPublicEventsForUserPathParams;
    queryParams: ActivityListPublicEventsForUserQueryParams;
}
export declare class ActivityListPublicEventsForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    events?: shared.Event[];
}
