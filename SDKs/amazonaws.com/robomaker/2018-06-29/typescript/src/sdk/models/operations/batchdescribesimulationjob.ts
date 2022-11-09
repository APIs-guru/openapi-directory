import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDescribeSimulationJobHeaders extends SpeakeasyBase {
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


export class BatchDescribeSimulationJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs" })
  jobs: string[];
}


export class BatchDescribeSimulationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDescribeSimulationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchDescribeSimulationJobRequestBody;
}


export class BatchDescribeSimulationJobResponse extends SpeakeasyBase {
  @Metadata()
  batchDescribeSimulationJobResponse?: shared.BatchDescribeSimulationJobResponse;

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
