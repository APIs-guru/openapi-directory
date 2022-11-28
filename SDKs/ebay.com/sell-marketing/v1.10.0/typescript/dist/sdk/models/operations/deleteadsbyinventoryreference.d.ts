import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAdsByInventoryReferencePathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class DeleteAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
    pathParams: DeleteAdsByInventoryReferencePathParams;
    request: shared.DeleteAdsByInventoryReferenceRequest;
    security: DeleteAdsByInventoryReferenceSecurity;
}
export declare class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
    adIds?: shared.AdIds;
    contentType: string;
    statusCode: number;
}
