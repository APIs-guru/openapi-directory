import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateStackXAmzTargetEnum {
    OpsWorks20130218UpdateStack = "OpsWorks_20130218.UpdateStack"
}
export declare class UpdateStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStackXAmzTargetEnum;
}
export declare class UpdateStackRequest extends SpeakeasyBase {
    headers: UpdateStackHeaders;
    request: shared.UpdateStackRequest;
}
export declare class UpdateStackResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
