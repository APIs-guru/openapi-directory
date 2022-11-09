import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAnomalyDetectorHeaders extends SpeakeasyBase {
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


export class DeleteAnomalyDetectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;
}


export class DeleteAnomalyDetectorRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteAnomalyDetectorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteAnomalyDetectorRequestBody;
}


export class DeleteAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteAnomalyDetectorResponse?: Map<string, any>;

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
