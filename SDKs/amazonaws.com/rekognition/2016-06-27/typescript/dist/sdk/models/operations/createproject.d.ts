import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProjectXAmzTargetEnum {
    RekognitionServiceCreateProject = "RekognitionService.CreateProject"
}
export declare class CreateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProjectXAmzTargetEnum;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    headers: CreateProjectHeaders;
    request: shared.CreateProjectRequest;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createProjectResponse?: shared.CreateProjectResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    statusCode: number;
    throttlingException?: any;
}
