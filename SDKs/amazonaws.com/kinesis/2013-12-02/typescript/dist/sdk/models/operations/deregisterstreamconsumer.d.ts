import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterStreamConsumerXAmzTargetEnum {
    Kinesis20131202DeregisterStreamConsumer = "Kinesis_20131202.DeregisterStreamConsumer"
}
export declare class DeregisterStreamConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterStreamConsumerXAmzTargetEnum;
}
export declare class DeregisterStreamConsumerRequest extends SpeakeasyBase {
    headers: DeregisterStreamConsumerHeaders;
    request: shared.DeregisterStreamConsumerInput;
}
export declare class DeregisterStreamConsumerResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
