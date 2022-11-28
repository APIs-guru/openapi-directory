import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsListStarredQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    since?: Date;
}
export declare class GistsListStarredRequest extends SpeakeasyBase {
    queryParams: GistsListStarredQueryParams;
}
export declare class GistsListStarredResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    baseGists?: shared.BaseGist[];
    basicError?: shared.BasicError;
}
