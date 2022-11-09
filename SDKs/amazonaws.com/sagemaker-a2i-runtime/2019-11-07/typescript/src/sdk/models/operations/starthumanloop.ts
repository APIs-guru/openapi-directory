import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartHumanLoopHeaders extends SpeakeasyBase {
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


// StartHumanLoopRequestBodyDataAttributes
/** 
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
**/
export class StartHumanLoopRequestBodyDataAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentClassifiers" })
  contentClassifiers?: shared.ContentClassifierEnum[];
}


// StartHumanLoopRequestBodyHumanLoopInput
/** 
 * An object containing the human loop input in JSON format.
**/
export class StartHumanLoopRequestBodyHumanLoopInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputContent" })
  inputContent?: string;
}


export class StartHumanLoopRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAttributes" })
  dataAttributes?: StartHumanLoopRequestBodyDataAttributes;

  @Metadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @Metadata({ data: "json, name=HumanLoopInput" })
  humanLoopInput: StartHumanLoopRequestBodyHumanLoopInput;

  @Metadata({ data: "json, name=HumanLoopName" })
  humanLoopName: string;
}


export class StartHumanLoopRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartHumanLoopHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartHumanLoopRequestBody;
}


export class StartHumanLoopResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  startHumanLoopResponse?: shared.StartHumanLoopResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
