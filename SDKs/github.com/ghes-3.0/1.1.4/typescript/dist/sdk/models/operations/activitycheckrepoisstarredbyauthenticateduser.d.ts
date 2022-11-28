import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityCheckRepoIsStarredByAuthenticatedUserPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityCheckRepoIsStarredByAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: ActivityCheckRepoIsStarredByAuthenticatedUserPathParams;
}
export declare class ActivityCheckRepoIsStarredByAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
