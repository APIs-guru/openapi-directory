import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFacesXAmzTargetEnum {
    RekognitionServiceDeleteFaces = "RekognitionService.DeleteFaces"
}
export declare class DeleteFacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFacesXAmzTargetEnum;
}
export declare class DeleteFacesRequest extends SpeakeasyBase {
    headers: DeleteFacesHeaders;
    request: shared.DeleteFacesRequest;
}
export declare class DeleteFacesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteFacesResponse?: shared.DeleteFacesResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
