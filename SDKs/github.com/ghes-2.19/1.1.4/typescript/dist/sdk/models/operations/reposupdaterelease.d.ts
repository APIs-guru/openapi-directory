import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateReleasePathParams extends SpeakeasyBase {
    owner: string;
    releaseId: number;
    repo: string;
}
export declare class ReposUpdateReleaseRequestBody extends SpeakeasyBase {
    body?: string;
    draft?: boolean;
    name?: string;
    prerelease?: boolean;
    tagName?: string;
    targetCommitish?: string;
}
export declare class ReposUpdateReleaseRequest extends SpeakeasyBase {
    pathParams: ReposUpdateReleasePathParams;
    request?: ReposUpdateReleaseRequestBody;
}
export declare class ReposUpdateReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    release?: shared.Release;
}
