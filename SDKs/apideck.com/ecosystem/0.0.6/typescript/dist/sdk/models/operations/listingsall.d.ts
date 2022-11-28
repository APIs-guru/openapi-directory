import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListingsAllPathParams extends SpeakeasyBase {
    ecosystemId: string;
}
export declare class ListingsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    externalId?: string;
    limit?: number;
}
export declare class ListingsAllRequest extends SpeakeasyBase {
    pathParams: ListingsAllPathParams;
    queryParams: ListingsAllQueryParams;
}
export declare class ListingsAllResponse extends SpeakeasyBase {
    contentType: string;
    getListingsResponse?: shared.GetListingsResponse;
    statusCode: number;
}
