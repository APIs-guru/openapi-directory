import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BulkCreateAdsByInventoryReferencePathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class BulkCreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class BulkCreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
    pathParams: BulkCreateAdsByInventoryReferencePathParams;
    request: shared.BulkCreateAdsByInventoryReferenceRequest;
    security: BulkCreateAdsByInventoryReferenceSecurity;
}
export declare class BulkCreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    bulkCreateAdsByInventoryReferenceResponse?: shared.BulkCreateAdsByInventoryReferenceResponse;
    contentType: string;
    statusCode: number;
}
