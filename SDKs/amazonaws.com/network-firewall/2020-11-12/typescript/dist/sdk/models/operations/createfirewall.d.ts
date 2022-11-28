import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFirewallXAmzTargetEnum {
    NetworkFirewall20201112CreateFirewall = "NetworkFirewall_20201112.CreateFirewall"
}
export declare class CreateFirewallHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallXAmzTargetEnum;
}
export declare class CreateFirewallRequest extends SpeakeasyBase {
    headers: CreateFirewallHeaders;
    request: shared.CreateFirewallRequest;
}
export declare class CreateFirewallResponse extends SpeakeasyBase {
    contentType: string;
    createFirewallResponse?: shared.CreateFirewallResponse;
    insufficientCapacityException?: any;
    internalServerError?: any;
    invalidOperationException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
