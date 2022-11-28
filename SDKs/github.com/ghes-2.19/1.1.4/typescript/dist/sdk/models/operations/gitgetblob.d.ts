import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitGetBlobPathParams extends SpeakeasyBase {
    fileSha: string;
    owner: string;
    repo: string;
}
export declare class GitGetBlobRequest extends SpeakeasyBase {
    pathParams: GitGetBlobPathParams;
}
export declare class GitGetBlobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    blob?: shared.Blob;
    validationError?: shared.ValidationError;
}
