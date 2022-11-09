import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateProcessingJobXAmzTargetEnum {
    SageMakerCreateProcessingJob = "SageMaker.CreateProcessingJob"
}


export class CreateProcessingJobHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateProcessingJobXAmzTargetEnum;
}


export class CreateProcessingJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateProcessingJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateProcessingJobRequest;
}


export class CreateProcessingJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createProcessingJobResponse?: shared.CreateProcessingJobResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
