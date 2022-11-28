import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityUnstarRepoForAuthenticatedUserPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityUnstarRepoForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: ActivityUnstarRepoForAuthenticatedUserPathParams;
}
export declare class ActivityUnstarRepoForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
