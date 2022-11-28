import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAppXAmzTargetEnum {
    SageMakerDeleteApp = "SageMaker.DeleteApp"
}
export declare class DeleteAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppXAmzTargetEnum;
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    headers: DeleteAppHeaders;
    request: shared.DeleteAppRequest;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    resourceNotFound?: any;
    statusCode: number;
}
