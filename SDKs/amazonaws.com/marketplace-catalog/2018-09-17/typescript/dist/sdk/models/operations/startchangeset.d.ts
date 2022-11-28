import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartChangeSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartChangeSetRequestBody extends SpeakeasyBase {
    catalog: string;
    changeSet: shared.Change[];
    changeSetName?: string;
    clientRequestToken?: string;
}
export declare class StartChangeSetRequest extends SpeakeasyBase {
    headers: StartChangeSetHeaders;
    request: StartChangeSetRequestBody;
}
export declare class StartChangeSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    startChangeSetResponse?: shared.StartChangeSetResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
