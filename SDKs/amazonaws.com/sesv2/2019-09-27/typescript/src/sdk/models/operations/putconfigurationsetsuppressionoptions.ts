import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutConfigurationSetSuppressionOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class PutConfigurationSetSuppressionOptionsHeaders extends SpeakeasyBase {
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


export class PutConfigurationSetSuppressionOptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuppressedReasons" })
  suppressedReasons?: shared.SuppressionListReasonEnum[];
}


export class PutConfigurationSetSuppressionOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConfigurationSetSuppressionOptionsPathParams;

  @Metadata()
  headers: PutConfigurationSetSuppressionOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutConfigurationSetSuppressionOptionsRequestBody;
}


export class PutConfigurationSetSuppressionOptionsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putConfigurationSetSuppressionOptionsResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
