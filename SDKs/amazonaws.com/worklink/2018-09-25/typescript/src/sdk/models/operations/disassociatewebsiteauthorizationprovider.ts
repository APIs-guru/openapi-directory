import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateWebsiteAuthorizationProviderHeaders extends SpeakeasyBase {
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


export class DisassociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationProviderId" })
  authorizationProviderId: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class DisassociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateWebsiteAuthorizationProviderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DisassociateWebsiteAuthorizationProviderRequestBody;
}


export class DisassociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateWebsiteAuthorizationProviderResponse?: Map<string, any>;

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
