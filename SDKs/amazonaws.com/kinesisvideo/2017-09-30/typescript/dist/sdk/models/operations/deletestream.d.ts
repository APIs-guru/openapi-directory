import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStreamRequestBody extends SpeakeasyBase {
    currentVersion?: string;
    streamArn: string;
}
export declare class DeleteStreamRequest extends SpeakeasyBase {
    headers: DeleteStreamHeaders;
    request: DeleteStreamRequestBody;
}
export declare class DeleteStreamResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    deleteStreamOutput?: Map<string, any>;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    versionMismatchException?: any;
}
