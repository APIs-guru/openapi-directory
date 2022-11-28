import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityListNotificationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    all?: boolean;
    before?: Date;
    page?: number;
    participating?: boolean;
    perPage?: number;
    since?: Date;
}
export declare class ActivityListNotificationsForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: ActivityListNotificationsForAuthenticatedUserQueryParams;
}
export declare class ActivityListNotificationsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    threads?: shared.Thread[];
    validationError?: shared.ValidationError;
}
