import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCertificateXAmzTargetEnum {
    Lightsail20161128CreateCertificate = "Lightsail_20161128.CreateCertificate"
}


export class CreateCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCertificateXAmzTargetEnum;
}


export class CreateCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCertificateRequest;
}


export class CreateCertificateResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCertificateResult?: shared.CreateCertificateResult;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthenticatedException?: any;
}
