import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartEngagementXAmzTargetEnum {
    SsmContactsStartEngagement = "SSMContacts.StartEngagement"
}
export declare class StartEngagementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartEngagementXAmzTargetEnum;
}
export declare class StartEngagementRequest extends SpeakeasyBase {
    headers: StartEngagementHeaders;
    request: shared.StartEngagementRequest;
}
export declare class StartEngagementResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startEngagementResult?: shared.StartEngagementResult;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
