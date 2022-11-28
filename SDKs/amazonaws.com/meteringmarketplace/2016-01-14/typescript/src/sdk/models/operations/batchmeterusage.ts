import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchMeterUsageXAmzTargetEnum {
    AwsmpMeteringServiceBatchMeterUsage = "AWSMPMeteringService.BatchMeterUsage"
}


export class BatchMeterUsageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchMeterUsageXAmzTargetEnum;
}


export class BatchMeterUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchMeterUsageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchMeterUsageRequest;
}


export class BatchMeterUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchMeterUsageResult?: shared.BatchMeterUsageResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disabledApiException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidCustomerIdentifierException?: any;

  @SpeakeasyMetadata()
  invalidProductCodeException?: any;

  @SpeakeasyMetadata()
  invalidTagException?: any;

  @SpeakeasyMetadata()
  invalidUsageAllocationsException?: any;

  @SpeakeasyMetadata()
  invalidUsageDimensionException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  timestampOutOfBoundsException?: any;
}
