import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutConfigurationSetSendingOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class PutConfigurationSetSendingOptionsHeaders extends SpeakeasyBase {
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


export class PutConfigurationSetSendingOptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}


export class PutConfigurationSetSendingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConfigurationSetSendingOptionsPathParams;

  @Metadata()
  headers: PutConfigurationSetSendingOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutConfigurationSetSendingOptionsRequestBody;
}


export class PutConfigurationSetSendingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putConfigurationSetSendingOptionsResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
