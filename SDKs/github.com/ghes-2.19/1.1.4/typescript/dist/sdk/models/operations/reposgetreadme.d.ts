import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetReadmePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetReadmeQueryParams extends SpeakeasyBase {
    ref?: string;
}
export declare class ReposGetReadmeRequest extends SpeakeasyBase {
    pathParams: ReposGetReadmePathParams;
    queryParams: ReposGetReadmeQueryParams;
}
export declare class ReposGetReadmeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    contentFile?: shared.ContentFile;
    validationError?: shared.ValidationError;
}
