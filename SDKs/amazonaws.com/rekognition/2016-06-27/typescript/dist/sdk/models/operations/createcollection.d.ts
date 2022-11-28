import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCollectionXAmzTargetEnum {
    RekognitionServiceCreateCollection = "RekognitionService.CreateCollection"
}
export declare class CreateCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCollectionXAmzTargetEnum;
}
export declare class CreateCollectionRequest extends SpeakeasyBase {
    headers: CreateCollectionHeaders;
    request: shared.CreateCollectionRequest;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createCollectionResponse?: shared.CreateCollectionResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
