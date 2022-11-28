import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UnpeerVpcXAmzTargetEnum {
    Lightsail20161128UnpeerVpc = "Lightsail_20161128.UnpeerVpc"
}
export declare class UnpeerVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnpeerVpcXAmzTargetEnum;
}
export declare class UnpeerVpcRequest extends SpeakeasyBase {
    headers: UnpeerVpcHeaders;
    request: Map<string, any>;
}
export declare class UnpeerVpcResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    unpeerVpcResult?: shared.UnpeerVpcResult;
}
