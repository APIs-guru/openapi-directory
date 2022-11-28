import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TestIdentityProviderXAmzTargetEnum {
    TransferServiceTestIdentityProvider = "TransferService.TestIdentityProvider"
}
export declare class TestIdentityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestIdentityProviderXAmzTargetEnum;
}
export declare class TestIdentityProviderRequest extends SpeakeasyBase {
    headers: TestIdentityProviderHeaders;
    request: shared.TestIdentityProviderRequest;
}
export declare class TestIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    testIdentityProviderResponse?: shared.TestIdentityProviderResponse;
}
