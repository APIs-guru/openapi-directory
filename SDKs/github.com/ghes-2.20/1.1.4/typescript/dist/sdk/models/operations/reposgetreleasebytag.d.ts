import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetReleaseByTagPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    tag: string;
}
export declare class ReposGetReleaseByTagRequest extends SpeakeasyBase {
    pathParams: ReposGetReleaseByTagPathParams;
}
export declare class ReposGetReleaseByTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    release?: shared.Release;
}
