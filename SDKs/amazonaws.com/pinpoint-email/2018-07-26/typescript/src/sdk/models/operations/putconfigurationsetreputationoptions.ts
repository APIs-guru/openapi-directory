import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutConfigurationSetReputationOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class PutConfigurationSetReputationOptionsHeaders extends SpeakeasyBase {
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


export class PutConfigurationSetReputationOptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReputationMetricsEnabled" })
  reputationMetricsEnabled?: boolean;
}


export class PutConfigurationSetReputationOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConfigurationSetReputationOptionsPathParams;

  @Metadata()
  headers: PutConfigurationSetReputationOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutConfigurationSetReputationOptionsRequestBody;
}


export class PutConfigurationSetReputationOptionsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putConfigurationSetReputationOptionsResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
