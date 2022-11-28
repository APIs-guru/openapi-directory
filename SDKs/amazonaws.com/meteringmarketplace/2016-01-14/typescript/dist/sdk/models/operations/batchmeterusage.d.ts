import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchMeterUsageXAmzTargetEnum {
    AwsmpMeteringServiceBatchMeterUsage = "AWSMPMeteringService.BatchMeterUsage"
}
export declare class BatchMeterUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchMeterUsageXAmzTargetEnum;
}
export declare class BatchMeterUsageRequest extends SpeakeasyBase {
    headers: BatchMeterUsageHeaders;
    request: shared.BatchMeterUsageRequest;
}
export declare class BatchMeterUsageResponse extends SpeakeasyBase {
    batchMeterUsageResult?: shared.BatchMeterUsageResult;
    contentType: string;
    disabledApiException?: any;
    internalServiceErrorException?: any;
    invalidCustomerIdentifierException?: any;
    invalidProductCodeException?: any;
    invalidTagException?: any;
    invalidUsageAllocationsException?: any;
    invalidUsageDimensionException?: any;
    statusCode: number;
    throttlingException?: any;
    timestampOutOfBoundsException?: any;
}
