import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLogStreamXAmzTargetEnum {
    Logs20140328CreateLogStream = "Logs_20140328.CreateLogStream"
}
export declare class CreateLogStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLogStreamXAmzTargetEnum;
}
export declare class CreateLogStreamRequest extends SpeakeasyBase {
    headers: CreateLogStreamHeaders;
    request: shared.CreateLogStreamRequest;
}
export declare class CreateLogStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
