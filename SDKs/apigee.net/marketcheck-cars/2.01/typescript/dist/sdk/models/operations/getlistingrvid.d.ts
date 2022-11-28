import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingRvIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingRvIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingRvIdRequest extends SpeakeasyBase {
    pathParams: GetListingRvIdPathParams;
    queryParams: GetListingRvIdQueryParams;
}
export declare class GetListingRvIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    rvListing?: shared.RvListing;
    statusCode: number;
}
