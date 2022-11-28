import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutConfigurationSetReputationOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class PutConfigurationSetReputationOptionsHeaders extends SpeakeasyBase {
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


export class PutConfigurationSetReputationOptionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReputationMetricsEnabled" })
  reputationMetricsEnabled?: boolean;
}


export class PutConfigurationSetReputationOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConfigurationSetReputationOptionsPathParams;

  @SpeakeasyMetadata()
  headers: PutConfigurationSetReputationOptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutConfigurationSetReputationOptionsRequestBody;
}


export class PutConfigurationSetReputationOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putConfigurationSetReputationOptionsResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
