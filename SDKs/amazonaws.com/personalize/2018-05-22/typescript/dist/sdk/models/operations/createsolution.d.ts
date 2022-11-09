import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSolutionXAmzTargetEnum {
    AmazonPersonalizeCreateSolution = "AmazonPersonalize.CreateSolution"
}
export declare class CreateSolutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSolutionXAmzTargetEnum;
}
export declare class CreateSolutionRequest extends SpeakeasyBase {
    headers: CreateSolutionHeaders;
    request: shared.CreateSolutionRequest;
}
export declare class CreateSolutionResponse extends SpeakeasyBase {
    contentType: string;
    createSolutionResponse?: shared.CreateSolutionResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
