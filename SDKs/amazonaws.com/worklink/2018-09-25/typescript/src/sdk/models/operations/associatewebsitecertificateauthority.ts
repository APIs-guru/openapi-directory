import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateWebsiteCertificateAuthorityHeaders extends SpeakeasyBase {
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
}


export class AssociateWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class AssociateWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateWebsiteCertificateAuthorityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateWebsiteCertificateAuthorityRequestBody;
}


export class AssociateWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata()
  associateWebsiteCertificateAuthorityResponse?: shared.AssociateWebsiteCertificateAuthorityResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
