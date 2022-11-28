import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetReadmeInDirectoryPathParams extends SpeakeasyBase {
    dir: string;
    owner: string;
    repo: string;
}
export declare class ReposGetReadmeInDirectoryQueryParams extends SpeakeasyBase {
    ref?: string;
}
export declare class ReposGetReadmeInDirectoryRequest extends SpeakeasyBase {
    pathParams: ReposGetReadmeInDirectoryPathParams;
    queryParams: ReposGetReadmeInDirectoryQueryParams;
}
export declare class ReposGetReadmeInDirectoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    contentFile?: shared.ContentFile;
    validationError?: shared.ValidationError;
}
