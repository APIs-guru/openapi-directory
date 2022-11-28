import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitGetTreePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    treeSha: string;
}
export declare class GitGetTreeQueryParams extends SpeakeasyBase {
    recursive?: string;
}
export declare class GitGetTreeRequest extends SpeakeasyBase {
    pathParams: GitGetTreePathParams;
    queryParams: GitGetTreeQueryParams;
}
export declare class GitGetTreeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gitTree?: shared.GitTree;
    validationError?: shared.ValidationError;
}
