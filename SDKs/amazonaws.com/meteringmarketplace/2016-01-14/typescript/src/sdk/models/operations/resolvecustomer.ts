import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResolveCustomerXAmzTargetEnum {
    AwsmpMeteringServiceResolveCustomer = "AWSMPMeteringService.ResolveCustomer"
}


export class ResolveCustomerHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResolveCustomerXAmzTargetEnum;
}


export class ResolveCustomerRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResolveCustomerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResolveCustomerRequest;
}


export class ResolveCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disabledApiException?: any;

  @Metadata()
  expiredTokenException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidTokenException?: any;

  @Metadata()
  resolveCustomerResult?: shared.ResolveCustomerResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
