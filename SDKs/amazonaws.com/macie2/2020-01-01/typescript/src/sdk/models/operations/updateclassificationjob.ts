import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateClassificationJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class UpdateClassificationJobHeaders extends SpeakeasyBase {
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

export enum UpdateClassificationJobRequestBodyJobStatusEnum {
    Running = "RUNNING",
    Paused = "PAUSED",
    Cancelled = "CANCELLED",
    Complete = "COMPLETE",
    Idle = "IDLE",
    UserPaused = "USER_PAUSED"
}


export class UpdateClassificationJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobStatus" })
  jobStatus: UpdateClassificationJobRequestBodyJobStatusEnum;
}


export class UpdateClassificationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateClassificationJobPathParams;

  @SpeakeasyMetadata()
  headers: UpdateClassificationJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateClassificationJobRequestBody;
}


export class UpdateClassificationJobResponse extends SpeakeasyBase {
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
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateClassificationJobResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
