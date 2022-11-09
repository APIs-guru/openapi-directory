import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteDestinationXAmzTargetEnum {
    Logs20140328DeleteDestination = "Logs_20140328.DeleteDestination"
}
export declare class DeleteDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDestinationXAmzTargetEnum;
}
export declare class DeleteDestinationRequest extends SpeakeasyBase {
    headers: DeleteDestinationHeaders;
    request: shared.DeleteDestinationRequest;
}
export declare class DeleteDestinationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
