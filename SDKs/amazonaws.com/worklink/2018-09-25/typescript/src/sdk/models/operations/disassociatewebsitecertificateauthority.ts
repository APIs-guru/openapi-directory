import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateWebsiteCertificateAuthorityHeaders extends SpeakeasyBase {
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


export class DisassociateWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;

  @Metadata({ data: "json, name=WebsiteCaId" })
  websiteCaId: string;
}


export class DisassociateWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateWebsiteCertificateAuthorityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DisassociateWebsiteCertificateAuthorityRequestBody;
}


export class DisassociateWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateWebsiteCertificateAuthorityResponse?: Map<string, any>;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
