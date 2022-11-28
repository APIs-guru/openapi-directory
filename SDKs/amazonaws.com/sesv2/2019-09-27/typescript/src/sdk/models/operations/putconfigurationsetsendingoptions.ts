import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutConfigurationSetSendingOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class PutConfigurationSetSendingOptionsHeaders extends SpeakeasyBase {
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


export class PutConfigurationSetSendingOptionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}


export class PutConfigurationSetSendingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConfigurationSetSendingOptionsPathParams;

  @SpeakeasyMetadata()
  headers: PutConfigurationSetSendingOptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutConfigurationSetSendingOptionsRequestBody;
}


export class PutConfigurationSetSendingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putConfigurationSetSendingOptionsResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
