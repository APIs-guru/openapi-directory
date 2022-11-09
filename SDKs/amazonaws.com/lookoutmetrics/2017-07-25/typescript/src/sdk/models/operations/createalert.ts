import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAlertHeaders extends SpeakeasyBase {
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


// CreateAlertRequestBodyAction
/** 
 * A configuration that specifies the action to perform when anomalies are detected.
**/
export class CreateAlertRequestBodyAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=LambdaConfiguration" })
  lambdaConfiguration?: shared.LambdaConfiguration;

  @Metadata({ data: "json, name=SNSConfiguration" })
  snsConfiguration?: shared.SnsConfiguration;
}


export class CreateAlertRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: CreateAlertRequestBodyAction;

  @Metadata({ data: "json, name=AlertDescription" })
  alertDescription?: string;

  @Metadata({ data: "json, name=AlertName" })
  alertName: string;

  @Metadata({ data: "json, name=AlertSensitivityThreshold" })
  alertSensitivityThreshold: number;

  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateAlertRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAlertHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAlertRequestBody;
}


export class CreateAlertResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAlertResponse?: shared.CreateAlertResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
