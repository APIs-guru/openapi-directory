import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MeterUsageXAmzTargetEnum {
    AwsmpMeteringServiceMeterUsage = "AWSMPMeteringService.MeterUsage"
}
export declare class MeterUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MeterUsageXAmzTargetEnum;
}
export declare class MeterUsageRequest extends SpeakeasyBase {
    headers: MeterUsageHeaders;
    request: shared.MeterUsageRequest;
}
export declare class MeterUsageResponse extends SpeakeasyBase {
    contentType: string;
    customerNotEntitledException?: any;
    duplicateRequestException?: any;
    internalServiceErrorException?: any;
    invalidEndpointRegionException?: any;
    invalidProductCodeException?: any;
    invalidTagException?: any;
    invalidUsageAllocationsException?: any;
    invalidUsageDimensionException?: any;
    meterUsageResult?: shared.MeterUsageResult;
    statusCode: number;
    throttlingException?: any;
    timestampOutOfBoundsException?: any;
}
