import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingCarFsboIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingCarFsboIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
    appendApiKey?: boolean;
    includeRelevantLinks?: boolean;
}
export declare class GetListingCarFsboIdRequest extends SpeakeasyBase {
    pathParams: GetListingCarFsboIdPathParams;
    queryParams: GetListingCarFsboIdQueryParams;
}
export declare class GetListingCarFsboIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    listing?: shared.Listing;
    statusCode: number;
}
