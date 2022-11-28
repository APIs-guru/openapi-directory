import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAnomalyDetectorHeaders extends SpeakeasyBase {
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


// CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig
/** 
 * Contains information about a detector's configuration.
**/
export class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorFrequency" })
  anomalyDetectorFrequency?: shared.FrequencyEnum;
}


export class CreateAnomalyDetectorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorConfig" })
  anomalyDetectorConfig: CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorName" })
  anomalyDetectorName: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateAnomalyDetectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAnomalyDetectorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAnomalyDetectorRequestBody;
}


export class CreateAnomalyDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAnomalyDetectorResponse?: shared.CreateAnomalyDetectorResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
