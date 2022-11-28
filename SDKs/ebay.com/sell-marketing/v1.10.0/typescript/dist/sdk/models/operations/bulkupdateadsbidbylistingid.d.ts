import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BulkUpdateAdsBidByListingIdPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class BulkUpdateAdsBidByListingIdSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class BulkUpdateAdsBidByListingIdRequest extends SpeakeasyBase {
    pathParams: BulkUpdateAdsBidByListingIdPathParams;
    request: shared.BulkCreateAdRequest;
    security: BulkUpdateAdsBidByListingIdSecurity;
}
export declare class BulkUpdateAdsBidByListingIdResponse extends SpeakeasyBase {
    bulkAdResponse?: shared.BulkAdResponse;
    contentType: string;
    statusCode: number;
}
