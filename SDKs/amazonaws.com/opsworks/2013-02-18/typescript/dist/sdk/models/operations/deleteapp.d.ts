import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAppXAmzTargetEnum {
    OpsWorks20130218DeleteApp = "OpsWorks_20130218.DeleteApp"
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
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
