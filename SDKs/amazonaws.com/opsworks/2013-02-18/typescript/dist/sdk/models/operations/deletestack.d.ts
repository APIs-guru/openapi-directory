import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStackXAmzTargetEnum {
    OpsWorks20130218DeleteStack = "OpsWorks_20130218.DeleteStack"
}
export declare class DeleteStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStackXAmzTargetEnum;
}
export declare class DeleteStackRequest extends SpeakeasyBase {
    headers: DeleteStackHeaders;
    request: shared.DeleteStackRequest;
}
export declare class DeleteStackResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
