import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetHookEventsSubjectTypeSubjectTypeEnum {
    Workspace = "workspace",
    User = "user",
    Repository = "repository",
    Team = "team"
}
export declare class GetHookEventsSubjectTypePathParams extends SpeakeasyBase {
    subjectType: GetHookEventsSubjectTypeSubjectTypeEnum;
}
export declare class GetHookEventsSubjectTypeSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetHookEventsSubjectTypeRequest extends SpeakeasyBase {
    pathParams: GetHookEventsSubjectTypePathParams;
    security: GetHookEventsSubjectTypeSecurity;
}
export declare class GetHookEventsSubjectTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedHookEvents?: shared.PaginatedHookEvents;
}
