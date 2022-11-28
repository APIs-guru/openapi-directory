import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEvidenceContentServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class FetchEvidenceContentPathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class FetchEvidenceContentQueryParams extends SpeakeasyBase {
    evidenceId: string;
    fileId: string;
}
export declare class FetchEvidenceContentSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class FetchEvidenceContentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEvidenceContentPathParams;
    queryParams: FetchEvidenceContentQueryParams;
    security: FetchEvidenceContentSecurity;
}
export declare class FetchEvidenceContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
