import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutDestinationXAmzTargetEnum {
    Logs20140328PutDestination = "Logs_20140328.PutDestination"
}
export declare class PutDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDestinationXAmzTargetEnum;
}
export declare class PutDestinationRequest extends SpeakeasyBase {
    headers: PutDestinationHeaders;
    request: shared.PutDestinationRequest;
}
export declare class PutDestinationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    putDestinationResponse?: shared.PutDestinationResponse;
    serviceUnavailableException?: any;
    statusCode: number;
}
