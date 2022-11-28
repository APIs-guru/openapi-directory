import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarFsboIdExtraPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarFsboIdExtraQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListingCarFsboIdExtraRequest extends SpeakeasyBase {
    pathParams: GetListingCarFsboIdExtraPathParams;
    queryParams: GetListingCarFsboIdExtraQueryParams;
}
export declare class GetListingCarFsboIdExtraResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listingExtraAttributes?: shared.ListingExtraAttributes;
    statusCode: number;
}
