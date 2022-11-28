import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CloneStackXAmzTargetEnum {
    OpsWorks20130218CloneStack = "OpsWorks_20130218.CloneStack"
}
export declare class CloneStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CloneStackXAmzTargetEnum;
}
export declare class CloneStackRequest extends SpeakeasyBase {
    headers: CloneStackHeaders;
    request: shared.CloneStackRequest;
}
export declare class CloneStackResponse extends SpeakeasyBase {
    cloneStackResult?: shared.CloneStackResult;
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
