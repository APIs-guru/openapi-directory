import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AssociateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateDomainRequestBody extends SpeakeasyBase {
    acmCertificateArn: string;
    displayName?: string;
    domainName: string;
    fleetArn: string;
}
export declare class AssociateDomainRequest extends SpeakeasyBase {
    headers: AssociateDomainHeaders;
    request: AssociateDomainRequestBody;
}
export declare class AssociateDomainResponse extends SpeakeasyBase {
    associateDomainResponse?: Map<string, any>;
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
