import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMilestonePathParams extends SpeakeasyBase {
    milestoneNumber: number;
    workloadId: string;
}
export declare class GetMilestoneHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMilestoneRequest extends SpeakeasyBase {
    pathParams: GetMilestonePathParams;
    headers: GetMilestoneHeaders;
}
export declare class GetMilestoneResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getMilestoneOutput?: shared.GetMilestoneOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
