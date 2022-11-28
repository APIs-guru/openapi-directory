import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProjectVersionXAmzTargetEnum {
    RekognitionServiceDeleteProjectVersion = "RekognitionService.DeleteProjectVersion"
}
export declare class DeleteProjectVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProjectVersionXAmzTargetEnum;
}
export declare class DeleteProjectVersionRequest extends SpeakeasyBase {
    headers: DeleteProjectVersionHeaders;
    request: shared.DeleteProjectVersionRequest;
}
export declare class DeleteProjectVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteProjectVersionResponse?: shared.DeleteProjectVersionResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
