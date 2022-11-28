import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHookEventsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetHookEventsRequest extends SpeakeasyBase {
    security: GetHookEventsSecurity;
}
export declare class GetHookEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subjectTypes?: shared.SubjectTypes;
}
