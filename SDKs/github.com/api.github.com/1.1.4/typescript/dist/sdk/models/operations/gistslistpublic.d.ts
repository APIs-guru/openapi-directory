import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsListPublicQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    since?: string;
}
export declare class GistsListPublicRequest extends SpeakeasyBase {
    queryParams: GistsListPublicQueryParams;
}
export declare class GistsListPublicResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    baseGists?: shared.BaseGist[];
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
