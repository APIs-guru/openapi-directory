import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopSolutionVersionCreationXAmzTargetEnum {
    AmazonPersonalizeStopSolutionVersionCreation = "AmazonPersonalize.StopSolutionVersionCreation"
}
export declare class StopSolutionVersionCreationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopSolutionVersionCreationXAmzTargetEnum;
}
export declare class StopSolutionVersionCreationRequest extends SpeakeasyBase {
    headers: StopSolutionVersionCreationHeaders;
    request: shared.StopSolutionVersionCreationRequest;
}
export declare class StopSolutionVersionCreationResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
