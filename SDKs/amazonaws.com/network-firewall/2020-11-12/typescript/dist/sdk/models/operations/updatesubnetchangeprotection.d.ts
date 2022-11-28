import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSubnetChangeProtectionXAmzTargetEnum {
    NetworkFirewall20201112UpdateSubnetChangeProtection = "NetworkFirewall_20201112.UpdateSubnetChangeProtection"
}
export declare class UpdateSubnetChangeProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubnetChangeProtectionXAmzTargetEnum;
}
export declare class UpdateSubnetChangeProtectionRequest extends SpeakeasyBase {
    headers: UpdateSubnetChangeProtectionHeaders;
    request: shared.UpdateSubnetChangeProtectionRequest;
}
export declare class UpdateSubnetChangeProtectionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    resourceOwnerCheckException?: any;
    statusCode: number;
    throttlingException?: any;
    updateSubnetChangeProtectionResponse?: shared.UpdateSubnetChangeProtectionResponse;
}
