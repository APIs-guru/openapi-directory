import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartHumanLoopHeaders extends SpeakeasyBase {
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


// StartHumanLoopRequestBodyDataAttributes
/** 
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
**/
export class StartHumanLoopRequestBodyDataAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentClassifiers" })
  contentClassifiers?: shared.ContentClassifierEnum[];
}


// StartHumanLoopRequestBodyHumanLoopInput
/** 
 * An object containing the human loop input in JSON format.
**/
export class StartHumanLoopRequestBodyHumanLoopInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputContent" })
  inputContent?: string;
}


export class StartHumanLoopRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAttributes" })
  dataAttributes?: StartHumanLoopRequestBodyDataAttributes;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopInput" })
  humanLoopInput: StartHumanLoopRequestBodyHumanLoopInput;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopName" })
  humanLoopName: string;
}


export class StartHumanLoopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartHumanLoopHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartHumanLoopRequestBody;
}


export class StartHumanLoopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  startHumanLoopResponse?: shared.StartHumanLoopResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
