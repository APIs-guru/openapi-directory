import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCodeRepositoryXAmzTargetEnum {
    SageMakerCreateCodeRepository = "SageMaker.CreateCodeRepository"
}
export declare class CreateCodeRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCodeRepositoryXAmzTargetEnum;
}
export declare class CreateCodeRepositoryRequest extends SpeakeasyBase {
    headers: CreateCodeRepositoryHeaders;
    request: shared.CreateCodeRepositoryInput;
}
export declare class CreateCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    createCodeRepositoryOutput?: shared.CreateCodeRepositoryOutput;
    statusCode: number;
}
