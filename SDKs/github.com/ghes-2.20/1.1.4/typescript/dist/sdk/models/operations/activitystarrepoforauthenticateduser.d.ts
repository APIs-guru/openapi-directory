import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityStarRepoForAuthenticatedUserPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityStarRepoForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: ActivityStarRepoForAuthenticatedUserPathParams;
}
export declare class ActivityStarRepoForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
