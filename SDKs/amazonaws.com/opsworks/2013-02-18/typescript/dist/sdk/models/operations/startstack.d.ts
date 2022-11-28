import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartStackXAmzTargetEnum {
    OpsWorks20130218StartStack = "OpsWorks_20130218.StartStack"
}
export declare class StartStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartStackXAmzTargetEnum;
}
export declare class StartStackRequest extends SpeakeasyBase {
    headers: StartStackHeaders;
    request: shared.StartStackRequest;
}
export declare class StartStackResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
