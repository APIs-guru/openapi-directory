import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisassociateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateDomainRequestBody extends SpeakeasyBase {
    domainName: string;
    fleetArn: string;
}
export declare class DisassociateDomainRequest extends SpeakeasyBase {
    headers: DisassociateDomainHeaders;
    request: DisassociateDomainRequestBody;
}
export declare class DisassociateDomainResponse extends SpeakeasyBase {
    contentType: string;
    disassociateDomainResponse?: Map<string, any>;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
