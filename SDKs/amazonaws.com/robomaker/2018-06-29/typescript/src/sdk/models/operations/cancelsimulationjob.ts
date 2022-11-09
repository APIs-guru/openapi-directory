import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelSimulationJobHeaders extends SpeakeasyBase {
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


export class CancelSimulationJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job: string;
}


export class CancelSimulationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelSimulationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CancelSimulationJobRequestBody;
}


export class CancelSimulationJobResponse extends SpeakeasyBase {
  @Metadata()
  cancelSimulationJobResponse?: Map<string, any>;

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
