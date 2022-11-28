import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartSimulationJobBatchHeaders extends SpeakeasyBase {
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


// StartSimulationJobBatchRequestBodyBatchPolicy
/** 
 * Information about the batch policy.
**/
export class StartSimulationJobBatchRequestBodyBatchPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxConcurrency" })
  maxConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}


export class StartSimulationJobBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchPolicy" })
  batchPolicy?: StartSimulationJobBatchRequestBodyBatchPolicy;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=createSimulationJobRequests", elemType: shared.SimulationJobRequest })
  createSimulationJobRequests: shared.SimulationJobRequest[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class StartSimulationJobBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartSimulationJobBatchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartSimulationJobBatchRequestBody;
}


export class StartSimulationJobBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  startSimulationJobBatchResponse?: shared.StartSimulationJobBatchResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
