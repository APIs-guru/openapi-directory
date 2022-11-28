import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelChangeSetQueryParams extends SpeakeasyBase {
    catalog: string;
    changeSetId: string;
}
export declare class CancelChangeSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelChangeSetRequest extends SpeakeasyBase {
    queryParams: CancelChangeSetQueryParams;
    headers: CancelChangeSetHeaders;
}
export declare class CancelChangeSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelChangeSetResponse?: shared.CancelChangeSetResponse;
    contentType: string;
    internalServiceException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
