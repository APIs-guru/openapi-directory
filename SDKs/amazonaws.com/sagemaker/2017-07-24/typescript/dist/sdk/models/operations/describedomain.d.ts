import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDomainXAmzTargetEnum {
    SageMakerDescribeDomain = "SageMaker.DescribeDomain"
}
export declare class DescribeDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDomainXAmzTargetEnum;
}
export declare class DescribeDomainRequest extends SpeakeasyBase {
    headers: DescribeDomainHeaders;
    request: shared.DescribeDomainRequest;
}
export declare class DescribeDomainResponse extends SpeakeasyBase {
    contentType: string;
    describeDomainResponse?: shared.DescribeDomainResponse;
    resourceNotFound?: any;
    statusCode: number;
}
