import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAppImageConfigXAmzTargetEnum {
    SageMakerDeleteAppImageConfig = "SageMaker.DeleteAppImageConfig"
}
export declare class DeleteAppImageConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppImageConfigXAmzTargetEnum;
}
export declare class DeleteAppImageConfigRequest extends SpeakeasyBase {
    headers: DeleteAppImageConfigHeaders;
    request: shared.DeleteAppImageConfigRequest;
}
export declare class DeleteAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
