import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const AddEvidenceServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class AddEvidencePathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class AddEvidenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class AddEvidenceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: AddEvidencePathParams;
    request?: shared.AddEvidencePaymentDisputeRequest;
    security: AddEvidenceSecurity;
}
export declare class AddEvidenceResponse extends SpeakeasyBase {
    addEvidencePaymentDisputeResponse?: shared.AddEvidencePaymentDisputeResponse;
    contentType: string;
    statusCode: number;
}
