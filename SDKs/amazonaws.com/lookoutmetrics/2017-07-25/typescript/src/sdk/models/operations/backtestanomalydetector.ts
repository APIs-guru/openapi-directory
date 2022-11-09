import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BackTestAnomalyDetectorHeaders extends SpeakeasyBase {
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


export class BackTestAnomalyDetectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;
}


export class BackTestAnomalyDetectorRequest extends SpeakeasyBase {
  @Metadata()
  headers: BackTestAnomalyDetectorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BackTestAnomalyDetectorRequestBody;
}


export class BackTestAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  backTestAnomalyDetectorResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
