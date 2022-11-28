import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsForkPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsForkRequest extends SpeakeasyBase {
    pathParams: GistsForkPathParams;
}
export declare class GistsForkResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    baseGist?: shared.BaseGist;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
