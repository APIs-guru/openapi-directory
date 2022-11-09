import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAnomalyDetectorHeaders extends SpeakeasyBase {
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


// UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig
/** 
 * Contains information about a detector's configuration.
**/
export class UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorFrequency" })
  anomalyDetectorFrequency?: shared.FrequencyEnum;
}


export class UpdateAnomalyDetectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @Metadata({ data: "json, name=AnomalyDetectorConfig" })
  anomalyDetectorConfig?: UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig;

  @Metadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;
}


export class UpdateAnomalyDetectorRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAnomalyDetectorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAnomalyDetectorRequestBody;
}


export class UpdateAnomalyDetectorResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

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
  updateAnomalyDetectorResponse?: shared.UpdateAnomalyDetectorResponse;

  @Metadata()
  validationException?: any;
}
