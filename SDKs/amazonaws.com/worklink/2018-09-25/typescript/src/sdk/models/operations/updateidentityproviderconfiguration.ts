import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateIdentityProviderConfigurationHeaders extends SpeakeasyBase {
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

export enum UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum {
    Saml = "SAML"
}


export class UpdateIdentityProviderConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderSamlMetadata" })
  identityProviderSamlMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderType" })
  identityProviderType: UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum;
}


export class UpdateIdentityProviderConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateIdentityProviderConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateIdentityProviderConfigurationRequestBody;
}


export class UpdateIdentityProviderConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateIdentityProviderConfigurationResponse?: Map<string, any>;
}
