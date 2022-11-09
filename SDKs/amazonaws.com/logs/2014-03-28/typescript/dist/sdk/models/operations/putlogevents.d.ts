import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutLogEventsXAmzTargetEnum {
    Logs20140328PutLogEvents = "Logs_20140328.PutLogEvents"
}
export declare class PutLogEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLogEventsXAmzTargetEnum;
}
export declare class PutLogEventsRequest extends SpeakeasyBase {
    headers: PutLogEventsHeaders;
    request: shared.PutLogEventsRequest;
}
export declare class PutLogEventsResponse extends SpeakeasyBase {
    contentType: string;
    dataAlreadyAcceptedException?: any;
    invalidParameterException?: any;
    invalidSequenceTokenException?: any;
    putLogEventsResponse?: shared.PutLogEventsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unrecognizedClientException?: any;
}
