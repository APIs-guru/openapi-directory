import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStreamXAmzTargetEnum {
    Kinesis20131202CreateStream = "Kinesis_20131202.CreateStream"
}
export declare class CreateStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStreamXAmzTargetEnum;
}
export declare class CreateStreamRequest extends SpeakeasyBase {
    headers: CreateStreamHeaders;
    request: shared.CreateStreamInput;
}
export declare class CreateStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
