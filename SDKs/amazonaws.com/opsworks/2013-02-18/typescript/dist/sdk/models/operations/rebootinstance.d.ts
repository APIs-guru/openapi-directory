import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RebootInstanceXAmzTargetEnum {
    OpsWorks20130218RebootInstance = "OpsWorks_20130218.RebootInstance"
}
export declare class RebootInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootInstanceXAmzTargetEnum;
}
export declare class RebootInstanceRequest extends SpeakeasyBase {
    headers: RebootInstanceHeaders;
    request: shared.RebootInstanceRequest;
}
export declare class RebootInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
