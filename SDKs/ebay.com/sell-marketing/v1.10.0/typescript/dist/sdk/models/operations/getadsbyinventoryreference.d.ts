import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdsByInventoryReferencePathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class GetAdsByInventoryReferenceQueryParams extends SpeakeasyBase {
    inventoryReferenceId: string;
    inventoryReferenceType: string;
}
export declare class GetAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetAdsByInventoryReferenceRequest extends SpeakeasyBase {
    pathParams: GetAdsByInventoryReferencePathParams;
    queryParams: GetAdsByInventoryReferenceQueryParams;
    security: GetAdsByInventoryReferenceSecurity;
}
export declare class GetAdsByInventoryReferenceResponse extends SpeakeasyBase {
    ads?: shared.Ads;
    contentType: string;
    statusCode: number;
}
