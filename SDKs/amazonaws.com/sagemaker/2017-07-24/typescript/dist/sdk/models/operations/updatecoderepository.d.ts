import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCodeRepositoryXAmzTargetEnum {
    SageMakerUpdateCodeRepository = "SageMaker.UpdateCodeRepository"
}
export declare class UpdateCodeRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCodeRepositoryXAmzTargetEnum;
}
export declare class UpdateCodeRepositoryRequest extends SpeakeasyBase {
    headers: UpdateCodeRepositoryHeaders;
    request: shared.UpdateCodeRepositoryInput;
}
export declare class UpdateCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateCodeRepositoryOutput?: shared.UpdateCodeRepositoryOutput;
}
