import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelXAmzTargetEnum {
    SageMakerDeleteModel = "SageMaker.DeleteModel"
}
export declare class DeleteModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelXAmzTargetEnum;
}
export declare class DeleteModelRequest extends SpeakeasyBase {
    headers: DeleteModelHeaders;
    request: shared.DeleteModelInput;
}
export declare class DeleteModelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
