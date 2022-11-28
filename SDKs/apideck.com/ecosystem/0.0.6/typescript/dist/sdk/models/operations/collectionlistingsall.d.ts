import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionListingsAllPathParams extends SpeakeasyBase {
    ecosystemId: string;
    id: string;
}
export declare class CollectionListingsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare class CollectionListingsAllRequest extends SpeakeasyBase {
    pathParams: CollectionListingsAllPathParams;
    queryParams: CollectionListingsAllQueryParams;
}
export declare class CollectionListingsAllResponse extends SpeakeasyBase {
    contentType: string;
    getListingsResponse?: shared.GetListingsResponse;
    statusCode: number;
}
