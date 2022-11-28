import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopStackXAmzTargetEnum {
    OpsWorks20130218StopStack = "OpsWorks_20130218.StopStack"
}
export declare class StopStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopStackXAmzTargetEnum;
}
export declare class StopStackRequest extends SpeakeasyBase {
    headers: StopStackHeaders;
    request: shared.StopStackRequest;
}
export declare class StopStackResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
