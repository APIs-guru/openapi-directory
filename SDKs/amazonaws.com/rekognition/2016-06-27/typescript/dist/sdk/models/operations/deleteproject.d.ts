import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProjectXAmzTargetEnum {
    RekognitionServiceDeleteProject = "RekognitionService.DeleteProject"
}
export declare class DeleteProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProjectXAmzTargetEnum;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    headers: DeleteProjectHeaders;
    request: shared.DeleteProjectRequest;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteProjectResponse?: shared.DeleteProjectResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
