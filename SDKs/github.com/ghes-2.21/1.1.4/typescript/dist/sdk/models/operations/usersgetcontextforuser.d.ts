import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetContextForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare enum UsersGetContextForUserSubjectTypeEnum {
    Organization = "organization",
    Repository = "repository",
    Issue = "issue",
    PullRequest = "pull_request"
}
export declare class UsersGetContextForUserQueryParams extends SpeakeasyBase {
    subjectId?: string;
    subjectType?: UsersGetContextForUserSubjectTypeEnum;
}
export declare class UsersGetContextForUserRequest extends SpeakeasyBase {
    pathParams: UsersGetContextForUserPathParams;
    queryParams: UsersGetContextForUserQueryParams;
}
export declare class UsersGetContextForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    hovercard?: shared.Hovercard;
    validationError?: shared.ValidationError;
}
