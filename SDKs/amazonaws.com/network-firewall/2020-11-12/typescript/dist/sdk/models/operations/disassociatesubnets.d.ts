import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateSubnetsXAmzTargetEnum {
    NetworkFirewall20201112DisassociateSubnets = "NetworkFirewall_20201112.DisassociateSubnets"
}
export declare class DisassociateSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateSubnetsXAmzTargetEnum;
}
export declare class DisassociateSubnetsRequest extends SpeakeasyBase {
    headers: DisassociateSubnetsHeaders;
    request: shared.DisassociateSubnetsRequest;
}
export declare class DisassociateSubnetsResponse extends SpeakeasyBase {
    contentType: string;
    disassociateSubnetsResponse?: shared.DisassociateSubnetsResponse;
    internalServerError?: any;
    invalidOperationException?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
