import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetPagesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetPagesRequest extends SpeakeasyBase {
    pathParams: ReposGetPagesPathParams;
}
export declare class ReposGetPagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    page?: shared.Page;
}
