import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsListForksPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsListForksQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GistsListForksRequest extends SpeakeasyBase {
    pathParams: GistsListForksPathParams;
    queryParams: GistsListForksQueryParams;
}
export declare class GistsListForksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gistSimples?: shared.GistSimple[];
}
