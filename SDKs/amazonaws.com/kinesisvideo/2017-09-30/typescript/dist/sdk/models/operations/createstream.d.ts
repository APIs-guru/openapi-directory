import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamRequestBody extends SpeakeasyBase {
    dataRetentionInHours?: number;
    deviceName?: string;
    kmsKeyId?: string;
    mediaType?: string;
    streamName: string;
    tags?: Map<string, string>;
}
export declare class CreateStreamRequest extends SpeakeasyBase {
    headers: CreateStreamHeaders;
    request: CreateStreamRequestBody;
}
export declare class CreateStreamResponse extends SpeakeasyBase {
    accountStreamLimitExceededException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    createStreamOutput?: shared.CreateStreamOutput;
    deviceStreamLimitExceededException?: any;
    invalidArgumentException?: any;
    invalidDeviceException?: any;
    resourceInUseException?: any;
    statusCode: number;
    tagsPerResourceExceededLimitException?: any;
}
