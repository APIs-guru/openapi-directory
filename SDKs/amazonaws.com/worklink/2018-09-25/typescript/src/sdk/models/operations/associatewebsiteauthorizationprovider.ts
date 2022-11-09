import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateWebsiteAuthorizationProviderHeaders extends SpeakeasyBase {
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

export enum AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum {
    Saml = "SAML"
}


export class AssociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationProviderType" })
  authorizationProviderType: AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class AssociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateWebsiteAuthorizationProviderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateWebsiteAuthorizationProviderRequestBody;
}


export class AssociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
  @Metadata()
  associateWebsiteAuthorizationProviderResponse?: shared.AssociateWebsiteAuthorizationProviderResponse;

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
