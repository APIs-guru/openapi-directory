import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestartSimulationJobHeaders extends SpeakeasyBase {
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


export class RestartSimulationJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job: string;
}


export class RestartSimulationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: RestartSimulationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RestartSimulationJobRequestBody;
}


export class RestartSimulationJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  restartSimulationJobResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
