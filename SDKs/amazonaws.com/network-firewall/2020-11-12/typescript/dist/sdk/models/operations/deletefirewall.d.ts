import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFirewallXAmzTargetEnum {
    NetworkFirewall20201112DeleteFirewall = "NetworkFirewall_20201112.DeleteFirewall"
}
export declare class DeleteFirewallHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallXAmzTargetEnum;
}
export declare class DeleteFirewallRequest extends SpeakeasyBase {
    headers: DeleteFirewallHeaders;
    request: shared.DeleteFirewallRequest;
}
export declare class DeleteFirewallResponse extends SpeakeasyBase {
    contentType: string;
    deleteFirewallResponse?: shared.DeleteFirewallResponse;
    internalServerError?: any;
    invalidOperationException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unsupportedOperationException?: any;
}
