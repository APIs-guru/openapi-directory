import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RestoreDomainAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RestoreDomainAccessRequestBody extends SpeakeasyBase {
    domainName: string;
    fleetArn: string;
}
export declare class RestoreDomainAccessRequest extends SpeakeasyBase {
    headers: RestoreDomainAccessHeaders;
    request: RestoreDomainAccessRequestBody;
}
export declare class RestoreDomainAccessResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    restoreDomainAccessResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
