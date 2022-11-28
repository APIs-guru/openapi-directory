import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSolutionXAmzTargetEnum {
    AmazonPersonalizeDeleteSolution = "AmazonPersonalize.DeleteSolution"
}
export declare class DeleteSolutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSolutionXAmzTargetEnum;
}
export declare class DeleteSolutionRequest extends SpeakeasyBase {
    headers: DeleteSolutionHeaders;
    request: shared.DeleteSolutionRequest;
}
export declare class DeleteSolutionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
