import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStreamXAmzTargetEnum {
    Kinesis20131202DeleteStream = "Kinesis_20131202.DeleteStream"
}
export declare class DeleteStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStreamXAmzTargetEnum;
}
export declare class DeleteStreamRequest extends SpeakeasyBase {
    headers: DeleteStreamHeaders;
    request: shared.DeleteStreamInput;
}
export declare class DeleteStreamResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
