import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAlgorithmXAmzTargetEnum {
    SageMakerCreateAlgorithm = "SageMaker.CreateAlgorithm"
}
export declare class CreateAlgorithmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAlgorithmXAmzTargetEnum;
}
export declare class CreateAlgorithmRequest extends SpeakeasyBase {
    headers: CreateAlgorithmHeaders;
    request: shared.CreateAlgorithmInput;
}
export declare class CreateAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    createAlgorithmOutput?: shared.CreateAlgorithmOutput;
    statusCode: number;
}
