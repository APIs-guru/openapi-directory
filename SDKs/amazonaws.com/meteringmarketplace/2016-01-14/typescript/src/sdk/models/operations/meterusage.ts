import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MeterUsageXAmzTargetEnum {
    AwsmpMeteringServiceMeterUsage = "AWSMPMeteringService.MeterUsage"
}


export class MeterUsageHeaders extends SpeakeasyBase {
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
  xAmzTarget: MeterUsageXAmzTargetEnum;
}


export class MeterUsageRequest extends SpeakeasyBase {
  @Metadata()
  headers: MeterUsageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MeterUsageRequest;
}


export class MeterUsageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerNotEntitledException?: any;

  @Metadata()
  duplicateRequestException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidEndpointRegionException?: any;

  @Metadata()
  invalidProductCodeException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  invalidUsageAllocationsException?: any;

  @Metadata()
  invalidUsageDimensionException?: any;

  @Metadata()
  meterUsageResult?: shared.MeterUsageResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  timestampOutOfBoundsException?: any;
}
