import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInstanceXAmzTargetEnum {
    OpsWorks20130218DeleteInstance = "OpsWorks_20130218.DeleteInstance"
}
export declare class DeleteInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInstanceXAmzTargetEnum;
}
export declare class DeleteInstanceRequest extends SpeakeasyBase {
    headers: DeleteInstanceHeaders;
    request: shared.DeleteInstanceRequest;
}
export declare class DeleteInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
