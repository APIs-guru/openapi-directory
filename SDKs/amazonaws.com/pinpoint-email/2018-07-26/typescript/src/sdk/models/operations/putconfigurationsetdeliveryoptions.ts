import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutConfigurationSetDeliveryOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class PutConfigurationSetDeliveryOptionsHeaders extends SpeakeasyBase {
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

export enum PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum {
    Require = "REQUIRE",
    Optional = "OPTIONAL"
}


export class PutConfigurationSetDeliveryOptionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SendingPoolName" })
  sendingPoolName?: string;

  @SpeakeasyMetadata({ data: "json, name=TlsPolicy" })
  tlsPolicy?: PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum;
}


export class PutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConfigurationSetDeliveryOptionsPathParams;

  @SpeakeasyMetadata()
  headers: PutConfigurationSetDeliveryOptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutConfigurationSetDeliveryOptionsRequestBody;
}


export class PutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putConfigurationSetDeliveryOptionsResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
