import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateReleasePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposCreateReleaseRequestBody extends SpeakeasyBase {
    body?: string;
    draft?: boolean;
    name?: string;
    prerelease?: boolean;
    tagName: string;
    targetCommitish?: string;
}
export declare class ReposCreateReleaseRequest extends SpeakeasyBase {
    pathParams: ReposCreateReleasePathParams;
    request?: ReposCreateReleaseRequestBody;
}
export declare class ReposCreateReleaseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    release?: shared.Release;
    validationError?: shared.ValidationError;
}
