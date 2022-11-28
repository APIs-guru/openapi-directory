import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopEngagementXAmzTargetEnum {
    SsmContactsStopEngagement = "SSMContacts.StopEngagement"
}
export declare class StopEngagementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEngagementXAmzTargetEnum;
}
export declare class StopEngagementRequest extends SpeakeasyBase {
    headers: StopEngagementHeaders;
    request: shared.StopEngagementRequest;
}
export declare class StopEngagementResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopEngagementResult?: Map<string, any>;
    throttlingException?: any;
    validationException?: any;
}
