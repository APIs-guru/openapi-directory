import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAnomalyDetectorHeaders extends SpeakeasyBase {
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


// UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig
/** 
 * Contains information about a detector's configuration.
**/
export class UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorFrequency" })
  anomalyDetectorFrequency?: shared.FrequencyEnum;
}


export class UpdateAnomalyDetectorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorConfig" })
  anomalyDetectorConfig?: UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;
}


export class UpdateAnomalyDetectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateAnomalyDetectorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAnomalyDetectorRequestBody;
}


export class UpdateAnomalyDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateAnomalyDetectorResponse?: shared.UpdateAnomalyDetectorResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
