import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportPlaybackKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportPlaybackKeyPairRequestBody extends SpeakeasyBase {
    name?: string;
    publicKeyMaterial: string;
    tags?: Map<string, string>;
}
export declare class ImportPlaybackKeyPairRequest extends SpeakeasyBase {
    headers: ImportPlaybackKeyPairHeaders;
    request: ImportPlaybackKeyPairRequestBody;
}
export declare class ImportPlaybackKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    importPlaybackKeyPairResponse?: shared.ImportPlaybackKeyPairResponse;
    pendingVerification?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
