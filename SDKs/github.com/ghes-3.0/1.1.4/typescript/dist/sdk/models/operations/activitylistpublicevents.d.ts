import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListPublicEventsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActivityListPublicEvents503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class ActivityListPublicEventsRequest extends SpeakeasyBase {
    queryParams: ActivityListPublicEventsQueryParams;
}
export declare class ActivityListPublicEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    activityListPublicEvents503ApplicationJsonObject?: ActivityListPublicEvents503ApplicationJson;
    basicError?: shared.BasicError;
    events?: shared.Event[];
}
