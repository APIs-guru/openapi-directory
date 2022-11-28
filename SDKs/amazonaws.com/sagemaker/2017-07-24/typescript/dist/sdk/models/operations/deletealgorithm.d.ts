import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAlgorithmXAmzTargetEnum {
    SageMakerDeleteAlgorithm = "SageMaker.DeleteAlgorithm"
}
export declare class DeleteAlgorithmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAlgorithmXAmzTargetEnum;
}
export declare class DeleteAlgorithmRequest extends SpeakeasyBase {
    headers: DeleteAlgorithmHeaders;
    request: shared.DeleteAlgorithmInput;
}
export declare class DeleteAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
