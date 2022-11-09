import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterUsageXAmzTargetEnum {
    AwsmpMeteringServiceRegisterUsage = "AWSMPMeteringService.RegisterUsage"
}


export class RegisterUsageHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterUsageXAmzTargetEnum;
}


export class RegisterUsageRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterUsageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterUsageRequest;
}


export class RegisterUsageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerNotEntitledException?: any;

  @Metadata()
  disabledApiException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidProductCodeException?: any;

  @Metadata()
  invalidPublicKeyVersionException?: any;

  @Metadata()
  invalidRegionException?: any;

  @Metadata()
  platformNotSupportedException?: any;

  @Metadata()
  registerUsageResult?: shared.RegisterUsageResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
