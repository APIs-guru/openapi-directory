import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAnswerPathParams extends SpeakeasyBase {
    lensAlias: string;
    questionId: string;
    workloadId: string;
}
export declare class UpdateAnswerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAnswerRequestBodyReasonEnum {
    OutOfScope = "OUT_OF_SCOPE",
    BusinessPriorities = "BUSINESS_PRIORITIES",
    ArchitectureConstraints = "ARCHITECTURE_CONSTRAINTS",
    Other = "OTHER",
    None = "NONE"
}
export declare class UpdateAnswerRequestBody extends SpeakeasyBase {
    choiceUpdates?: Map<string, shared.ChoiceUpdate>;
    isApplicable?: boolean;
    notes?: string;
    reason?: UpdateAnswerRequestBodyReasonEnum;
    selectedChoices?: string[];
}
export declare class UpdateAnswerRequest extends SpeakeasyBase {
    pathParams: UpdateAnswerPathParams;
    headers: UpdateAnswerHeaders;
    request: UpdateAnswerRequestBody;
}
export declare class UpdateAnswerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAnswerOutput?: shared.UpdateAnswerOutput;
    validationException?: any;
}
