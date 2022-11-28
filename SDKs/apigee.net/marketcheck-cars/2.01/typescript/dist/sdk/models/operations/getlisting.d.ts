import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingQueryParams extends SpeakeasyBase {
    apiKey?: string;
    appendApiKey?: boolean;
    includeRelevantLinks?: boolean;
}
export declare class GetListingRequest extends SpeakeasyBase {
    pathParams: GetListingPathParams;
    queryParams: GetListingQueryParams;
}
export declare class GetListingResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listing?: shared.Listing;
    statusCode: number;
}
