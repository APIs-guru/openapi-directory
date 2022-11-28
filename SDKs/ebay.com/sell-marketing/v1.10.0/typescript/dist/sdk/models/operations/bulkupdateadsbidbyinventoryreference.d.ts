import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BulkUpdateAdsBidByInventoryReferencePathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class BulkUpdateAdsBidByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class BulkUpdateAdsBidByInventoryReferenceRequest extends SpeakeasyBase {
    pathParams: BulkUpdateAdsBidByInventoryReferencePathParams;
    request: shared.BulkCreateAdsByInventoryReferenceRequest;
    security: BulkUpdateAdsBidByInventoryReferenceSecurity;
}
export declare class BulkUpdateAdsBidByInventoryReferenceResponse extends SpeakeasyBase {
    bulkCreateAdsByInventoryReferenceResponse?: shared.BulkCreateAdsByInventoryReferenceResponse;
    contentType: string;
    statusCode: number;
}
