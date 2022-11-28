import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProjectVersionXAmzTargetEnum {
    RekognitionServiceCreateProjectVersion = "RekognitionService.CreateProjectVersion"
}
export declare class CreateProjectVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProjectVersionXAmzTargetEnum;
}
export declare class CreateProjectVersionRequest extends SpeakeasyBase {
    headers: CreateProjectVersionHeaders;
    request: shared.CreateProjectVersionRequest;
}
export declare class CreateProjectVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createProjectVersionResponse?: shared.CreateProjectVersionResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
