import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BulkDeleteAdsByInventoryReferencePathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class BulkDeleteAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class BulkDeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
    pathParams: BulkDeleteAdsByInventoryReferencePathParams;
    request: shared.BulkDeleteAdsByInventoryReferenceRequest;
    security: BulkDeleteAdsByInventoryReferenceSecurity;
}
export declare class BulkDeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
    bulkDeleteAdsByInventoryReferenceResponse?: shared.BulkDeleteAdsByInventoryReferenceResponse;
    contentType: string;
    statusCode: number;
}
