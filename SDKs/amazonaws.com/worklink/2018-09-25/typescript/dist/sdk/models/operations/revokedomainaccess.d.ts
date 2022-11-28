import { SpeakeasyBase } from "../../../internal/utils";
export declare class RevokeDomainAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RevokeDomainAccessRequestBody extends SpeakeasyBase {
    domainName: string;
    fleetArn: string;
}
export declare class RevokeDomainAccessRequest extends SpeakeasyBase {
    headers: RevokeDomainAccessHeaders;
    request: RevokeDomainAccessRequestBody;
}
export declare class RevokeDomainAccessResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    revokeDomainAccessResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
