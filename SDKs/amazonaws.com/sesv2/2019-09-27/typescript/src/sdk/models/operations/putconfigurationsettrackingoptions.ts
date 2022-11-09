import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutConfigurationSetTrackingOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class PutConfigurationSetTrackingOptionsHeaders extends SpeakeasyBase {
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


export class PutConfigurationSetTrackingOptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomRedirectDomain" })
  customRedirectDomain?: string;
}


export class PutConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConfigurationSetTrackingOptionsPathParams;

  @Metadata()
  headers: PutConfigurationSetTrackingOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutConfigurationSetTrackingOptionsRequestBody;
}


export class PutConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putConfigurationSetTrackingOptionsResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
