import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarFsboIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarFsboIdMediaQueryParams extends SpeakeasyBase {
    apiKey?: string;
    appendApiKey?: boolean;
}
export declare class GetListingCarFsboIdMediaRequest extends SpeakeasyBase {
    pathParams: GetListingCarFsboIdMediaPathParams;
    queryParams: GetListingCarFsboIdMediaQueryParams;
}
export declare class GetListingCarFsboIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingMedia?: shared.ListingMedia;
    statusCode: number;
}
