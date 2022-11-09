import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateIdentityProviderConfigurationHeaders extends SpeakeasyBase {
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

export enum UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum {
    Saml = "SAML"
}


export class UpdateIdentityProviderConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;

  @Metadata({ data: "json, name=IdentityProviderSamlMetadata" })
  identityProviderSamlMetadata?: string;

  @Metadata({ data: "json, name=IdentityProviderType" })
  identityProviderType: UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum;
}


export class UpdateIdentityProviderConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateIdentityProviderConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateIdentityProviderConfigurationRequestBody;
}


export class UpdateIdentityProviderConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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

  @Metadata()
  updateIdentityProviderConfigurationResponse?: Map<string, any>;
}
