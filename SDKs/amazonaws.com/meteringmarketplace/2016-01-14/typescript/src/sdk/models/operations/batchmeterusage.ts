import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchMeterUsageXAmzTargetEnum {
    AwsmpMeteringServiceBatchMeterUsage = "AWSMPMeteringService.BatchMeterUsage"
}


export class BatchMeterUsageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchMeterUsageXAmzTargetEnum;
}


export class BatchMeterUsageRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchMeterUsageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchMeterUsageRequest;
}


export class BatchMeterUsageResponse extends SpeakeasyBase {
  @Metadata()
  batchMeterUsageResult?: shared.BatchMeterUsageResult;

  @Metadata()
  contentType: string;

  @Metadata()
  disabledApiException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidCustomerIdentifierException?: any;

  @Metadata()
  invalidProductCodeException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  invalidUsageAllocationsException?: any;

  @Metadata()
  invalidUsageDimensionException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  timestampOutOfBoundsException?: any;
}
