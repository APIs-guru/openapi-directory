import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum MeterUsageXAmzTargetEnum {
    AwsmpMeteringServiceMeterUsage = "AWSMPMeteringService.MeterUsage"
}


export class MeterUsageHeaders extends SpeakeasyBase {
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
  xAmzTarget: MeterUsageXAmzTargetEnum;
}


export class MeterUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: MeterUsageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MeterUsageRequest;
}


export class MeterUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerNotEntitledException?: any;

  @SpeakeasyMetadata()
  duplicateRequestException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidEndpointRegionException?: any;

  @SpeakeasyMetadata()
  invalidProductCodeException?: any;

  @SpeakeasyMetadata()
  invalidTagException?: any;

  @SpeakeasyMetadata()
  invalidUsageAllocationsException?: any;

  @SpeakeasyMetadata()
  invalidUsageDimensionException?: any;

  @SpeakeasyMetadata()
  meterUsageResult?: shared.MeterUsageResult;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  timestampOutOfBoundsException?: any;
}
