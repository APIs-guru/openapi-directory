import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetachCertificateFromDistributionXAmzTargetEnum {
    Lightsail20161128DetachCertificateFromDistribution = "Lightsail_20161128.DetachCertificateFromDistribution"
}


export class DetachCertificateFromDistributionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DetachCertificateFromDistributionXAmzTargetEnum;
}


export class DetachCertificateFromDistributionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetachCertificateFromDistributionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetachCertificateFromDistributionRequest;
}


export class DetachCertificateFromDistributionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  detachCertificateFromDistributionResult?: shared.DetachCertificateFromDistributionResult;

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
