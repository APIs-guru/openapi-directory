import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AttachLoadBalancerTlsCertificateXAmzTargetEnum {
    Lightsail20161128AttachLoadBalancerTlsCertificate = "Lightsail_20161128.AttachLoadBalancerTlsCertificate"
}


export class AttachLoadBalancerTlsCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: AttachLoadBalancerTlsCertificateXAmzTargetEnum;
}


export class AttachLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: AttachLoadBalancerTlsCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AttachLoadBalancerTlsCertificateRequest;
}


export class AttachLoadBalancerTlsCertificateResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountSetupInProgressException?: any;

  @Metadata()
  attachLoadBalancerTlsCertificateResult?: shared.AttachLoadBalancerTlsCertificateResult;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  operationFailureException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthenticatedException?: any;
}
