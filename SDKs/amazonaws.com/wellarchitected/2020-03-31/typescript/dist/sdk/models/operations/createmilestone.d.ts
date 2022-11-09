import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateMilestonePathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class CreateMilestoneHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMilestoneRequestBody extends SpeakeasyBase {
    clientRequestToken: string;
    milestoneName: string;
}
export declare class CreateMilestoneRequest extends SpeakeasyBase {
    pathParams: CreateMilestonePathParams;
    headers: CreateMilestoneHeaders;
    request: CreateMilestoneRequestBody;
}
export declare class CreateMilestoneResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createMilestoneOutput?: shared.CreateMilestoneOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
