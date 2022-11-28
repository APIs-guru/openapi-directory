import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRequestsQueryParams extends SpeakeasyBase {
    cursor?: string;
    mine?: boolean;
    path?: string;
    perPage?: number;
    sortBy?: Map<string, any>;
}
export declare class GetRequestsRequest extends SpeakeasyBase {
    queryParams: GetRequestsQueryParams;
}
export declare class GetRequestsResponse extends SpeakeasyBase {
    contentType: string;
    requestEntities?: shared.RequestEntity[];
    statusCode: number;
}
