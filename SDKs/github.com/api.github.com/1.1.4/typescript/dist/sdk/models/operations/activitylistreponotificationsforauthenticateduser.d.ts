import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListRepoNotificationsForAuthenticatedUserPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityListRepoNotificationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    all?: boolean;
    before?: string;
    page?: number;
    participating?: boolean;
    perPage?: number;
    since?: string;
}
export declare class ActivityListRepoNotificationsForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: ActivityListRepoNotificationsForAuthenticatedUserPathParams;
    queryParams: ActivityListRepoNotificationsForAuthenticatedUserQueryParams;
}
export declare class ActivityListRepoNotificationsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    threads?: shared.Thread[];
}
