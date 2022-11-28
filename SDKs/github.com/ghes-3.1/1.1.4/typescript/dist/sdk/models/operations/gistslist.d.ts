import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsListQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    since?: Date;
}
export declare class GistsListRequest extends SpeakeasyBase {
    queryParams: GistsListQueryParams;
}
export declare class GistsListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    baseGists?: shared.BaseGist[];
    basicError?: shared.BasicError;
}
