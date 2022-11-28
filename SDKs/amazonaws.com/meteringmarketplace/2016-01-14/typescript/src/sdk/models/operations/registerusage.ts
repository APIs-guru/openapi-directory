import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RegisterUsageXAmzTargetEnum {
    AwsmpMeteringServiceRegisterUsage = "AWSMPMeteringService.RegisterUsage"
}


export class RegisterUsageHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterUsageXAmzTargetEnum;
}


export class RegisterUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterUsageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RegisterUsageRequest;
}


export class RegisterUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerNotEntitledException?: any;

  @SpeakeasyMetadata()
  disabledApiException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidProductCodeException?: any;

  @SpeakeasyMetadata()
  invalidPublicKeyVersionException?: any;

  @SpeakeasyMetadata()
  invalidRegionException?: any;

  @SpeakeasyMetadata()
  platformNotSupportedException?: any;

  @SpeakeasyMetadata()
  registerUsageResult?: shared.RegisterUsageResult;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
