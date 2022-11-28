import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterStreamConsumerXAmzTargetEnum {
    Kinesis20131202RegisterStreamConsumer = "Kinesis_20131202.RegisterStreamConsumer"
}
export declare class RegisterStreamConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterStreamConsumerXAmzTargetEnum;
}
export declare class RegisterStreamConsumerRequest extends SpeakeasyBase {
    headers: RegisterStreamConsumerHeaders;
    request: shared.RegisterStreamConsumerInput;
}
export declare class RegisterStreamConsumerResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    registerStreamConsumerOutput?: shared.RegisterStreamConsumerOutput;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
