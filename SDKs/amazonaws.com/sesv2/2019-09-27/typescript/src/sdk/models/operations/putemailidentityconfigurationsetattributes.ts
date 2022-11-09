import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutEmailIdentityConfigurationSetAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityConfigurationSetAttributesHeaders extends SpeakeasyBase {
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


export class PutEmailIdentityConfigurationSetAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;
}


export class PutEmailIdentityConfigurationSetAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmailIdentityConfigurationSetAttributesPathParams;

  @Metadata()
  headers: PutEmailIdentityConfigurationSetAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityConfigurationSetAttributesRequestBody;
}


export class PutEmailIdentityConfigurationSetAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putEmailIdentityConfigurationSetAttributesResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
