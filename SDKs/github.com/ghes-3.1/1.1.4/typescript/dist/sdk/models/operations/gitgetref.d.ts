import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitGetRefPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class GitGetRefRequest extends SpeakeasyBase {
    pathParams: GitGetRefPathParams;
}
export declare class GitGetRefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gitRef?: shared.GitRef;
}
