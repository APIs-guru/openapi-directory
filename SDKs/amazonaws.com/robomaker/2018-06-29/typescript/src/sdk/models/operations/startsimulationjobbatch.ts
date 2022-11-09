import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartSimulationJobBatchHeaders extends SpeakeasyBase {
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


// StartSimulationJobBatchRequestBodyBatchPolicy
/** 
 * Information about the batch policy.
**/
export class StartSimulationJobBatchRequestBodyBatchPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxConcurrency" })
  maxConcurrency?: number;

  @Metadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}


export class StartSimulationJobBatchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchPolicy" })
  batchPolicy?: StartSimulationJobBatchRequestBodyBatchPolicy;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=createSimulationJobRequests", elemType: shared.SimulationJobRequest })
  createSimulationJobRequests: shared.SimulationJobRequest[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class StartSimulationJobBatchRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartSimulationJobBatchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartSimulationJobBatchRequestBody;
}


export class StartSimulationJobBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  startSimulationJobBatchResponse?: shared.StartSimulationJobBatchResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
