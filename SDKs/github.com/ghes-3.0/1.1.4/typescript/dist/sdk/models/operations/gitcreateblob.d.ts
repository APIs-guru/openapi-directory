import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitCreateBlobPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class GitCreateBlobRequestBody extends SpeakeasyBase {
    content: string;
    encoding?: string;
}
export declare class GitCreateBlobRequest extends SpeakeasyBase {
    pathParams: GitCreateBlobPathParams;
    request?: GitCreateBlobRequestBody;
}
export declare class GitCreateBlobResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    shortBlob?: shared.ShortBlob;
    validationError?: shared.ValidationError;
}
