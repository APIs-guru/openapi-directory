import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateEvidenceServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class UpdateEvidencePathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class UpdateEvidenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateEvidenceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateEvidencePathParams;
    request?: shared.UpdateEvidencePaymentDisputeRequest;
    security: UpdateEvidenceSecurity;
}
export declare class UpdateEvidenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
