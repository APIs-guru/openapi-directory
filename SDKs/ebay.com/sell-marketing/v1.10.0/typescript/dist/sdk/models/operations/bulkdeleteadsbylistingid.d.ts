import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BulkDeleteAdsByListingIdPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class BulkDeleteAdsByListingIdSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class BulkDeleteAdsByListingIdRequest extends SpeakeasyBase {
    pathParams: BulkDeleteAdsByListingIdPathParams;
    request: shared.BulkDeleteAdRequest;
    security: BulkDeleteAdsByListingIdSecurity;
}
export declare class BulkDeleteAdsByListingIdResponse extends SpeakeasyBase {
    bulkDeleteAdResponse?: shared.BulkDeleteAdResponse;
    contentType: string;
    statusCode: number;
}
