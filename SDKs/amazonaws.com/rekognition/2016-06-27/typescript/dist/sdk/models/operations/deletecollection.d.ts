import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCollectionXAmzTargetEnum {
    RekognitionServiceDeleteCollection = "RekognitionService.DeleteCollection"
}
export declare class DeleteCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCollectionXAmzTargetEnum;
}
export declare class DeleteCollectionRequest extends SpeakeasyBase {
    headers: DeleteCollectionHeaders;
    request: shared.DeleteCollectionRequest;
}
export declare class DeleteCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteCollectionResponse?: shared.DeleteCollectionResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
