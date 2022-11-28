import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnomalyGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAnomalyGroupRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    anomalyGroupId: string;
}
export declare class GetAnomalyGroupRequest extends SpeakeasyBase {
    headers: GetAnomalyGroupHeaders;
    request: GetAnomalyGroupRequestBody;
}
export declare class GetAnomalyGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAnomalyGroupResponse?: shared.GetAnomalyGroupResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
