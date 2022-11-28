import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCodeRepositoryXAmzTargetEnum {
    SageMakerDeleteCodeRepository = "SageMaker.DeleteCodeRepository"
}
export declare class DeleteCodeRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCodeRepositoryXAmzTargetEnum;
}
export declare class DeleteCodeRepositoryRequest extends SpeakeasyBase {
    headers: DeleteCodeRepositoryHeaders;
    request: shared.DeleteCodeRepositoryInput;
}
export declare class DeleteCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
