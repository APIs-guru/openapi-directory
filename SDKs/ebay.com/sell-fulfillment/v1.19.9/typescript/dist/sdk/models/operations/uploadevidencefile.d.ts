import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UploadEvidenceFileServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class UploadEvidenceFilePathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class UploadEvidenceFileSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UploadEvidenceFileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UploadEvidenceFilePathParams;
    security: UploadEvidenceFileSecurity;
}
export declare class UploadEvidenceFileResponse extends SpeakeasyBase {
    contentType: string;
    fileEvidence?: shared.FileEvidence;
    statusCode: number;
}
