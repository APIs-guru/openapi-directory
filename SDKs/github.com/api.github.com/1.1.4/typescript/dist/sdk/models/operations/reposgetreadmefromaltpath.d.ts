import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetReadmeFromAltPathPathParams extends SpeakeasyBase {
    dir: string;
    owner: string;
    repo: string;
}
export declare class ReposGetReadmeFromAltPathQueryParams extends SpeakeasyBase {
    ref?: string;
}
export declare class ReposGetReadmeFromAltPathRequest extends SpeakeasyBase {
    pathParams: ReposGetReadmeFromAltPathPathParams;
    queryParams: ReposGetReadmeFromAltPathQueryParams;
}
export declare class ReposGetReadmeFromAltPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    contentFile?: shared.ContentFile;
    validationError?: shared.ValidationError;
}
