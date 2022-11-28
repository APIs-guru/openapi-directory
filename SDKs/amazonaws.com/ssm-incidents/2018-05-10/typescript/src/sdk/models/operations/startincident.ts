import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartIncidentHeaders extends SpeakeasyBase {
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


// StartIncidentRequestBodyTriggerDetails
/** 
 * Details about what caused the incident to be created in Incident Manager.
**/
export class StartIncidentRequestBodyTriggerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawData" })
  rawData?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=triggerArn" })
  triggerArn?: string;
}


export class StartIncidentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=impact" })
  impact?: number;

  @SpeakeasyMetadata({ data: "json, name=relatedItems", elemType: shared.RelatedItem })
  relatedItems?: shared.RelatedItem[];

  @SpeakeasyMetadata({ data: "json, name=responsePlanArn" })
  responsePlanArn: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerDetails" })
  triggerDetails?: StartIncidentRequestBodyTriggerDetails;
}


export class StartIncidentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartIncidentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartIncidentRequestBody;
}


export class StartIncidentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  startIncidentOutput?: shared.StartIncidentOutput;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
