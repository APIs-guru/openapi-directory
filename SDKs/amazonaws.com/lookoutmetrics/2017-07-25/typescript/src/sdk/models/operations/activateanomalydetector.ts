import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivateAnomalyDetectorHeaders extends SpeakeasyBase {
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


export class ActivateAnomalyDetectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;
}


export class ActivateAnomalyDetectorRequest extends SpeakeasyBase {
  @Metadata()
  headers: ActivateAnomalyDetectorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ActivateAnomalyDetectorRequestBody;
}


export class ActivateAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  activateAnomalyDetectorResponse?: Map<string, any>;

  @Metadata()
  conflictException?: any;

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
