import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateSubnetsXAmzTargetEnum {
    NetworkFirewall20201112AssociateSubnets = "NetworkFirewall_20201112.AssociateSubnets"
}
export declare class AssociateSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateSubnetsXAmzTargetEnum;
}
export declare class AssociateSubnetsRequest extends SpeakeasyBase {
    headers: AssociateSubnetsHeaders;
    request: shared.AssociateSubnetsRequest;
}
export declare class AssociateSubnetsResponse extends SpeakeasyBase {
    associateSubnetsResponse?: shared.AssociateSubnetsResponse;
    contentType: string;
    insufficientCapacityException?: any;
    internalServerError?: any;
    invalidOperationException?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
