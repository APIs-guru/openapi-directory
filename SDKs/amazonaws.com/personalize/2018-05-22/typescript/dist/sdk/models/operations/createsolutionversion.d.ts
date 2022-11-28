import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSolutionVersionXAmzTargetEnum {
    AmazonPersonalizeCreateSolutionVersion = "AmazonPersonalize.CreateSolutionVersion"
}
export declare class CreateSolutionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSolutionVersionXAmzTargetEnum;
}
export declare class CreateSolutionVersionRequest extends SpeakeasyBase {
    headers: CreateSolutionVersionHeaders;
    request: shared.CreateSolutionVersionRequest;
}
export declare class CreateSolutionVersionResponse extends SpeakeasyBase {
    contentType: string;
    createSolutionVersionResponse?: shared.CreateSolutionVersionResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
