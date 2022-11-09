import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelSimulationJobBatchHeaders extends SpeakeasyBase {
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


export class CancelSimulationJobBatchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=batch" })
  batch: string;
}


export class CancelSimulationJobBatchRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelSimulationJobBatchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CancelSimulationJobBatchRequestBody;
}


export class CancelSimulationJobBatchResponse extends SpeakeasyBase {
  @Metadata()
  cancelSimulationJobBatchResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
