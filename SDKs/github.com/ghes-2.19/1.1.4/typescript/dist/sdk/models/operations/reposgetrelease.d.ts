import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetReleasePathParams extends SpeakeasyBase {
    owner: string;
    releaseId: number;
    repo: string;
}
export declare class ReposGetReleaseRequest extends SpeakeasyBase {
    pathParams: ReposGetReleasePathParams;
}
export declare class ReposGetReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    release?: shared.Release;
}
