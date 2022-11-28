import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitGetTagPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    tagSha: string;
}
export declare class GitGetTagRequest extends SpeakeasyBase {
    pathParams: GitGetTagPathParams;
}
export declare class GitGetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gitTag?: shared.GitTag;
}
