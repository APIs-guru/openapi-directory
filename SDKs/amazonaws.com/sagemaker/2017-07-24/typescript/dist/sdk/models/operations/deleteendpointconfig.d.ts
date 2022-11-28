import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEndpointConfigXAmzTargetEnum {
    SageMakerDeleteEndpointConfig = "SageMaker.DeleteEndpointConfig"
}
export declare class DeleteEndpointConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointConfigXAmzTargetEnum;
}
export declare class DeleteEndpointConfigRequest extends SpeakeasyBase {
    headers: DeleteEndpointConfigHeaders;
    request: shared.DeleteEndpointConfigInput;
}
export declare class DeleteEndpointConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
