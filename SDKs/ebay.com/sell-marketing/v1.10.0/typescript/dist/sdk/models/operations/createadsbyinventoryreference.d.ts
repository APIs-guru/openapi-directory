import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAdsByInventoryReferencePathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class CreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
    pathParams: CreateAdsByInventoryReferencePathParams;
    request: shared.CreateAdsByInventoryReferenceRequest;
    security: CreateAdsByInventoryReferenceSecurity;
}
export declare class CreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    adReferences?: shared.AdReferences;
    contentType: string;
    statusCode: number;
}
