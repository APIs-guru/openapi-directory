import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PeerVpcXAmzTargetEnum {
    Lightsail20161128PeerVpc = "Lightsail_20161128.PeerVpc"
}
export declare class PeerVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PeerVpcXAmzTargetEnum;
}
export declare class PeerVpcRequest extends SpeakeasyBase {
    headers: PeerVpcHeaders;
    request: Map<string, any>;
}
export declare class PeerVpcResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    peerVpcResult?: shared.PeerVpcResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
