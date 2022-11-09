import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDomainRequestBody extends SpeakeasyBase {
    domainName: string;
    fleetArn: string;
}
export declare class DescribeDomainRequest extends SpeakeasyBase {
    headers: DescribeDomainHeaders;
    request: DescribeDomainRequestBody;
}
export declare class DescribeDomainResponse extends SpeakeasyBase {
    contentType: string;
    describeDomainResponse?: shared.DescribeDomainResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
