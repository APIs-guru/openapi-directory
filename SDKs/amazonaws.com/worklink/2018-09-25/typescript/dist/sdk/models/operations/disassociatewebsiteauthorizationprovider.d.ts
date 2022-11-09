import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisassociateWebsiteAuthorizationProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
    authorizationProviderId: string;
    fleetArn: string;
}
export declare class DisassociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
    headers: DisassociateWebsiteAuthorizationProviderHeaders;
    request: DisassociateWebsiteAuthorizationProviderRequestBody;
}
export declare class DisassociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
    contentType: string;
    disassociateWebsiteAuthorizationProviderResponse?: Map<string, any>;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
