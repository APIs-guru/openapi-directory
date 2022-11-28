import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAlertHeaders extends SpeakeasyBase {
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


// CreateAlertRequestBodyAction
/** 
 * A configuration that specifies the action to perform when anomalies are detected.
**/
export class CreateAlertRequestBodyAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LambdaConfiguration" })
  lambdaConfiguration?: shared.LambdaConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SNSConfiguration" })
  snsConfiguration?: shared.SnsConfiguration;
}


export class CreateAlertRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: CreateAlertRequestBodyAction;

  @SpeakeasyMetadata({ data: "json, name=AlertDescription" })
  alertDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=AlertName" })
  alertName: string;

  @SpeakeasyMetadata({ data: "json, name=AlertSensitivityThreshold" })
  alertSensitivityThreshold: number;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAlertHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAlertRequestBody;
}


export class CreateAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAlertResponse?: shared.CreateAlertResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
