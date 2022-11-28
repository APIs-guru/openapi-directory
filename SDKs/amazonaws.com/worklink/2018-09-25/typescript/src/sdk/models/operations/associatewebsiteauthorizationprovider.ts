import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssociateWebsiteAuthorizationProviderHeaders extends SpeakeasyBase {
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
}

export enum AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum {
    Saml = "SAML"
}


export class AssociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationProviderType" })
  authorizationProviderType: AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class AssociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateWebsiteAuthorizationProviderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssociateWebsiteAuthorizationProviderRequestBody;
}


export class AssociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateWebsiteAuthorizationProviderResponse?: shared.AssociateWebsiteAuthorizationProviderResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
