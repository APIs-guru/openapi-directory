import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDataRetentionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateDataRetentionRequestBodyOperationEnum {
    IncreaseDataRetention = "INCREASE_DATA_RETENTION",
    DecreaseDataRetention = "DECREASE_DATA_RETENTION"
}
export declare class UpdateDataRetentionRequestBody extends SpeakeasyBase {
    currentVersion: string;
    dataRetentionChangeInHours: number;
    operation: UpdateDataRetentionRequestBodyOperationEnum;
    streamArn?: string;
    streamName?: string;
}
export declare class UpdateDataRetentionRequest extends SpeakeasyBase {
    headers: UpdateDataRetentionHeaders;
    request: UpdateDataRetentionRequestBody;
}
export declare class UpdateDataRetentionResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateDataRetentionOutput?: Map<string, any>;
    versionMismatchException?: any;
}
