import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BulkCreateAdsByListingIdPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class BulkCreateAdsByListingIdSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class BulkCreateAdsByListingIdRequest extends SpeakeasyBase {
    pathParams: BulkCreateAdsByListingIdPathParams;
    request: shared.BulkCreateAdRequest;
    security: BulkCreateAdsByListingIdSecurity;
}
export declare class BulkCreateAdsByListingIdResponse extends SpeakeasyBase {
    bulkAdResponse?: shared.BulkAdResponse;
    contentType: string;
    statusCode: number;
}
