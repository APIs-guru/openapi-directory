import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePlaybackKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePlaybackKeyPairRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DeletePlaybackKeyPairRequest extends SpeakeasyBase {
    headers: DeletePlaybackKeyPairHeaders;
    request: DeletePlaybackKeyPairRequestBody;
}
export declare class DeletePlaybackKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deletePlaybackKeyPairResponse?: Map<string, any>;
    pendingVerification?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
