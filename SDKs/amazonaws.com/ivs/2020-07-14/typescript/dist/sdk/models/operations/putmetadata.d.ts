import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutMetadataRequestBody extends SpeakeasyBase {
    channelArn: string;
    metadata: string;
}
export declare class PutMetadataRequest extends SpeakeasyBase {
    headers: PutMetadataHeaders;
    request: PutMetadataRequestBody;
}
export declare class PutMetadataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    channelNotBroadcasting?: any;
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
