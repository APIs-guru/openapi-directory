import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetLatestReleasePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetLatestReleaseRequest extends SpeakeasyBase {
    pathParams: ReposGetLatestReleasePathParams;
}
export declare class ReposGetLatestReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    release?: shared.Release;
}
