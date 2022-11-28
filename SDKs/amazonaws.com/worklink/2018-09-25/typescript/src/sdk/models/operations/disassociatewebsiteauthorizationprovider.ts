import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateWebsiteAuthorizationProviderHeaders extends SpeakeasyBase {
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


export class DisassociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationProviderId" })
  authorizationProviderId: string;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class DisassociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DisassociateWebsiteAuthorizationProviderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DisassociateWebsiteAuthorizationProviderRequestBody;
}


export class DisassociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disassociateWebsiteAuthorizationProviderResponse?: Map<string, any>;

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
