import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAnomalyDetectorHeaders extends SpeakeasyBase {
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


// CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig
/** 
 * Contains information about a detector's configuration.
**/
export class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorFrequency" })
  anomalyDetectorFrequency?: shared.FrequencyEnum;
}


export class CreateAnomalyDetectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorConfig" })
  anomalyDetectorConfig: CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig;

  @Metadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @Metadata({ data: "json, name=AnomalyDetectorName" })
  anomalyDetectorName: string;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateAnomalyDetectorRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAnomalyDetectorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAnomalyDetectorRequestBody;
}


export class CreateAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAnomalyDetectorResponse?: shared.CreateAnomalyDetectorResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
