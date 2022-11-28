import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDimensionKeysXAmzTargetEnum {
    PerformanceInsightsv20180227DescribeDimensionKeys = "PerformanceInsightsv20180227.DescribeDimensionKeys"
}
export declare class DescribeDimensionKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDimensionKeysXAmzTargetEnum;
}
export declare class DescribeDimensionKeysRequest extends SpeakeasyBase {
    headers: DescribeDimensionKeysHeaders;
    request: shared.DescribeDimensionKeysRequest;
}
export declare class DescribeDimensionKeysResponse extends SpeakeasyBase {
    contentType: string;
    describeDimensionKeysResponse?: shared.DescribeDimensionKeysResponse;
    internalServiceError?: any;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    statusCode: number;
}
