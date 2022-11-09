import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartIncidentHeaders extends SpeakeasyBase {
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


// StartIncidentRequestBodyTriggerDetails
/** 
 * Details about what caused the incident to be created in Incident Manager.
**/
export class StartIncidentRequestBodyTriggerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawData" })
  rawData?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=triggerArn" })
  triggerArn?: string;
}


export class StartIncidentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=impact" })
  impact?: number;

  @Metadata({ data: "json, name=relatedItems", elemType: shared.RelatedItem })
  relatedItems?: shared.RelatedItem[];

  @Metadata({ data: "json, name=responsePlanArn" })
  responsePlanArn: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=triggerDetails" })
  triggerDetails?: StartIncidentRequestBodyTriggerDetails;
}


export class StartIncidentRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartIncidentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartIncidentRequestBody;
}


export class StartIncidentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startIncidentOutput?: shared.StartIncidentOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
