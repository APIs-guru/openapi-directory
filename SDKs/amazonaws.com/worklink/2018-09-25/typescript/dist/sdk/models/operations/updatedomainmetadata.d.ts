import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDomainMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDomainMetadataRequestBody extends SpeakeasyBase {
    displayName?: string;
    domainName: string;
    fleetArn: string;
}
export declare class UpdateDomainMetadataRequest extends SpeakeasyBase {
    headers: UpdateDomainMetadataHeaders;
    request: UpdateDomainMetadataRequestBody;
}
export declare class UpdateDomainMetadataResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    updateDomainMetadataResponse?: Map<string, any>;
}
